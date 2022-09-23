import React from "react";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { SUBJECT_ID } from "../appconfig/metadata";
import {
	SUB_STORE_KEY_SECDONE,
	SUB_STORE_KEY_SURVEY,
} from "../appconfig/sections";
import {
	firestoreSubjectSync,
	surveyDocQuery,
} from "../firebase/client/firestore";

const useQuestionnairInput = () => {
	// States
	const [questionState, setQuestionState] = React.useState({});

	// Constants
	const [questions] = useDocumentData(surveyDocQuery);

	// Helpers
	function handleNextQuestion(question, answer, next) {
		if (next) {
			let nextQno = null;
			if (
				question.nextQnos.length === 1 ||
				answer.answer === question.options[0]
			) {
				nextQno = question.nextQnos[0];
			} else {
				nextQno = question.nextQnos[1];
			}

			const _qdone = nextQno === -1;
			const _answeredQ = { ...question, answer: answer.answer };

			setQuestionState((p) => ({
				...p,
				[SUB_STORE_KEY_SECDONE]: _qdone,
				answeredQs: [...p.answeredQs, _answeredQ],
				currentQuestion: p.allQuestions[nextQno] || p.currentQuestion,
			}));
		} else {
			let _answeredQs = [...questionState.answeredQs];
			if (_answeredQs.length < 1) {
				setQuestionState((p) => ({ ...p, questionDone: false }));
				return;
			}

			const _currentQuestion = _answeredQs.pop();
			setQuestionState((p) => ({
				...p,
				[SUB_STORE_KEY_SECDONE]: false,
				answeredQs: [..._answeredQs],
				currentQuestion: _currentQuestion,
			}));
		}
	}

	async function handleSubmit() {
		// Current Selected Subject Key
		const key = localStorage.getItem(SUBJECT_ID);

		if (!key) return false;

		let surveyData = {
			[SUBJECT_ID]: key,
			...questionState,
			[SUB_STORE_KEY_SECDONE]: true,
		};

		const data = await firestoreSubjectSync(
			SUB_STORE_KEY_SURVEY,
			surveyData,
			"na"
		);

		data && setQuestionState(data[SUB_STORE_KEY_SURVEY]);

		return !!data;
	}

	const handleResetQuestion = React.useCallback(() => {
		if (questions) {
			setQuestionState({
				allQuestions: questions,
				currentQuestion: questions[1],
				[SUB_STORE_KEY_SECDONE]: false,
				answeredQs: [],
			});
		}
	}, [questions]);

	React.useDebugValue("Questionnair Input");

	// Reset Question State
	React.useEffect(() => {
		handleResetQuestion();
	}, [handleResetQuestion]);

	return [questionState, handleNextQuestion, handleSubmit];
};

export default useQuestionnairInput;
