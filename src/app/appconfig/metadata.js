export const SUBJECT_ID = "firebaseId";
export const SUBJECT_NAME = "subjectName";
export const SUBJECT_AGE = "subjectAge";
export const SUBJECT_HEIGHT = "subjectHeight";
export const SUBJECT_WEIGHT = "subjectWeight";
export const SUBJECT_GENDER = "subjectGender";
export const SUBJECT_RUMTYPE = "subjectRemunerationType";
export const SUBJECT_RUMDETS = "subjectRemunerationDetails";

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
