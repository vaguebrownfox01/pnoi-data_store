import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";

const SamplePiece = React.memo(function SamplePiece({ children }) {
	return (
		<Box
			sx={{
				width: "100%",
				height: "100%",
				// border: "1px solid red"
			}}
		>
			<Typography variant="h6" gutterBottom>
				Title
			</Typography>
			{children}
		</Box>
	);
});

export default SamplePiece;
