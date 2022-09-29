import UploadIcon from "@mui/icons-material/UploadRounded";
import { Button, Stack, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";
import DropZone from "../../layouts/DropZone";
import Wait from "../../layouts/Wait";
import useUpload from "../../hooks/useUpload";

const UploadSection = React.memo(function UploadSection(props) {
	const [
		isReady,
		isUploading,
		,
		newFileName,
		handleFileDrop,
		handleFileNameInput,
		handleFileUpload,
	] = useUpload(props);

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

export default UploadSection;
