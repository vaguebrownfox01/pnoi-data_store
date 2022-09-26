import * as React from "react";
import { orange, pink } from "@mui/material/colors";

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

const BiodataSection = React.lazy(() =>
	import("../components/sections/BiodataSection")
);
const SurveySection = React.lazy(() =>
	import("../components/sections/SurveySection")
);
const UploadSection = React.lazy(() =>
	import("../components/sections/UploadSection")
);

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
		[SUBJECT_NAME]: "",
		[SUBJECT_AGE]: "",
		[SUBJECT_HEIGHT]: "",
		[SUBJECT_WEIGHT]: "",
		[SUBJECT_GENDER]: "",
		[SUBJECT_RUMTYPE]: "",
		[SUBJECT_RUMDETS]: "",
		[SUB_STORE_KEY_SECDONE]: false,
	},
	[SUB_STORE_KEY_SURVEY]: {
		[SUBJECT_ID]: "",
		[SUB_STORE_KEY_SECDONE]: false,
	},
	[SUB_STORE_KEY_VBAbf]: {
		[SUBJECT_ID]: "",
		[SUB_STORE_KEY_SECDONE]: false,
	},
	[SUB_STORE_KEY_LBAbf]: {
		[SUBJECT_ID]: "",
		[SUB_STORE_KEY_SECDONE]: false,
	},
	[SUB_STORE_KEY_PFTbf]: {
		[SUBJECT_ID]: "",
		[SUB_STORE_KEY_SECDONE]: false,
	},
	[SUB_STORE_KEY_VBAaf]: {
		[SUBJECT_ID]: "",
		[SUB_STORE_KEY_SECDONE]: false,
	},
	[SUB_STORE_KEY_LBAaf]: {
		[SUBJECT_ID]: "",
		[SUB_STORE_KEY_SECDONE]: false,
	},
	[SUB_STORE_KEY_PFTaf]: {
		[SUBJECT_ID]: "",
		[SUB_STORE_KEY_SECDONE]: false,
	},
};

export const appSectionsInfo = [
	{
		title: "Add subject",
		sectionKey: SUB_STORE_KEY_BIODATA,
		ftag: "META",
		when: "before/ no inhaler",
		fmime: "na",
		component: <BiodataSection />,
	},
	{
		title: "Questionnair",
		sectionKey: SUB_STORE_KEY_SURVEY,
		ftag: "SURVEY",
		when: "before/ no inhaler",
		fmime: "na",
		component: <SurveySection />,
	},
	{
		title: "Vocal Breath Audio",
		sectionKey: SUB_STORE_KEY_VBAbf,
		ftag: "VBA-before",
		when: "before/ no inhaler",
		color: pink[400],
		fmime: "audio/",
		component: <UploadSection />,
	},
	{
		title: "Lung Breath Audio",
		sectionKey: SUB_STORE_KEY_LBAbf,
		ftag: "LBA-before",
		when: "before/ no inhaler",
		color: pink[400],
		fmime: "audio/",
		component: <UploadSection />,
	},
	{
		title: "PFT Report",
		sectionKey: SUB_STORE_KEY_PFTbf,
		ftag: "PFT-before",
		when: "before/ no inhaler",
		color: pink[400],
		fmime: "application/pdf",
		component: <UploadSection />,
	},
	{
		title: "Vocal Breath Audio",
		sectionKey: SUB_STORE_KEY_VBAaf,
		ftag: "VBA-after",
		when: "after inhaler",
		color: orange[400],
		fmime: "audio/",
		component: <UploadSection />,
	},
	{
		title: "Lung Breath Audio",
		sectionKey: SUB_STORE_KEY_LBAaf,
		ftag: "LBA-after",
		when: "after inhaler",
		color: orange[400],
		fmime: "audio/",
		component: <UploadSection />,
	},
	{
		title: "PFT Report",
		sectionKey: SUB_STORE_KEY_PFTaf,
		ftag: "PFT-after",
		when: "after inhaler",
		color: orange[400],
		fmime: "application/pdf",
		component: <UploadSection />,
	},
];
