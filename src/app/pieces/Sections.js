import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AccordionActions, Stack } from "@mui/material";
import PendingIcon from "@mui/icons-material/Pending";
import { green, orange } from "@mui/material/colors";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import useAppSections from "../hooks/useAppSections";

const Sections = React.memo(function Sections() {
	const [sections] = useAppSections();

	return (
		<div>
			{sections.map((dataPt, i) => (
				<Accordion key={`panel1a-header-${i}-key`}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id={`panel1a-header-${i}`}
					>
						<AccordionActions>
							{i % 3 ? ( // TODO: section state indicator
								<PendingIcon sx={{ color: orange[400] }} />
							) : (
								<CloudDoneIcon sx={{ color: green[400] }} />
							)}
						</AccordionActions>
						<Stack sx={{ ml: 2 }}>
							<Typography variant="h6">{dataPt.title}</Typography>
							<Typography
								variant="caption"
								fontWeight="bold"
								color={dataPt.color || "primary"}
								gutterBottom
							>
								{dataPt.when}
							</Typography>
						</Stack>
					</AccordionSummary>
					<AccordionDetails sx={{ m: 2, mt: 0 }}>
						{dataPt.component}
					</AccordionDetails>
				</Accordion>
			))}
		</div>
	);
});

export default Sections;
