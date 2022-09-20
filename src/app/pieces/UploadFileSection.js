import * as React from "react";
import Box from "@mui/material/Box";
import { Button, Stack, Typography } from "@mui/material";
import DropZone from "../components/DropZone";
import UploadIcon from "@mui/icons-material/UploadRounded";

const UploadFileSection = React.memo(function UploadFileSection() {
	return (
		<>
			<Stack
				sx={{ p: 0 }}
				direction="column"
				justifyContent="space-around"
			>
				<Box sx={{ height: "100%", m: 2 }}>
					<DropZone />
				</Box>
				<Typography varient="body" fontWeight="bold" textAlign="center">
					filename.type
				</Typography>
				<Button
					startIcon={<UploadIcon />}
					variant="contained"
					sx={{ mt: 2, ml: 2, mr: 2 }}
					// onClick={handleSubmit}
					// disabled={!done}
				>
					Upload
				</Button>
			</Stack>
		</>
	);
});

export default UploadFileSection;
