import { collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { v4 as uuid } from "uuid";
import { SUBJECT_ID } from "../../appconfig/metadata";
import { initSubject } from "../../appconfig/sections";
import {
	SUBJECT_COLLECTION,
	SUBJECT_UUID_LEN,
	SURVEY_DOC_PATH,
} from "../creds/.setup";
import { db } from "../creds/client";

export const subjectsCollectionQuery = collection(db, SUBJECT_COLLECTION);
export const surveyDocQuery = doc(db, SURVEY_DOC_PATH);

export const firestoreSubjectSync = async (sectionKey, sectionData, idTag) => {
	let storSync = updateDoc;

	let syncData = { ...sectionData };
	let syncDoc = {};

	if (!syncData[SUBJECT_ID]) {
		if (!idTag) return null;
		storSync = setDoc;

		let _id = getId(idTag);

		syncData[SUBJECT_ID] = _id;
		syncDoc = { ...initSubject };
	}

	syncDoc = {
		...syncDoc,
		[SUBJECT_ID]: syncData[SUBJECT_ID],
		[sectionKey]: syncData,
	};

	const docPath = `/${SUBJECT_COLLECTION}/${syncDoc[SUBJECT_ID]}`;

	await storSync(doc(db, docPath), syncDoc).catch((err) => {
		console.log("fb firestore error :: ", err);
		syncDoc = null;
	});

	return syncDoc;
};

const getId = (name = "unnamed") => {
	let id = name.toLowerCase().replace(/[^a-zA-Z]/g, "");
	console.log("creating new ID", id);
	return `${id}_${uuid().slice(0, SUBJECT_UUID_LEN)}`;
};
