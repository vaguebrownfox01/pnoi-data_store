import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import * as React from "react";

import QuestionCard from "../pieces/QuestionCard";

import RestartIcon from "@mui/icons-material/RestartAlt";
import { orange, red } from "@mui/material/colors";
import { SUB_STORE_KEY_SECDONE } from "../../appconfig/sections";
import useSurveyInput from "../../hooks/useSurveyInput";
import Wait from "../../layouts/Wait";

const SurveySection = React.memo(function SurveySection({ setSectionState }) {
	const [questionState, handleNextQuestion, handleSubmit, handleReset] =
		useSurveyInput(setSectionState);

	const [isSync, setIsSync] = React.useState(false);
	const handleQuestionSubmit = (answer, next) => {
		handleNextQuestion(questionState.currentQuestion, answer, next);
	};

	const handleQuestionSubmitData = async () => {
		setIsSync(true);
		await handleSubmit();
		setIsSync(false);
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

					<Stack sx={{ mt: 2 }} justifyContent="center">
						<Stack direction="row" justifyContent="center">
							<IconButton
								sx={{ mb: 2 }}
								variant="contained"
								onClick={handleReset}
							>
								<RestartIcon sx={{ color: orange[400] }} />
							</IconButton>
						</Stack>
						{isSync && <Wait />}
						{questionState.subjectSurvey?.isExcluded && (
							<Typography
								sx={{
									color: red[400],
									textAlign: "center",
									mb: 2,
								}}
							>
								Subject Not Eligible For Data Recording.
							</Typography>
						)}
						<Button
							variant="contained"
							onClick={handleQuestionSubmitData}
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

export default SurveySection;
