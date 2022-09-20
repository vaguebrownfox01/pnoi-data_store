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
				<Accordion key={`panel1a-header-${i}-key`}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id={`panel1a-header-${i}`}
					>
						<Stack sx={{ ml: 2 }}>
							<Typography variant="h6">{dataPt.name}</Typography>
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
					<AccordionDetails sx={{ m: [0, 2] }}>
						{dataPt?.component && dataPt.component}
					</AccordionDetails>
				</Accordion>
			))}
		</div>
	);
});

export default DataAccordion;
