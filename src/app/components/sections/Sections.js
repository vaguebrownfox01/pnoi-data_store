import CloudDoneIcon from "@mui/icons-material/CloudDone";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PendingIcon from "@mui/icons-material/Pending";
import { AccordionActions, Stack } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { green, yellow } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import * as React from "react";
import useAppSections from "../../hooks/useAppSections";
import Wait from "../../layouts/Wait";
import StatusCard from "../pieces/StatusCard";

const Sections = React.memo(function Sections() {
	const [sections, sectionStatus, subjectStatus] = useAppSections();

	return (
		<div>
			{subjectStatus && <StatusCard {...subjectStatus} />}
			{sections.map((dataPt, i) => (
				<Accordion
					sx={{ mb: dataPt.style.mb }}
					key={`panel1a-header-${i}-key`}
					square={false}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls={`panel1a-content-${i}-key`}
						id={`panel1a-content-${i}-id`}
					>
						{sectionStatus && (
							<AccordionActions>
								{sectionStatus[dataPt["sectionKey"]] ? (
									<CloudDoneIcon sx={{ color: green[400] }} />
								) : (
									<PendingIcon sx={{ color: yellow[400] }} />
								)}
							</AccordionActions>
						)}
						<Stack sx={{ ml: 2 }}>
							<Typography variant="h6">{dataPt.title}</Typography>
							<Typography
								variant="caption"
								fontWeight="bold"
								color="primary"
								{...dataPt.style}
								gutterBottom
							>
								{dataPt.when}
							</Typography>
						</Stack>
					</AccordionSummary>
					<AccordionDetails sx={{ m: 2, mt: 0 }}>
						<React.Suspense fallback={<Wait />}>
							{dataPt.component}
						</React.Suspense>
					</AccordionDetails>
				</Accordion>
			))}
		</div>
	);
});

export default Sections;
