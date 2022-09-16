import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";
import DataAccordion from "./DataAccordion";

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
	},
	{
		name: "Vocal Breath [before]",
	},
	{
		name: "Lung Breath [before]",
	},
	{
		name: "PFT [before]",
	},
	{
		name: "Vocal Breath [after]",
	},
	{
		name: "Lung Breath [after]",
	},
	{
		name: "PFT [after]",
	},
	{
		name: "Payment details",
	},
];

export default MainPanel;
