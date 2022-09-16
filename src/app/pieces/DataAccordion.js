import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
						<Typography variant="h6" gutterBottom>
							{dataPt.name}
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Suspendisse malesuada lacus ex, sit amet
							blandit leo lobortis eget.
						</Typography>
					</AccordionDetails>
				</Accordion>
			))}
		</div>
	);
});

export default DataAccordion;
