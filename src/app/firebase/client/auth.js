import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { AUTH_DOM } from "../creds/setup";
import { au } from "../creds/client";

export const firebaseAdminLogin = async (uid, passkey) => {
	const email = `${uid}@${AUTH_DOM}`;
	const res = await signInWithEmailAndPassword(au, email, passkey).catch(
		(e) => console.log(e)
	);

	return !!res;
};

export const firebaseAdminLogout = async () => {
	const res = await signOut(au).catch((e) => console.log(e));

	return res;
};
