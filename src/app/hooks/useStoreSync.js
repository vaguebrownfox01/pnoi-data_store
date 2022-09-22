import React from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { SUBJECT_NAME } from "../appconfig/metadata";
import { initSubject } from "../appconfig/sections";
import {
	firestoreSubjectSync,
	subjectsQuery,
} from "../firebase/client/firestore";

const useStoreSync = () => {
	//
	const [allSubjects, loading] = useCollectionData(subjectsQuery);
	const [currentSubject, setCurrentSubject] = React.useState(initSubject);

	function handleSubjectSelect(subjectInfo) {
		setCurrentSubject(subjectInfo);
	}

	async function handleFormInfoSync(formInfo) {
		const syncData = await firestoreSubjectSync(
			formInfo,
			formInfo[SUBJECT_NAME]
		);

		setCurrentSubject(syncData);
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
