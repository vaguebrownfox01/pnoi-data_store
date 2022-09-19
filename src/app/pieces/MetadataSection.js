import {
	Box,
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	Stack,
	TextField,
} from "@mui/material";
import * as React from "react";
import useMetadataFieldInput from "../hooks/useMetadataFieldInput";

const classes = {
	fieldRoot: (t) => ({ paddingTop: t.spacing(2) }),
	textField: function s(t) {
		return {
			margin: t.spacing(0, 4, 4, 0),
			width: `${100 - this.i * 7}%`,

			root: {
				color: "red",
			},
		};
	},
	selectMenu: (t) => ({ maxWidth: t.spacing(24) }),
};

const MetadataSection = React.memo(function MetadataSection() {
	const [fields, field, done, handleFieldInput, handleSubmit] =
		useMetadataFieldInput();

	return (
		<Box sx={classes.fieldRoot}>
			<Stack>
				{fields.map((f, i) =>
					f.type !== "menu" ? (
						<TextField
							key={`${f.id}-${i}`}
							sx={classes.textField.bind({ i })}
							id={f.id}
							label={f.label}
							type={f.type}
							variant="outlined"
							value={field[f.field]}
							onChange={handleFieldInput.bind({ field: f.field })}
							autoComplete="off"
						/>
					) : (
						<FormControl key={`${f.id}-${i}`} fullWidth>
							<InputLabel id={`${f.id}-label`}>Gender</InputLabel>
							<Select
								sx={classes.selectMenu}
								labelId={`${f.id}-label`}
								id={`${f.id}-select-helper`}
								value={field[f.field]}
								label={`${f.label}`}
								onChange={handleFieldInput.bind({
									field: f.field,
								})}
							>
								{f.menuItems.map((g, i) => (
									<MenuItem
										key={`${g.value}+${i}`}
										value={`${g?.value || ""}`}
									>{`${g.label}`}</MenuItem>
								))}
							</Select>
						</FormControl>
					)
				)}
			</Stack>
			<Stack sx={{ mt: 4 }} justifyContent="center">
				<Button
					variant="contained"
					onClick={handleSubmit}
					disabled={!done}
				>
					Submit
				</Button>
			</Stack>
		</Box>
	);
});

export default MetadataSection;
