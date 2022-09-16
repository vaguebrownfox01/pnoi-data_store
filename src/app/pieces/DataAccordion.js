import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Stack } from "@mui/material";

const DataAccordion = React.memo(function DataAccordion({ sections }) {
	return (
		<div>
			{sections.map((dataPt, i) => (
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id={`panel1a-header-${i}`}
					>
						<Stack sx={{ ml: 2 }}>
							<Typography variant="h6">{dataPt.name}</Typography>
							<Typography variant="body1" gutterBottom>
								{dataPt.when}
							</Typography>
						</Stack>
					</AccordionSummary>
					<AccordionDetails>
						{dataPt?.component && dataPt.component}
					</AccordionDetails>
				</Accordion>
			))}
		</div>
	);
});

export default DataAccordion;
