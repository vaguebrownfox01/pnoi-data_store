import React from "react";
import { SUBJECT_ID } from "../appconfig/metadata";
import { SUB_STORE_KEY_SECDONE } from "../appconfig/sections";
import { firestoreSubjectSync } from "../firebase/client/firestore";
import { firebaseFileUpload } from "../firebase/client/storage";

const useFileUpload = (props) => {
	const [isUploading, setIsUploading] = React.useState(false);
	const [isReady, setReady] = React.useState(false);
	const [inputFile, setInputFile] = React.useState(null);
	const [newFileName, setNewFileName] = React.useState("");

	// Helpers
	// 1. subject-id_ : generated uuid
	// 2. subject-kind_ : Patient (P)/ Control (C)/ Unknown (XX)
	// 4. data-kind_ : Vocal Lung Audio (VBA), Lung Breath Audio (LBA), PFT Report (PFT), Miscl (XXX)
	// 5. file-type_ : WAV/ PDF
	// function createFileName(sid, skind, dkind, ftype, fhash) {
	// 	return `${sid}_${skind}_${dkind}_${fhash}_.${ftype}`;
	// }

	// Handlers
	function handleFileDrop(fileObj) {
		setInputFile(fileObj);
	}

	function handleFileNameInput({ target }) {
		const { value } = target;

		setNewFileName(value);
	}

	async function handleFileUpload() {
		// Current Selected Subject Key
		const key = localStorage.getItem(SUBJECT_ID);
		if (!key) return false;

		if (inputFile) {
			setIsUploading(true);

			const { sectionKey, setSectionState } = props;
			let uploadData = {
				[SUBJECT_ID]: key,
				fileName: newFileName,
				[SUB_STORE_KEY_SECDONE]: true,
			};

			const _done = await firebaseFileUpload(inputFile, newFileName);
			if (_done) {
				const _data = await firestoreSubjectSync(
					sectionKey,
					uploadData,
					"na"
				);
				setSectionState(sectionKey, !!_data);
				console.log({ _done, _data });
			}

			setIsUploading(false);
		}

		// Reset
		setInputFile(null);
		setNewFileName("");
	}

	// Effect
	// Set filename on Drop
	React.useEffect(() => {
		if (inputFile) {
			setNewFileName(inputFile.name);
		}
	}, [inputFile]);

	// File Upload Ready Check
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
