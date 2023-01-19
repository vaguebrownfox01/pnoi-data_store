import React from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import {
	setSubjectLocalValues,
	SUBJECT_ID,
	SUBJECT_NAME,
} from "../appconfig/metadata";
import {
	appSectionsInfo,
	initSubject,
	SUB_STORE_KEY_SECDONE,
} from "../appconfig/sections";
import {
	firestoreSubjectSync,
	subjectsCollectionQuery,
} from "../firebase/client/firestore";

const useStoreSync = (setSectionState, setSubjectStatus) => {
	const [allSubjects] = useCollectionData(subjectsCollectionQuery);
	const [currentSubject, setCurrentSubject] = React.useState(initSubject);

	function handleSubjectSelect(subjectInfo) {
		setCurrentSubject(subjectInfo);
	}

	async function handleStorSync(sectionKey, sectionData) {
		const _nsectionData = {
			...sectionData,
			[SUBJECT_ID]: currentSubject[SUBJECT_ID],
			[SUB_STORE_KEY_SECDONE]: true,
		};

		const afterSync = await firestoreSubjectSync(
			sectionKey,
			_nsectionData,
			sectionData[SUBJECT_NAME] || null
		);

		if (afterSync) setCurrentSubject((p) => ({ ...p, ...afterSync }));
	}

	React.useEffect(() => {
		if (currentSubject) {
			setSubjectLocalValues(currentSubject);

			appSectionsInfo.forEach(({ sectionKey }) => {
				const state = currentSubject[sectionKey][SUB_STORE_KEY_SECDONE];
				setSectionState(sectionKey, state);
			});

			setSubjectStatus(currentSubject);
		}
	}, [currentSubject, setSectionState]);

	return [allSubjects, currentSubject, handleSubjectSelect, handleStorSync];
};

export default useStoreSync;
