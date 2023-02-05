import React from "react";
import { getSubjectLocalValues, SUBJECT_ID } from "../appconfig/metadata";
import { SUB_STORE_KEY_SECDONE } from "../appconfig/sections";
import { firestoreSubjectSync } from "../firebase/client/firestore";
import { firebaseFileUpload } from "../firebase/client/storage";
import { v4 as uuid } from "uuid";
import { APP_VERSION, PROJECT_TAG } from "../appconfig/info";
import { FILENAME_SEP } from "../firebase/creds/setup";

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
	const createFileName = React.useCallback(
		(ext) => {
			// Current Selected Subject Key
			const src = `${PROJECT_TAG}_${APP_VERSION}`;
			const { [SUBJECT_ID]: sid } = getSubjectLocalValues();
			const { ftag } = props;
			const fhash = uuid().slice(0, 4);
			const ftype = ext;

			let nomen = [src, sid, ftag, fhash, "comnt"].join(FILENAME_SEP);

			return [sid, `${nomen}.${ftype}`];
		},
		[props]
	);

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
		const { [SUBJECT_ID]: subjectId } = getSubjectLocalValues();
		if (!subjectId) return alert("Subject ID not found!");

		if (inputFile) {
			setIsUploading(true);

			const _done = await firebaseFileUpload(
				subjectId,
				inputFile,
				newFileName
			);
			if (_done) {
				const { sectionKey, setSectionState } = props;
				const timestamp = `file_${Date.now()}`;

				let uploadData = {
					[SUBJECT_ID]: subjectId,
					[timestamp]: { fileName: newFileName, link: _done },
					[SUB_STORE_KEY_SECDONE]: true,
				};
				const _data = await firestoreSubjectSync(
					sectionKey,
					uploadData,
					"na"
				);
				setSectionState(sectionKey, !!_data);
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
			const ext = inputFile.name.split(".").at(-1);
			const [, fname] = createFileName(ext);
			setNewFileName(fname);
		}
	}, [inputFile, createFileName]);

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
