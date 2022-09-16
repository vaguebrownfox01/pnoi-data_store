import * as React from "react";
import clsx from "clsx";
import { useDropzone, DropzoneOptions } from "react-dropzone";
import darktheme from "../appconfig/theme";
import { Box } from "@mui/system";
// import theme from "../styles/theme";

const classes = {
	dropzone: {
		flex: 1,
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		padding: 2,
		borderWidth: 2,
		borderRadius: 2,
		borderColor: darktheme.palette.primary.accent,
		borderStyle: "dashed",
		color: darktheme.palette.grey[400],
		outline: "none",
		transition: "border .24s ease-in-out",
		"&:focus": {
			borderColor: darktheme.palette.primary.accent,
		},
		cursor: "pointer",
	},
	dragActive: {
		borderColor: darktheme.palette.secondary.main,
	},
	dragAccept: {
		borderColor: darktheme.palette.primary.main,
	},
	dragReject: {
		borderColor: darktheme.palette.error.main,
	},
};

const DropZone = React.memo(function DropZone({ dropzoneOptions }) {
	const handleDrop = React.useCallback((files) => {
		console.log({ files });
	});
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
			{!isDragActive ? (
				<p>Drag and drop one image here, or click to select file</p>
			) : (
				<em>(Only *.jpeg and *.png images will be accepted)</em>
			)}
		</Box>
	);
});

export default DropZone;
