import { SUB_STORE_KEY_BIODATA } from "./sections";

export const SUBJECT_ID = "firebaseId";
export const SUBJECT_NAME = "subjectName";
export const SUBJECT_AGE = "subjectAge";
export const SUBJECT_HEIGHT = "subjectHeight";
export const SUBJECT_WEIGHT = "subjectWeight";
export const SUBJECT_GENDER = "subjectGender";
export const SUBJECT_TYPE = "subjectType";
export const SUBJECT_RUMTYPE = "subjectRemunerationType";
export const SUBJECT_RUMDETS = "subjectRemunerationDetails";

export const CURRENT_SUBJECT = "currentSubject";

export const metaDataInfo = [
	{
		id: "Name",
		label: "Name",
		type: "text",
		field: SUBJECT_NAME,
	},
	{
		id: "Age",
		label: "Age",
		type: "number",
		field: SUBJECT_AGE,
	},
	{
		id: "Height",
		label: "Height",
		type: "number",
		field: SUBJECT_HEIGHT,
	},
	{
		id: "Weight",
		label: "Weight",
		type: "number",
		field: SUBJECT_WEIGHT,
	},
	{
		id: "Gender",
		label: "Gender",
		type: "menu",
		field: SUBJECT_GENDER,
		menuItems: [
			{ label: "Select", value: "" },
			{ label: "Male", value: "Male" },
			{ label: "Female", value: "Female" },
			{ label: "Other", value: "Other" },
		],
	},
	{
		id: "SubjectType",
		label: "Subject Type",
		type: "menu",
		field: SUBJECT_TYPE,
		menuItems: [
			{ label: "Select", value: "" },
			{ label: "Control", value: "Control" },
			{ label: "Patient", value: "Patient" },
			{ label: "Unknown", value: "Unknown" },
		],
	},
	{
		id: "RemunerationType",
		label: "Remuneration Type",
		type: "menu",
		field: SUBJECT_RUMTYPE,
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
		field: SUBJECT_RUMDETS,
	},
];

export const setSubjectLocalValues = (currentSubject) => {
	const { [SUB_STORE_KEY_BIODATA]: info } = currentSubject;
	localStorage.setItem(SUBJECT_ID, info[SUBJECT_ID]);
	localStorage.setItem(SUBJECT_NAME, info[SUBJECT_NAME]);
};

export const getSubjectLocalValues = () => {
	return {
		[SUBJECT_ID]: localStorage.getItem(SUBJECT_ID),
		[SUBJECT_NAME]: localStorage.getItem(SUBJECT_NAME),
	};
};
