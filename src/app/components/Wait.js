import * as React from "react";
import { Box, CircularProgress } from "@mui/material";

const Wait = React.memo(function Wait(props) {
	return (
		<Box sx={{ display: "flex", justifyContent: "center", margin: 2 }}>
			<CircularProgress {...props} color="primary" />
		</Box>
	);
});

export default Wait;
