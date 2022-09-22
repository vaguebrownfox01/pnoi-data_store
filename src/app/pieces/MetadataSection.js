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
import useStoreSync from "../hooks/useStoreSync";
import SubjectList from "./SubjectList";

const classes = {
	fieldRoot: { ml: 2, mr: 1 },
	textField: function s(t) {
		return {
			margin: t.spacing(0, 2, 2, 0),
			width: `${100 - this.i * 7}%`,
		};
	},
	selectMenu: (t) => ({ maxWidth: t.spacing(32) }),
};

const MetadataSection = React.memo(function MetadataSection() {
	const [
		loading,
		allSubjects,
		currentSubject,
		handleSubjectSelect,
		handleFormInfoSync,
	] = useStoreSync();
	const [fields, field, done, handleFieldInput] =
		useMetadataFieldInput(currentSubject);

	function handleFormInputData({ target }) {
		const { value: _value } = target;
		const _field = this.field;

		handleFieldInput(_field, _value);
	}

	function handleFormSubmitData() {
		console.log({ metadatafields: field });
		handleFormInfoSync(field);
	}

	return (
		<Box sx={classes.fieldRoot}>
			<Stack>
				<SubjectList
					{...{
						loading,
						allSubjects,
						currentSubject,
						handleSubjectSelect,
					}}
				/>
				{fields.map((f, i) =>
					f.type !== "menu" ? (
						<TextField
							key={`${f.id}-${i}`}
							sx={classes.textField.bind({ i })}
							id={f.id}
							label={f.label}
							type={f.type}
							size="small"
							variant="standard"
							value={field[f.field] || ""}
							onChange={handleFormInputData.bind({
								field: f.field,
							})}
							autoComplete="off"
						/>
					) : (
						<FormControl
							sx={{ mt: 2, mb: 2 }}
							key={`${f.id}-${i}`}
							fullWidth
						>
							<InputLabel id={`${f.id}-label`}>
								{f.label}
							</InputLabel>
							<Select
								sx={classes.selectMenu}
								labelId={`${f.id}-label`}
								id={`${f.id}-select-helper`}
								value={field[f.field] || ""}
								label={`${f.label}`}
								size="small"
								variant="standard"
								onChange={handleFormInputData.bind({
									field: f.field,
								})}
							>
								{f.menuItems.map((g, i) => (
									<MenuItem
										key={`${g.value}+${i}`}
										value={`${g.value}`}
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
					onClick={handleFormSubmitData}
					disabled={!done}
				>
					Submit
				</Button>
			</Stack>
		</Box>
	);
});

export default MetadataSection;
