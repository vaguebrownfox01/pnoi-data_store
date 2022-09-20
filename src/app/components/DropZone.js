import * as React from "react";
import clsx from "clsx";
import { useDropzone } from "react-dropzone";
import darktheme from "../appconfig/theme";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const classes = {
	dropzone: {
		flex: 1,
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		padding: 2,
		borderWidth: 2,
		borderRadius: 2,
		borderColor: darktheme.palette.primary.main,
		borderStyle: "dashed",
		color: darktheme.palette.grey[400],
		outline: "none",
		transition: "border .24s ease-in-out",
		"&:focus": {
			borderColor: darktheme.palette.secondary.highlight,
		},
		cursor: "pointer",
		p: 4,
	},
	dragActive: {
		borderColor: darktheme.palette.secondary.highlight,
	},
	dragAccept: {
		borderColor: darktheme.palette.primary.main,
	},
	dragReject: {
		borderColor: darktheme.palette.error.main,
	},
};

const DropZone = React.memo(function DropZone({ dropzoneOptions }) {
	const handleDrop = (files) => {
		console.log({ files });
	};
	const {
		getRootProps,
		getInputProps,
		isDragActive,
		isDragAccept,
		isDragReject,
	} = useDropzone({
		multiple: false,
		onDrop: handleDrop,
		// accept: "image/*",
		...dropzoneOptions,
	});

	return (
		<Box
			sx={classes.dropzone}
			{...getRootProps({
				className: clsx(classes.dropzone, {
					[classes.dragActive]: isDragActive,
					[classes.dragAccept]: isDragAccept,
					[classes.dragReject]: isDragReject,
				}),
			})}
		>
			<input {...getInputProps()} />
			<Typography variant="caption" textAlign="center">
				{!isDragActive
					? "Drag and drop one file here, or click to select file"
					: "Make sure file is relevant to the field"}
			</Typography>
		</Box>
	);
});

export default DropZone;
