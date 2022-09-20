import React from "react";

const useMetadataFieldInput = () => {
	const [done, setDone] = React.useState(false);
	const [field, setField] = React.useState({});

	const fields = React.useMemo(() => {
		return [
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
			{
				id: "RemunerationType",
				label: "Remuneration Type",
				type: "menu",
				field: "subjectRemunerationType",
				menuItems: [
					{ label: "Select", value: "" },
					{ label: "Account No.", value: "Account No." },
					{ label: "GooglePay", value: "GooglePay" },
					{ label: "Paytm", value: "Paytm" },
					{ label: "PhonePe", value: "PhonePe" },
				],
			},
			{
				id: "RemunerationDetails",
				label: "Remuneration Details",
				type: "text",
				field: "subjectRemunerationDetails",
			},
		];
	}, []);

	const formatFieldValue = (_field, _values) => {
		switch (_field) {
			case "subjectName":
				let name = _values.replace(/[^a-zA-Z +]/g, "");
				return [_field, name];
			case "subjectAge":
				let age = Math.abs(parseInt(_values) || 0) % 100;
				return [_field, `${age}`];
			case "subjectHeight":
				let height = Math.abs(parseInt(_values) || 0) % 300;
				return [_field, `${height}`];
			case "subjectWeight":
				let weight = Math.abs(parseInt(_values) || 0) % 200;
				return [_field, `${weight}`];

			default:
				return [_field, _values];
		}
	};

	const checkFields = React.useCallback(() => {
		for (let f of fields) {
			if (field[f.field] === "") return false;
		}
		return true;
	}, [field, fields]);

	function handleFieldInput({ target }) {
		const { value } = target;
		let [f, v] = formatFieldValue(this.field, value);
		setField((p) => ({ ...p, [f]: v }));
	}

	function handleSubmit() {
		//TODO: write to firebase
		console.log("write to firebase pending");
		console.log(field);
	}

	React.useEffect(() => {
		setDone(() => checkFields());
	}, [field, checkFields]);

	React.useEffect(() => {
		setField(fields.reduce((b, a) => ({ ...b, [a.field]: "" }), {}));
	}, [fields]);

	React.useDebugValue("Field Input");

	return [fields, field, done, handleFieldInput, handleSubmit];
};

export default useMetadataFieldInput;
