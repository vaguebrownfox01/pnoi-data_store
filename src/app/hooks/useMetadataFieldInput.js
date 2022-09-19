import React from "react";

const useMetadataFieldInput = () => {
	const fields = [
		{
			id: "Name",
			label: "Name",
			type: "text",
			field: "subjectName",
		},
		{
			id: "Age",
			label: "Age",
			type: "number",
			field: "subjectAge",
		},
		{
			id: "Height",
			label: "Height",
			type: "number",
			field: "subjectHeight",
		},
		{
			id: "Weight",
			label: "Weight",
			type: "number",
			field: "subjectWeight",
		},
		{
			id: "Gender",
			label: "Gender",
			type: "menu",
			field: "subjectGender",
			menuItems: [
				{ label: "Select", value: "" },
				{ label: "Male", value: "Male" },
				{ label: "Female", value: "Female" },
				{ label: "Other", value: "Other" },
			],
		},
	];

	const formatFieldValue = ({ field, value }) => {
		switch (field) {
			case "subjectName":
				let name = value.replace(/[^a-zA-Z +]/g, "");
				return { f: field, v: name };
			case "subjectAge":
				let age = Math.abs(parseInt(value) || 0) % 100;
				return { f: field, v: `${age}` };
			case "subjectHeight":
				let height = Math.abs(parseInt(value) || 0) % 300;
				return { f: field, v: `${height}` };
			case "subjectWeight":
				let weight = Math.abs(parseInt(value) || 0) % 200;
				return { f: field, v: `${weight}` };

			default:
				return { f: field, v: value };
		}
	};

	const [done, setDone] = React.useState(false);
	const [field, setField] = React.useState(
		fields.reduce((b, a) => ({ ...b, [a.field]: "" }), {})
	);

	function handleFieldInput({ target }) {
		const { value } = target;
		let { f, v } = formatFieldValue({ field: this.field, value: value });
		setField((p) => ({ ...p, [f]: v }));
	}

	function handleSubmit() {
		//TODO: write to firebase
		console.log("write to firebase pending");
		console.log(field);
	}

	React.useEffect(() => {
		const checkFields = () => {
			for (let f of fields) {
				if (field[f.field] === "") return false;
			}
			return true;
		};

		setDone(() => checkFields());
	}, [field]);

	React.useDebugValue("Field Input");

	return [fields, field, done, handleFieldInput, handleSubmit];
};

export default useMetadataFieldInput;
