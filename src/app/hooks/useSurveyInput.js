import React from "react";
import { useDocumentData } from "react-firebase-hooks/firestore";
import {
	getSubjectLocalValues,
	SUBJECT_ID,
	SUBJECT_NAME,
} from "../appconfig/metadata";
import {
	SUB_STORE_KEY_SECDONE,
	SUB_STORE_KEY_SURVEY,
} from "../appconfig/sections";
import {
	firestoreSubjectSync,
	surveyDocQuery,
} from "../firebase/client/firestore";

const useSurveyInput = (setSectionState) => {
	const [questionState, setQuestionState] = React.useState({});

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
		const info = getSubjectLocalValues();

		if (!info[SUBJECT_ID]) return false;

		let _nsectionData = {
			...questionState,
			[SUBJECT_ID]: info[SUBJECT_ID],
			[SUBJECT_NAME]: info[SUBJECT_NAME],
			[SUB_STORE_KEY_SECDONE]: true,
		};

		const afterSync = await firestoreSubjectSync(
			SUB_STORE_KEY_SURVEY,
			_nsectionData,
			null
		);

		if (afterSync) setQuestionState((p) => ({ ...p, ...afterSync }));

		setSectionState(SUB_STORE_KEY_SURVEY, !!afterSync);
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

	const handleReset = () => {
		handleResetQuestion();
	};

	React.useDebugValue("Questionnair Input");

	// Reset Question State
	React.useEffect(() => {
		handleResetQuestion();
	}, [handleResetQuestion]);

	return [questionState, handleNextQuestion, handleSubmit, handleReset];
};

export default useSurveyInput;
