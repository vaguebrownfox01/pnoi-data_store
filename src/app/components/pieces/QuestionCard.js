import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
	Box,
	Collapse,
	FormControl,
	FormControlLabel,
	FormLabel,
	IconButton,
	Radio,
	RadioGroup,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import * as React from "react";

const classes = {
	cardRoot: {},
	formRoot: { margin: "auto", minWidth: "70%" },
	radioGroup: { m: [0, 2] },
	textField: { m: [2, 2] },
	buttonRoot: {
		display: "flex",
		justifyContent: "space-around",
		marginTop: 2,
	},
};

const QuestionCard = React.memo(function QuestionCard({
	question,
	handleQuestionSubmit,
	done,
}) {
	const [answer, setAnswer] = React.useState({
		question: question.question,
		answer: null,
	});

	const handleRadioButton = ({ target }) => {
		const { value } = target;
		setAnswer((p) => ({ ...p, answer: value }));
	};

	function handleNext() {
		if (!answer.answer && this.next) return;
		let ans = answer;
		setAnswer(() => ({ question: null, answer: null }));

		handleQuestionSubmit(ans, this.next);
	}

	return (
		<>
			<Collapse in={!done}>
				<Stack justifyContent="center">
					<FormControl
						sx={classes.formRoot}
						onSubmit={handleNext.bind({ next: true })}
					>
						<FormLabel id={`questionformlabel${question.qno}`}>
							<Typography
								variant="h6"
								component="div"
								gutterBottom
							>{`${question.qno}. ${question.question}`}</Typography>
						</FormLabel>
						<RadioGroup
							id={`radiooptions-${question.qno}`}
							sx={classes.radioGroup}
							value={answer.answer}
							onChange={handleRadioButton}
							name="radio-buttons-group-options"
							aria-labelledby="radio-buttons-group-label"
						>
							{question.options && (
								<>
									{question.options.map((o, i) => (
										<FormControlLabel
											id={`${o}-${question.qno}`}
											key={`${o}-${i}`}
											value={o}
											control={<Radio />}
											label={o}
										/>
									))}
								</>
							)}
							<>
								{question?.options?.length === 0 && (
									<TextField
										id={`textinput-${question.qno}`}
										sx={classes.textField}
										variant="outlined"
										type="text"
										value={answer.a}
										label="Answer"
										placeholder="Enter your answer"
										onChange={handleRadioButton}
									/>
								)}
							</>
						</RadioGroup>

						<Box sx={classes.buttonRoot}>
							<IconButton
								disabled={question.qno === 1}
								onClick={handleNext.bind({ next: false })}
							>
								<ArrowBackIosIcon />
							</IconButton>
							<IconButton
								disabled={done}
								onClick={handleNext.bind({ next: true })}
							>
								<ArrowForwardIosIcon />
							</IconButton>
						</Box>
					</FormControl>
				</Stack>
			</Collapse>
			<Collapse in={done}>
				<Typography
					sx={{ textAlign: "center" }}
					color="GrayText"
					variant="h6"
					gutterBottom
				>
					Done!!!
				</Typography>
			</Collapse>
		</>
	);
});

export default QuestionCard;
