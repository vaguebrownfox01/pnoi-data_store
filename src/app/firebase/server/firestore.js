const fs = require("fs");
const admin = require("firebase-admin");

const {
	SERVER_CONFIG_PATH,
	DATABASE_URL,
	SUBJECT_COLLECTIONS,
	LOCAL_EXPORT_PATH,
} = require("../creds/.setup");

admin.initializeApp({
	credential: admin.credential.cert(SERVER_CONFIG_PATH),
	databaseURL: DATABASE_URL,
	// storageBucket: STORAGE_BUCKET,
});

const db = admin.firestore();

const exportSubjectMetadata = async (collection, exportPath) => {
	const surveyRef = db.collection(collection);
	const _data = await surveyRef.get();

	const _subjects = [];
	_data.forEach((doc) => {
		_subjects.push({ collection, ...doc.data() });
	});

	let _json_data = JSON.stringify(_subjects);

	if (!fs.existsSync(exportPath)) {
		fs.mkdirSync(exportPath);
	}

	let export_path = `${exportPath}/${collection}.json`;

	fs.writeFileSync(export_path, _json_data);

	console.log(`done for ${collection}`);
	console.log(`export path: ${export_path}\n`);

	return _subjects;
};

const main = async () => {
	console.log("Collections", SUBJECT_COLLECTIONS);

	SUBJECT_COLLECTIONS.forEach((clc) => {
		exportSubjectMetadata(clc, LOCAL_EXPORT_PATH);
	});
};

main();
