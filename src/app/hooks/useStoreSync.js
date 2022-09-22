import React from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { SUBJECT_ID, SUBJECT_NAME } from "../appconfig/metadata";
import { initSubject, SUB_STORE_KEY_BIODATA } from "../appconfig/sections";
import {
	firestoreSubjectSync,
	subjectsCollectionQuery,
} from "../firebase/client/firestore";

const useStoreSync = () => {
	//
	const [allSubjects, loading] = useCollectionData(subjectsCollectionQuery);
	const [currentSubject, setCurrentSubject] = React.useState(initSubject);

	function handleSubjectSelect(subjectInfo) {
		localStorage.setItem(SUBJECT_ID, subjectInfo[SUBJECT_ID]);
		// setCurrentSubject((p) => ({ ...p, ...subjectInfo }));

		setCurrentSubject(subjectInfo);
	}

	async function handleFormInfoSync(formInfo) {
		const afterSync = await firestoreSubjectSync(
			SUB_STORE_KEY_BIODATA,
			formInfo,
			formInfo[SUBJECT_NAME]
		);

		// setCurrentSubject((p) => ({ ...p, ...syncData }));
		setCurrentSubject(afterSync);

		localStorage.setItem(SUBJECT_ID, afterSync[SUBJECT_ID]);
	}

	return [
		loading,
		allSubjects,
		currentSubject,
		handleSubjectSelect,
		handleFormInfoSync,
	];
};

export default useStoreSync;
