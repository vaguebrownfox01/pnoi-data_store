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

export const firestoreSubjectSync = async (sectionKey, data, idTag) => {
	let storSync = updateDoc;

	const _data = { ...data };
	let document = {
		[SUBJECT_ID]: _data[SUBJECT_ID],
	};

	if (!document[SUBJECT_ID]) {
		storSync = setDoc;

		let _id = getId(idTag);

		document = {
			...initSubject,
			[SUBJECT_ID]: _id,
		};

		_data[SUBJECT_ID] = _id;
	}

	document = {
		...document,
		[sectionKey]: _data,
	};

	const docPath = `/${SUBJECT_COLLECTION}/${document[SUBJECT_ID]}`;

	await storSync(doc(db, docPath), document).catch((err) => {
		console.log("fb firestore error :: ", err);
		document = null;
	});

	return document;
};

const getId = (name = "unnamed") => {
	let id = name.toLowerCase().replace(/[^a-zA-Z]/g, "");
	console.log("creating new ID", id);
	return `${id}-${uuid().slice(0, SUBJECT_UUID_LEN)}`;
};
