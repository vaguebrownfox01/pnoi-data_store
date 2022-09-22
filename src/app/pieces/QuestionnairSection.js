import { Box, Button, Stack } from "@mui/material";
import * as React from "react";

import QuestionCard from "./QuestionCard";

import { SUB_STORE_KEY_SECDONE } from "../appconfig/sections";
import Wait from "../components/Wait";
import useQuestionnairInput from "../hooks/useQuestionnairInput";

const QuestionnairSection = React.memo(function QuestionnairSection() {
	const [questionState, handleNextQuestion, handleSubmit] =
		useQuestionnairInput();

	const handleQuestionSubmit = (answer, next) => {
		handleNextQuestion(questionState.currentQuestion, answer, next);
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
							done: questionState[SUB_STORE_KEY_SECDONE],
						}}
					/>
					<Stack sx={{ mt: 4 }} justifyContent="center">
						<Button
							variant="contained"
							onClick={handleSubmit}
							disabled={!questionState[SUB_STORE_KEY_SECDONE]}
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
