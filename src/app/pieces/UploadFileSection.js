import UploadIcon from "@mui/icons-material/UploadRounded";
import { Button, Stack, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";
import DropZone from "../components/DropZone";
import Wait from "../components/Wait";
import useFileUpload from "../hooks/useFileUpload";

const UploadFileSection = React.memo(function UploadFileSection(props) {
	const [
		isReady,
		isUploading,
		inputFile,
		newFileName,
		handleFileDrop,
		handleFileNameInput,
		handleFileUpload,
	] = useFileUpload(props);

	const handleSubmit = () => {
		handleFileUpload();
		console.log(props);
	};

	return (
		<Stack direction="column" justifyContent="space-around">
			<Box sx={{ height: "100%", m: 2 }}>
				<DropZone {...{ handleFileDrop, ...props }} />
			</Box>
			<Stack
				direction="row"
				justifyContent="center"
				justifyItems="center"
				alignItems="center"
			>
				<TextField
					sx={{ m: "auto", ml: 2, mr: 2, width: "100%" }}
					size="small"
					value={newFileName}
					onChange={handleFileNameInput}
					placeholder={`filename`}
					fontWeight="bold"
				/>
				{isUploading && <Wait size={24} />}
			</Stack>

			<Button
				startIcon={<UploadIcon />}
				variant="contained"
				sx={{ mt: 2, ml: 2, mr: 2 }}
				onClick={handleSubmit}
				disabled={!isReady}
			>
				Upload
			</Button>
		</Stack>
	);
});

export default UploadFileSection;
