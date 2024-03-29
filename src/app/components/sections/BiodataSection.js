import { Box, Button, Stack } from "@mui/material";
import * as React from "react";
import useBiodataInput from "../../hooks/useBiodataInput";
import useStoreSync from "../../hooks/useStoreSync";
import Wait from "../../layouts/Wait";
import BioField from "../pieces/BioField";
import SubjectList from "../pieces/SubjectList";

const BiodataSection = React.memo(function BiodataSection({
	setSectionState,
	setSubjectStatus,
}) {
	const [allSubjects, currentSubject, handleSubjectSelect, handleStorSync] =
		useStoreSync(setSectionState, setSubjectStatus);

	const [done, fields, biodata, handleFieldInput, handleSubmit] =
		useBiodataInput(currentSubject, setSectionState, handleStorSync);

	const [sync, setSync] = React.useState(false);
	function handleFormInputData({ target }) {
		const { value: _value } = target;
		const _field = this.field;
		handleFieldInput(_field, _value);
	}

	async function handleFormSubmitData() {
		setSync(true);
		await handleSubmit();
		setSync(false);
	}

	return (
		<Box sx={{ ml: 2, mr: 1 }}>
			<Stack>
				<SubjectList
					list={allSubjects}
					currentItem={currentSubject}
					onSelect={handleSubjectSelect}
				/>
			</Stack>
			<Stack>
				{fields.map((f, i) => (
					<BioField
						i={i}
						key={`${f.id}`}
						fieldInfo={f}
						fieldValue={biodata}
						inputHandle={handleFormInputData}
					/>
				))}
			</Stack>

			<Stack sx={{ mt: 4 }} justifyContent="center">
				{sync && <Wait size={24} />}
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

export default BiodataSection;
