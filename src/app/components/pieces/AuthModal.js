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
import Wait from "../../layouts/Wait";

const classes = {
	modalContent: {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		boxShadow: 24,
		p: 4,
	},
	cardRoot: {
		display: "flex",
		flexDirection: "column",
		borderRadius: 2,
		minWidth: "12rem",
	},
	field: {
		sx: { mb: 2 },
		size: "small",
		variant: "outlined",
		autoComplete: "on",
		autoCapitalize: "off",
		fullWidth: true,
	},
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
		<Modal open={open}>
			<Card sx={classes.modalContent}>
				<CardContent sx={classes.cardRoot}>
					<Box>
						<Typography
							sx={{ textAlign: "center", marginBottom: 2 }}
							variant="h5"
							gutterBottom
						>
							Pnoi Store
						</Typography>
					</Box>
					<>
						<TextField
							id="login-id"
							label="who?"
							placeholder="your id"
							{...classes.field}
							value={authInfo.uid}
							onChange={handleTextInput.bind({ key: "uid" })}
						/>
						<TextField
							id="passkey"
							label="passkey"
							placeholder="enter passkey"
							type="password"
							{...classes.field}
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
