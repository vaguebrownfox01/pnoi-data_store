const { getFirestore } = require("firebase/firestore");
const { getStorage } = require("firebase/storage");
const { initializeApp } = require("firebase/app");
const { getAuth } = require("firebase/auth");
const config = require("./client-pnoistor.json");

// let config = {
// 	apiKey: process.env.APIKEY,
// 	authDomain: process.env.AUTHDOMAIN,
// 	projectId: process.env.PROJECTID,
// 	storageBucket: process.env.STORAGEBUCKET,
// 	messagingSenderId: process.env.MESSAGINGSENDERID,
// 	appId: process.env.APPID,
// 	measurementId: process.env.MEASUREMENID,
// };

const app = initializeApp(config);

export const db = getFirestore(app);
export const st = getStorage(app);
export const au = getAuth(app);
