import Box from "@mui/material/Box";
import { orange, pink } from "@mui/material/colors";
import * as React from "react";
import DataAccordion from "./DataAccordion";
import MetadataSection from "./MetadataSection";
import QuestionnairSection from "./QuestionnairSection";
import UploadFileSection from "./UploadFileSection";

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
		when: "before/ no inhaler",
		component: <MetadataSection />,
	},
	{
		name: "Questionnair",
		when: "before/ no inhaler",
		component: <QuestionnairSection />,
	},
	{
		name: "Vocal Breath",
		when: "before/ no inhaler",
		color: pink[400],
		component: <UploadFileSection />,
	},
	{
		name: "Lung Breath",
		when: "before/ no inhaler",
		color: pink[400],
		component: <UploadFileSection />,
	},
	{
		name: "PFT",
		when: "before/ no inhaler",
		color: pink[400],
		component: <UploadFileSection />,
	},
	{
		name: "Vocal Breath",
		when: "after inhaler",
		color: orange[400],
		component: <UploadFileSection />,
	},
	{
		name: "Lung Breath",
		when: "after inhaler",
		color: orange[400],
		component: <UploadFileSection />,
	},
	{
		name: "PFT",
		when: "after inhaler",
		color: orange[400],
		component: <UploadFileSection />,
	},
];

export default MainPanel;
