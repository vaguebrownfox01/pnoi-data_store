import { st } from "../creds/client";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { AUDIO_DATA_FOLDER } from "../creds/.setup";

export const firebaseFileUpload = async (subjectId, fileObj, filename) => {
	const path = `${AUDIO_DATA_FOLDER}/${subjectId}/${filename}`;

	const storageRef = ref(st, path);

	const metadata = {
		contentType: fileObj.type,
	};

	let res = await uploadBytes(storageRef, fileObj, metadata).catch((e) => {
		console.log("firebase upload failed!", e);
		return null;
	});

	if (res) {
		res = await getDownloadURL(storageRef, path);
	}

	console.log("upload result: isDone? ", !!res || "error");

	return res;
};
