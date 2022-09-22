export const metaDataInfo = [
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

export const SUBJECT_NAME = "subjectName";
export const SUBJECT_AGE = "subjectAge";
export const SUBJECT_HEIGHT = "subjectHeight";
export const SUBJECT_WEIGHT = "subjectWeight";
export const SUBJECT_GENDER = "subjectGender";
export const SUBJECT_RUMTYPE = "subjectRemunerationType";
export const SUBJECT_RUMDETS = "subjectRemunerationDetails";
