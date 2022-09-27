import LockIcon from "@mui/icons-material/Lock";
import { Fab, Stack } from "@mui/material";
import * as React from "react";
import useAuth from "../hooks/useAuth";
const AuthModal = React.lazy(() => import("./pieces/AuthModal"));
const Sections = React.lazy(() => import("./sections/Sections"));

const MainPanel = React.memo(function MainPanel() {
	const [user, handleAuth, handleLogout] = useAuth();
	return (
		<>
			{!user ? (
				<AuthModal open={!user} handleAuth={handleAuth} />
			) : (
				<>
					<Sections />
					<Stack sx={{ m: 2, mr: 0 }} direction="row-reverse">
						<Fab
							aria-label="logout"
							variant="extended"
							onClick={handleLogout}
						>
							<LockIcon sx={{ mr: 1 }} />
							Logout
						</Fab>
					</Stack>
				</>
			)}
		</>
	);
});

export default MainPanel;
