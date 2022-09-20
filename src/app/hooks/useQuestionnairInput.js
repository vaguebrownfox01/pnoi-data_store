import React from "react";

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
		console.log("write to firebase pending");
		console.log(questionState);
	}

	React.useDebugValue("Questionnair Input");

	React.useEffect(() => {
		console.log({ questions });
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
