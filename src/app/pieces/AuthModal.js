import {
	Box,
	Button,
	Card,
	CardContent,
	Modal,
	TextField,
	Typography,
} from "@mui/material";
import * as React from "react";
import Wait from "../components/Wait";

const classes = {
	modalContent: {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		bgcolor: "background.paper",
		boxShadow: 24,
		p: 4,
	},
	cardRoot: (t) => ({
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		borderRadius: 2,
		minWidth: "12rem",
	}),
};

const AuthModal = React.memo(function AuthModal({ open, handleAuth }) {
	const [authInfo, setAuthInfo] = React.useState({ uid: "", passkey: "" });
	const [wait, setWait] = React.useState(false);
	function handleTextInput({ target }) {
		const { value } = target;
		setAuthInfo((p) => ({ ...p, [this.key]: value }));
	}

	async function handleLogin() {
		setWait(true);
		await handleAuth(authInfo["uid"], authInfo["passkey"]);
		setWait(false);
	}
	return (
		<Modal
			open={!open}
			aria-labelledby="modal-modal-auth"
			aria-describedby="modal-modal-authentication"
		>
			<Card sx={classes.modalContent}>
				<CardContent sx={classes.cardRoot}>
					<Box>
						<Typography
							sx={{ textAlign: "center", marginBottom: 2 }}
							variant="h5"
							component="div"
							gutterBottom
						>
							{`Pnoi Store`}
						</Typography>
					</Box>
					<>
						<TextField
							sx={{ mb: 2 }}
							label="who?"
							id="login-id"
							placeholder="your id"
							size="small"
							variant="outlined"
							autoComplete="on"
							autoCapitalize="off"
							fullWidth
							value={authInfo.uid}
							onChange={handleTextInput.bind({ key: "uid" })}
						/>
						<TextField
							sx={{ mb: 2 }}
							label="passkey"
							id="passkey"
							placeholder="enter passkey"
							size="small"
							autoComplete="on"
							variant="outlined"
							type="password"
							fullWidth
							value={authInfo.passkey}
							onChange={handleTextInput.bind({ key: "passkey" })}
						/>
					</>
					{wait && <Wait />}
					<Button
						sx={{ mt: 2 }}
						variant="outlined"
						onClick={handleLogin}
					>
						Log In
					</Button>
				</CardContent>
			</Card>
		</Modal>
	);
});

export default AuthModal;
