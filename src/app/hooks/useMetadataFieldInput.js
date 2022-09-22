import React from "react";
import {
	metaDataInfo,
	SUBJECT_AGE,
	SUBJECT_HEIGHT,
	SUBJECT_NAME,
	SUBJECT_RUMTYPE,
	SUBJECT_WEIGHT,
} from "../appconfig/metadata";

const useMetadataFieldInput = () => {
	// States
	const [done, setDone] = React.useState(false);
	const [field, setField] = React.useState({});

	// Constants
	const fields = React.useMemo(() => {
		return metaDataInfo;
	}, []);

	// Helpers
	const formatFieldValue = (_field, _value) => {
		switch (_field) {
			case SUBJECT_NAME:
				let name = _value.replace(/[^a-zA-Z +]/g, "");
				return [_field, name];
			case SUBJECT_AGE:
				let age = Math.abs(parseInt(_value) || 0) % 100;
				return [_field, `${age}`];
			case SUBJECT_HEIGHT:
				let height = Math.abs(parseInt(_value) || 0) % 300;
				return [_field, `${height}`];
			case SUBJECT_WEIGHT:
				let weight = Math.abs(parseInt(_value) || 0) % 200;
				return [_field, `${weight}`];
			case SUBJECT_RUMTYPE:
				return [_field, _value];
			case SUBJECT_RUMTYPE:
				return [_field, _value];
			default:
				return [_field, _value];
		}
	};

	const checkFields = React.useCallback(() => {
		for (let f of fields) {
			if (field[f.field] === "") return false;
		}
		return true;
	}, [field, fields]);

	// Handlers
	function handleFieldInput(f, v) {
		let [_f, _v] = formatFieldValue(f, v);
		setField((p) => ({ ...p, [_f]: _v }));
	}

	// Effects
	// Validate Field Values on Input
	React.useEffect(() => {
		setDone(() => checkFields());
	}, [field, checkFields]);

	// Reset Field Values on Start
	React.useEffect(() => {
		setField(
			fields.reduce((prv, cur) => ({ ...prv, [cur.field]: "" }), {})
		);
	}, [fields]);

	React.useDebugValue("Field Input");

	return [fields, field, done, handleFieldInput];
};

export default useMetadataFieldInput;
