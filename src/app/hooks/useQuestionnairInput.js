import React from "react";

const questions = require("../appconfig/content/questions");

const useQuestionnairInput = () => {
	const [questionState, setQuestionState] = React.useState({
		allQuestions: questions,
		currentQuestion: questions[1],
		questionDone: false,
		answeredQs: [],
	});

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

			return {
				...questionState,
				questionDone: _qdone,
				answeredQs: [...questionState.answeredQs, question],
				currentQuestion:
					questionState.allQuestions[nextQno] ||
					questionState.currentQuestion,
			};
		} else {
			let _answeredQs = [...questionState.answeredQs];
			if (_answeredQs.length < 1) {
				return { ...questionState, questionDone: false };
			}

			const _currentQuestion = _answeredQs.pop();
			return {
				...questionState,
				questionDone: false,
				answeredQs: [..._answeredQs],
				currentQuestion: _currentQuestion,
			};
		}
	}

	React.useDebugValue("Questionnair Input");

	return [questionState, handleNextQuestion];
};

export default useQuestionnairInput;
