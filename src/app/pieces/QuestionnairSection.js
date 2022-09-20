import { Box, Button, Stack } from "@mui/material";
import * as React from "react";

import QuestionCard from "./QuestionCard";

import Wait from "../components/Wait";
import useQuestionnairInput from "../hooks/useQuestionnairInput";

const QuestionnairSection = React.memo(function QuestionnairSection() {
	const [questionState, handleNextQuestion, handleSubmit] =
		useQuestionnairInput();

	const handleQuestionSubmit = (answer, next) => {
		handleNextQuestion({
			question: questionState.currentQuestion,
			answer,
			next,
			done: questionState.questionDone,
		});
	};

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
			}}
		>
			{questionState.allQuestions && questionState.currentQuestion ? (
				<>
					<QuestionCard
						{...{
							question: questionState.currentQuestion,
							handleQuestionSubmit,
							done: questionState.questionDone,
						}}
					/>
					<Stack sx={{ mt: 4 }} justifyContent="center">
						<Button
							variant="contained"
							onClick={handleSubmit}
							disabled={!questionState.questionDone}
						>
							Submit
						</Button>
					</Stack>
				</>
			) : (
				<Wait />
			)}
		</Box>
	);
});

export default QuestionnairSection;
