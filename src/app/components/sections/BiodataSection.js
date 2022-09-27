import { Box, Button, Stack } from "@mui/material";
import * as React from "react";
import useBiodataInput from "../../hooks/useBiodataInput";
import useStoreSync from "../../hooks/useStoreSync";
import BioField from "../pieces/BioField";
import SubjectList from "../pieces/SubjectList";

const BiodataSection = React.memo(function BiodataSection({ setSectionState }) {
	const [allSubjects, currentSubject, handleSubjectSelect, handleStorSync] =
		useStoreSync(setSectionState);

	const [done, fields, biodata, handleFieldInput, handleSubmit] =
		useBiodataInput(currentSubject, setSectionState, handleStorSync);

	function handleFormInputData({ target }) {
		const { value: _value } = target;
		const _field = this.field;
		handleFieldInput(_field, _value);
	}

	async function handleFormSubmitData() {
		handleSubmit();
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
