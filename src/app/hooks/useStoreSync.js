import React from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import {
	CURRENT_SUBJECT,
	SUBJECT_ID,
	SUBJECT_NAME,
} from "../appconfig/metadata";
import {
	allSections,
	initSubject,
	SUB_STORE_KEY_BIODATA,
	SUB_STORE_KEY_SECDONE,
} from "../appconfig/sections";
import {
	firestoreSubjectSync,
	subjectsCollectionQuery,
} from "../firebase/client/firestore";

const useStoreSync = (setSectionState) => {
	//
	const [allSubjects, loading] = useCollectionData(subjectsCollectionQuery);
	const [currentSubject, setCurrentSubject] = React.useState(initSubject);

	function handleSubjectSelect(subjectInfo) {
		localStorage.setItem(SUBJECT_ID, subjectInfo[SUBJECT_ID]);
		localStorage.setItem(CURRENT_SUBJECT, JSON.stringify(subjectInfo));
		setCurrentSubject(subjectInfo);
	}

	async function handleFormInfoSync(formInfo) {
		const syncData = { ...formInfo, [SUB_STORE_KEY_SECDONE]: true };
		const afterSync = await firestoreSubjectSync(
			SUB_STORE_KEY_BIODATA,
			syncData,
			formInfo[SUBJECT_NAME]
		);
		afterSync && setCurrentSubject((p) => ({ ...p, ...afterSync }));

		console.log("after sync", afterSync);
	}

	React.useEffect(() => {
		if (currentSubject) {
			console.log({ currentSubject });

			allSections.forEach((sectionKey) => {
				const state = currentSubject[sectionKey][SUB_STORE_KEY_SECDONE];
				setSectionState(sectionKey, state);
			});
		}
	}, [currentSubject, setSectionState]);

	return [
		loading,
		allSubjects,
		currentSubject,
		handleSubjectSelect,
		handleFormInfoSync,
	];
};

export default useStoreSync;
