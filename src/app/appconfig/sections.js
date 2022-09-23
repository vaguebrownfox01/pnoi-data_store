import { orange, pink } from "@mui/material/colors";
import MetadataSection from "../pieces/MetadataSection";
import QuestionnairSection from "../pieces/QuestionnairSection";
import UploadFileSection from "../pieces/UploadFileSection";
import {
	SUBJECT_AGE,
	SUBJECT_GENDER,
	SUBJECT_HEIGHT,
	SUBJECT_ID,
	SUBJECT_NAME,
	SUBJECT_RUMDETS,
	SUBJECT_RUMTYPE,
	SUBJECT_WEIGHT,
} from "./metadata";

export const SUB_STORE_KEY_BIODATA = "subjectBiodata";
export const SUB_STORE_KEY_SURVEY = "subjectSurvey";
export const SUB_STORE_KEY_VBAbf = "subjectVBAbf";
export const SUB_STORE_KEY_LBAbf = "subjectLBAbf";
export const SUB_STORE_KEY_PFTbf = "subjectPFTbf";
export const SUB_STORE_KEY_VBAaf = "subjectVBAaf";
export const SUB_STORE_KEY_LBAaf = "subjectLBAaf";
export const SUB_STORE_KEY_PFTaf = "subjectPFTaf";
export const SUB_STORE_KEY_SECDONE = "subjectSectionDone";

export const allSections = [
	SUB_STORE_KEY_BIODATA,
	SUB_STORE_KEY_SURVEY,
	SUB_STORE_KEY_VBAbf,
	SUB_STORE_KEY_LBAbf,
	SUB_STORE_KEY_PFTbf,
	SUB_STORE_KEY_VBAaf,
	SUB_STORE_KEY_LBAaf,
	SUB_STORE_KEY_PFTaf,
];

export const initSubject = {
	[SUBJECT_ID]: "",
	[SUB_STORE_KEY_BIODATA]: {
		[SUBJECT_ID]: "",
		[SUBJECT_NAME]: "Test Sub",
		[SUBJECT_AGE]: "0",
		[SUBJECT_HEIGHT]: "0",
		[SUBJECT_WEIGHT]: "0",
		[SUBJECT_GENDER]: "Other",
		[SUBJECT_RUMTYPE]: "Paytm",
		[SUBJECT_RUMDETS]: "0000",
		[SUB_STORE_KEY_SECDONE]: false,
	},
	[SUB_STORE_KEY_SURVEY]: {
		[SUB_STORE_KEY_SECDONE]: false,
	},
	[SUB_STORE_KEY_VBAbf]: {
		[SUB_STORE_KEY_SECDONE]: false,
	},
	[SUB_STORE_KEY_LBAbf]: {
		[SUB_STORE_KEY_SECDONE]: false,
	},
	[SUB_STORE_KEY_PFTbf]: {
		[SUB_STORE_KEY_SECDONE]: false,
	},
	[SUB_STORE_KEY_VBAaf]: {
		[SUB_STORE_KEY_SECDONE]: false,
	},
	[SUB_STORE_KEY_LBAaf]: {
		[SUB_STORE_KEY_SECDONE]: false,
	},
	[SUB_STORE_KEY_PFTaf]: {
		[SUB_STORE_KEY_SECDONE]: false,
	},
};

export const appSectionsInfo = [
	{
		title: "Add subject",
		key: SUB_STORE_KEY_BIODATA,
		ftag: "META",
		when: "before/ no inhaler",
		fmime: "na",
		component: <MetadataSection />,
	},
	{
		title: "Questionnair",
		key: SUB_STORE_KEY_SURVEY,
		ftag: "SURVEY",
		when: "before/ no inhaler",
		fmime: "na",
		component: <QuestionnairSection />,
	},
	{
		title: "Vocal Breath Audio",
		key: SUB_STORE_KEY_VBAbf,
		ftag: "VBA-before",
		when: "before/ no inhaler",
		color: pink[400],
		fmime: "audio/",
		component: <UploadFileSection />,
	},
	{
		title: "Lung Breath Audio",
		key: SUB_STORE_KEY_LBAbf,
		ftag: "LBA-before",
		when: "before/ no inhaler",
		color: pink[400],
		fmime: "audio/",
		component: <UploadFileSection />,
	},
	{
		title: "PFT Report",
		key: SUB_STORE_KEY_PFTbf,
		ftag: "PFT-before",
		when: "before/ no inhaler",
		color: pink[400],
		fmime: "application/pdf",
		component: <UploadFileSection />,
	},
	{
		title: "Vocal Breath Audio",
		key: SUB_STORE_KEY_VBAaf,
		ftag: "VBA-after",
		when: "after inhaler",
		color: orange[400],
		fmime: "audio/",
		component: <UploadFileSection />,
	},
	{
		title: "Lung Breath Audio",
		key: SUB_STORE_KEY_LBAaf,
		ftag: "LBA-after",
		when: "after inhaler",
		color: orange[400],
		fmime: "audio/",
		component: <UploadFileSection />,
	},
	{
		title: "PFT Report",
		key: SUB_STORE_KEY_PFTaf,
		ftag: "PFT-after",
		when: "after inhaler",
		color: orange[400],
		fmime: "application/pdf",
		component: <UploadFileSection />,
	},
];
