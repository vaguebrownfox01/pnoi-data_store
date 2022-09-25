import { au } from "../firebase/creds/client";
import { useAuthState } from "react-firebase-hooks/auth";
import {
	firebaseAdminLogin,
	firebaseAdminLogout,
} from "../firebase/client/auth";

const useAuth = () => {
	//

	const [user] = useAuthState(au);

	const handleAuthState = async (uid, passkey) => {
		const res = await firebaseAdminLogin(uid, passkey);
		return res;
	};

	const handleLogout = async () => {
		const res = await firebaseAdminLogout();
		return res;
	};

	return [user, handleAuthState, handleLogout];
};

export default useAuth;
