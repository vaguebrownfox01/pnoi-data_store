// const { APP_VERSION } = require("../../appconfig/info");

// Firebase
exports.PROJECT_ID = "pnoistor";

// Version code
exports.VERSION_LIST = ["dec01", "oct07", "feb2023"];
exports.VERSION = this.VERSION_LIST.at(-1);

// Auth
exports.AUTH_DOM = "pnoistor.spr";

// Firestore
exports.DATABASE_URL = "";
exports.SUBJECT_UUID_LEN = 8;
exports.SUBJECT_COLLECTION = `subjects_${this.VERSION}`;
exports.SUBJECT_COLLECTIONS = this.VERSION_LIST.map((ver) => `subjects_${ver}`);

exports.CONTENT_COLLECTION = "content";
exports.SURVEY_DOC = "survey";
exports.SURVEY_DOC_PATH = `/${this.CONTENT_COLLECTION}/${this.SURVEY_DOC}`;

// Storage
exports.FILENAME_SEP = "-";
exports.AUDIO_DATA_FOLDER = `audio-data_${this.VERSION}`;

// Content paths
exports.LOCAL_EXPORT_PATH = "./exports";
exports.SURVEY_PATH = "./src/app/appconfig/content/questions.js";
exports.SERVER_CONFIG_PATH = "./src/app/firebase/creds/.server-pnoistor.json";
