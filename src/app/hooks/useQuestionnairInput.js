import React from "react";
import { SUBJECT_ID } from "../appconfig/metadata";
import { SUB_STORE_KEY_SURVEY } from "../appconfig/sections";
import { firestoreSubjectSync } from "../firebase/client/firestore";

const { questions } = require("../appconfig/content/questions");

const useQuestionnairInput = () => {
	const [questionState, setQuestionState] = React.useState({});

	function handleNextQuestion({ question, answer, next }) {
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
				questionDone: _qdone,
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
				questionDone: false,
				answeredQs: [..._answeredQs],
				currentQuestion: _currentQuestion,
			}));
		}
	}

	function handleSubmit() {
		//TODO: write to firebase

		const key = localStorage.getItem(SUBJECT_ID);

		let surveyData = { [SUBJECT_ID]: key, ...questionState };

		firestoreSubjectSync(SUB_STORE_KEY_SURVEY, surveyData, "");
	}

	React.useDebugValue("Questionnair Input");

	React.useEffect(() => {
		setQuestionState({
			allQuestions: questions,
			currentQuestion: questions[1],
			questionDone: false,
			answeredQs: [],
		});
	}, []);

	return [questionState, handleNextQuestion, handleSubmit];
};

export default useQuestionnairInput;
