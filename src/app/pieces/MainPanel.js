import LockIcon from "@mui/icons-material/Lock";
import { Fab, Stack } from "@mui/material";
import * as React from "react";
import useAuth from "../hooks/useAuth";
const AuthModal = React.lazy(() => import("../pieces/AuthModal"));
const Sections = React.lazy(() => import("../pieces/Sections"));

const MainPanel = React.memo(function MainPanel() {
	const [user, handleAuth, handleLogout] = useAuth();
	return (
		<>
			{!user ? (
				<AuthModal open={!!user} {...{ handleAuth }} />
			) : (
				<Sections />
			)}
			<Stack direction="row-reverse">
				<Fab
					sx={{ mt: 2 }}
					size="small"
					aria-label="logout"
					onClick={handleLogout}
				>
					<LockIcon />
				</Fab>
			</Stack>
		</>
	);
});

export default MainPanel;
