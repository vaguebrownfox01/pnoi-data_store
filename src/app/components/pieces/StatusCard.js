import { Card, CardContent, Typography, Zoom } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import {
	SUBJECT_AGE,
	SUBJECT_NAME,
	SUBJECT_TYPE,
} from "../../appconfig/metadata";
import { SUB_STORE_KEY_BIODATA } from "../../appconfig/sections";

const StatusCard = React.memo(function StatusCard(subjectInfo) {
	const [state, setState] = React.useState({});

	React.useEffect(() => {
		if (subjectInfo) {
			if (subjectInfo[SUB_STORE_KEY_BIODATA]) {
				const {
					[SUB_STORE_KEY_BIODATA]: {
						[SUBJECT_NAME]: name,
						[SUBJECT_AGE]: age,
						[SUBJECT_TYPE]: type,
					},
				} = subjectInfo;

				setState({ name, age, type });
			}
		}
	}, [subjectInfo]);

	return (
		<>
			{state.name && (
				<Zoom in={!!state.name}>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "stretch",
							marginBottom: 2,
						}}
					>
						<Card sx={{ paddingLeft: 8 }}>
							<CardContent>
								<span>
									<Typography
										gutterBottom
										variant="h5"
										component="div"
									>
										{`${state.name}, ${state.age}y`}
									</Typography>
								</span>
								<Typography variant="h6" color="teal">
									{`${state.type}`}
								</Typography>
							</CardContent>
						</Card>
					</Box>
				</Zoom>
			)}
		</>
	);
});

export default StatusCard;
