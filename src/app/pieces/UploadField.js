import * as React from "react";
import Box from "@mui/material/Box";
import { Stack, Typography } from "@mui/material";
import DropZone from "../components/DropZone";

const UploadField = React.memo(function UploadField() {
	return (
		<Stack sx={{ p: 2 }} direction="column" justifyContent="space-around">
			<Box sx={{ height: "100%" }}>
				<DropZone />
			</Box>
			<Typography></Typography>
		</Stack>
	);
});

export default UploadField;
