import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";
import DataAccordion from "./DataAccordion";
import MetadataSection from "./MetadataSection";
import QuestionnairSection from "./QuestionnairSection";
import UploadField from "./UploadField";

const MainPanel = React.memo(function MainPanel({ children }) {
	return (
		<Box
			sx={{
				width: "100%",
				height: "100%",
			}}
		>
			<DataAccordion sections={pnoiDataPoints} />
		</Box>
	);
});

export const pnoiDataPoints = [
	{
		name: "Meta-data",
		when: "before",
		component: <MetadataSection />,
	},
	{
		name: "Questionnair",
		when: "before",
		component: <QuestionnairSection />,
	},
	{
		name: "Payment details",
		when: "before",
	},
	{
		name: "Vocal Breath",
		when: "before",
		component: <UploadField />,
	},
	{
		name: "Lung Breath",
		when: "before",
	},
	{
		name: "PFT",
		when: "before",
	},
	{
		name: "Vocal Breath",
		when: "after",
	},
	{
		name: "Lung Breath",
		when: "after",
	},
	{
		name: "PFT",
		when: "after",
	},
];

export default MainPanel;
