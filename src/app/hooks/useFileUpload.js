import React from "react";
import { firebaseFileUpload } from "../firebase/client/storage";

const useFileUpload = (sectionInfo) => {
	const { ftag } = sectionInfo;
	const [isUploading, setIsUploading] = React.useState(false);
	const [isReady, setReady] = React.useState(false);
	const [inputFile, setInputFile] = React.useState(null);
	const [newFileName, setNewFileName] = React.useState("");

	// 1. subject-id_ : generated uuid
	// 2. subject-kind_ : Patient (P)/ Control (C)/ Unknown (XX)
	// 4. data-kind_ : Vocal Lung Audio (VBA), Lung Breath Audio (LBA), PFT Report (PFT), Miscl (XXX)
	// 5. file-type_ : WAV/ PDF
	function createFileName(sid, skind, dkind, ftype, fhash) {
		return `${sid}_${skind}_${dkind}_${fhash}_.${ftype}`;
	}

	function handleFileDrop(fileObj) {
		setInputFile(fileObj);
	}

	function handleFileNameInput({ target }) {
		const { value } = target;

		setNewFileName(value);
	}

	async function handleFileUpload() {
		setIsUploading(true);

		if (inputFile) {
			await firebaseFileUpload(inputFile, newFileName);
		}

		// Reset
		setIsUploading(false);
		setInputFile(null);
		setNewFileName("");
	}

	React.useEffect(() => {
		if (inputFile) {
			setNewFileName(inputFile.name);
		}
	}, [inputFile]);

	React.useEffect(() => {
		setReady(!isUploading && newFileName && inputFile);
	}, [inputFile, newFileName, isUploading]);

	return [
		isReady,
		isUploading,
		inputFile,
		newFileName,
		handleFileDrop,
		handleFileNameInput,
		handleFileUpload,
	];
};

export default useFileUpload;
