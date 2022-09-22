import Box from "@mui/material/Box";
import * as React from "react";
import Sections from "./Sections";

const classes = {
	root: {
		width: "100%",
		height: "100%",
	},
};

const MainPanel = React.memo(function MainPanel() {
	return (
		<Box sx={classes.root}>
			<Sections />
		</Box>
	);
});

export default MainPanel;
