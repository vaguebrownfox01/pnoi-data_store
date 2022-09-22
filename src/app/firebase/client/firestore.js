import { v4 as uuid } from "uuid";
import { db } from "../creds/client";
import { collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { SUBJECT_COLLECTION, SUBJECT_UUID_LEN } from "../creds/.setup";
import { SUBJECT_ID, SUBJECT_WEIGHT } from "../../appconfig/metadata";
import { SUB_STORE_KEY_BIODATA } from "../../appconfig/sections";

export const subjectsQuery = collection(db, SUBJECT_COLLECTION);

export const firestoreSubjectSync = async (data, idTag) => {
	console.log("fire sync", data);

	if (!data[SUBJECT_ID]) {
		data[SUBJECT_ID] = getId(idTag);
	}

	const document = {
		[SUBJECT_ID]: data[SUBJECT_ID],
		[SUB_STORE_KEY_BIODATA]: data,
	};

	const docPath = `/${SUBJECT_COLLECTION}/${document[SUBJECT_ID]}`;

	await setDoc(doc(db, docPath), document).catch((err) => {
		console.log("fb firestore error :: ", err);
		return null;
	});

	return document;
};

const getId = (name = "unnamed") => {
	let id = name.toLowerCase().replace(/[^a-zA-Z]/g, "");
	console.log("creating new ID", id);
	return `${id}-${uuid().slice(0, SUBJECT_UUID_LEN)}`;
};
