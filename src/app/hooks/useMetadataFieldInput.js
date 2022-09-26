import React from "react";
import {
	metaDataInfo,
	SUBJECT_AGE,
	SUBJECT_HEIGHT,
	SUBJECT_NAME,
	SUBJECT_RUMDETS,
	SUBJECT_RUMTYPE,
	SUBJECT_WEIGHT,
} from "../appconfig/metadata";
import {
	initSubject,
	SUB_STORE_KEY_BIODATA,
	SUB_STORE_KEY_SECDONE,
} from "../appconfig/sections";

const useMetadataFieldInput = (currentSubject) => {
	// States
	const [done, setDone] = React.useState(false);
	const [biodata, setBiodata] = React.useState({});

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
			case SUBJECT_RUMDETS:
				return [_field, _value];
			default:
				return [_field, _value];
		}
	};

	const checkFields = React.useCallback(() => {
		for (let f of fields) {
			if (biodata[f.field] === "") return false;
		}
		return true;
	}, [biodata, fields]);

	// Handlers
	function handleFieldInput(f, v) {
		let [_f, _v] = formatFieldValue(f, v);
		setBiodata((p) => ({ ...p, [_f]: _v, [SUB_STORE_KEY_SECDONE]: false }));
	}

	// Effects
	// Validate Field Values on Input
	React.useEffect(() => {
		const _isdone = checkFields();

		setDone(_isdone);
	}, [biodata, checkFields]);

	// Reset Field Values on Start
	React.useEffect(() => {
		if (currentSubject) {
			setBiodata(currentSubject[SUB_STORE_KEY_BIODATA]);
		} else {
			setBiodata(initSubject[SUB_STORE_KEY_BIODATA]);
		}
	}, [currentSubject]);

	React.useDebugValue("Field Input");

	return [fields, biodata, done, handleFieldInput];
};

export default useMetadataFieldInput;
