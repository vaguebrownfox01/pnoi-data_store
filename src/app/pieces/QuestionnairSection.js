import { Box } from "@mui/material";
import * as React from "react";

import QuestionCard from "./QuestionCard";

import Wait from "../components/Wait";
import useQuestionnairInput from "../hooks/useQuestionnairInput";

const QuestionnairSection = React.memo(function QuestionnairSection() {
	const [question, handleNextQuestion] = useQuestionnairInput();

	const handleSubmit = ({ answer, next }) => {
		handleNextQuestion({
			question: question.currentQuestion,
			answer,
			next,
			done: question.questionDone,
		});
	};

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
			}}
		>
			{question.allQuestions ? (
				<QuestionCard
					{...{
						question: question.currentQuestion,
						handleSubmit,
						done: question.questionDone,
					}}
				/>
			) : (
				<Wait />
			)}
		</Box>
	);
});

export default QuestionnairSection;
