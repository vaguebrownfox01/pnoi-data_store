import { st } from "../creds/client";
import { ref, uploadBytes } from "firebase/storage";
import { AUDIO_DATA_FOLDER } from "../creds/.setup";

export const firebaseFileUpload = async (fileObj, newFileName) => {
	const path = `${AUDIO_DATA_FOLDER}/${newFileName}`;

	const storageRef = ref(st, path);

	const metadata = {
		contentType: fileObj.type,
	};

	const res = await uploadBytes(storageRef, fileObj, metadata).catch((e) => {
		console.log("firebase upload wavblob failed!", e);
		return null;
	});

	console.log("upload result: ", res?.metadata || "error");

	return !!res;
};
