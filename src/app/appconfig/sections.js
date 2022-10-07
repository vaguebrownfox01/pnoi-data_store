import {
	cyan,
	indigo,
	lime,
	orange,
	pink,
	purple,
	teal,
} from "@mui/material/colors";
import * as React from "react";

import {
	SUBJECT_AGE,
	SUBJECT_GENDER,
	SUBJECT_HEIGHT,
	SUBJECT_ID,
	SUBJECT_NAME,
	SUBJECT_RUMDETS,
	SUBJECT_RUMTYPE,
	SUBJECT_TYPE,
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
export const SUB_STORE_KEY_LBAbf_LU = "subjectLBAbf_LU";
export const SUB_STORE_KEY_LBAbf_RU = "subjectLBAbf_RU";
export const SUB_STORE_KEY_LBAbf_LL = "subjectLBAbf_LL";
export const SUB_STORE_KEY_LBAbf_RL = "subjectLBAbf_RL";
export const SUB_STORE_KEY_PFTbf = "subjectPFTbf";

export const SUB_STORE_KEY_VBAaf = "subjectVBAaf";
export const SUB_STORE_KEY_LBAaf_LU = "subjectLBAaf_LU";
export const SUB_STORE_KEY_LBAaf_RU = "subjectLBAaf_RU";
export const SUB_STORE_KEY_LBAaf_LL = "subjectLBAaf_LL";
export const SUB_STORE_KEY_LBAaf_RL = "subjectLBAaf_RL";
export const SUB_STORE_KEY_PFTaf = "subjectPFTaf";

export const SUB_STORE_KEY_SECDONE = "subjectSectionDone";

export const allSections = [
	SUB_STORE_KEY_BIODATA,
	SUB_STORE_KEY_SURVEY,

	SUB_STORE_KEY_VBAbf,
	SUB_STORE_KEY_LBAbf_LU,
	SUB_STORE_KEY_LBAbf_RU,
	SUB_STORE_KEY_LBAbf_LL,
	SUB_STORE_KEY_LBAbf_RL,
	SUB_STORE_KEY_PFTbf,

	SUB_STORE_KEY_VBAaf,
	SUB_STORE_KEY_LBAaf_LU,
	SUB_STORE_KEY_LBAaf_RU,
	SUB_STORE_KEY_LBAaf_LL,
	SUB_STORE_KEY_LBAaf_RL,
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
		[SUBJECT_TYPE]: "",
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
	[SUB_STORE_KEY_LBAbf_LU]: {
		[SUBJECT_ID]: "",
		[SUB_STORE_KEY_SECDONE]: false,
	},
	[SUB_STORE_KEY_LBAbf_RU]: {
		[SUBJECT_ID]: "",
		[SUB_STORE_KEY_SECDONE]: false,
	},
	[SUB_STORE_KEY_LBAbf_LL]: {
		[SUBJECT_ID]: "",
		[SUB_STORE_KEY_SECDONE]: false,
	},
	[SUB_STORE_KEY_LBAbf_RL]: {
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
	[SUB_STORE_KEY_LBAaf_LU]: {
		[SUBJECT_ID]: "",
		[SUB_STORE_KEY_SECDONE]: false,
	},
	[SUB_STORE_KEY_LBAaf_RU]: {
		[SUBJECT_ID]: "",
		[SUB_STORE_KEY_SECDONE]: false,
	},
	[SUB_STORE_KEY_LBAaf_LL]: {
		[SUBJECT_ID]: "",
		[SUB_STORE_KEY_SECDONE]: false,
	},
	[SUB_STORE_KEY_LBAaf_RL]: {
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
		color: cyan[400],
		component: <BiodataSection />,
	},
	{
		title: "Questionnair",
		sectionKey: SUB_STORE_KEY_SURVEY,
		ftag: "SURVEY",
		when: "before/ no inhaler",
		fmime: "na",
		color: cyan[600],
		component: <SurveySection />,
	},
	{
		title: "PFT Report",
		sectionKey: SUB_STORE_KEY_PFTbf,
		ftag: "PFT_before",
		when: "before/ no inhaler",
		color: teal[400],
		fmime: "application/pdf",
		component: <UploadSection />,
	},
	{
		title: "Vocal Breath Audio",
		sectionKey: SUB_STORE_KEY_VBAbf,
		ftag: "VBA_before",
		when: "before/ no inhaler",
		color: lime[400],
		fmime: "audio/",
		component: <UploadSection />,
	},

	{
		title: "Lung Breath Audio LU",
		sectionKey: SUB_STORE_KEY_LBAbf_LU,
		ftag: "LBA_before_LU",
		when: "before/ no inhaler",
		color: purple[200],
		fmime: "audio/",
		component: <UploadSection />,
	},
	{
		title: "Lung Breath Audio RU",
		sectionKey: SUB_STORE_KEY_LBAbf_RU,
		ftag: "LBA_before_RU",
		when: "before/ no inhaler",
		color: purple[400],
		fmime: "audio/",
		component: <UploadSection />,
	},
	{
		title: "Lung Breath Audio LL",
		sectionKey: SUB_STORE_KEY_LBAbf_LL,
		ftag: "LBA_before_LL",
		when: "before/ no inhaler",
		color: purple[500],
		fmime: "audio/",
		component: <UploadSection />,
	},
	{
		title: "Lung Breath Audio RL",
		sectionKey: SUB_STORE_KEY_LBAbf_RL,
		ftag: "LBA_before_RL",
		when: "before/ no inhaler",
		color: purple[600],
		fmime: "audio/",
		component: <UploadSection />,
	},
	{
		title: "PFT Report",
		sectionKey: SUB_STORE_KEY_PFTaf,
		ftag: "PFT_after",
		when: "after inhaler",
		color: indigo[300],
		fmime: "application/pdf",
		component: <UploadSection />,
	},
	{
		title: "Vocal Breath Audio",
		sectionKey: SUB_STORE_KEY_VBAaf,
		ftag: "VBA_after",
		when: "after inhaler",
		color: orange[400],
		fmime: "audio/",
		component: <UploadSection />,
	},
	{
		title: "Lung Breath Audio LU",
		sectionKey: SUB_STORE_KEY_LBAaf_LU,
		ftag: "LBA_after_LU",
		when: "after inhaler",
		color: pink[200],
		fmime: "audio/",
		component: <UploadSection />,
	},
	{
		title: "Lung Breath Audio RU",
		sectionKey: SUB_STORE_KEY_LBAaf_RU,
		ftag: "LBA_after_RU",
		when: "after inhaler",
		color: pink[300],
		fmime: "audio/",
		component: <UploadSection />,
	},
	{
		title: "Lung Breath Audio LL",
		sectionKey: SUB_STORE_KEY_LBAaf_LL,
		ftag: "LBA_after_LL",
		when: "after inhaler",
		color: pink[400],
		fmime: "audio/",
		component: <UploadSection />,
	},
	{
		title: "Lung Breath Audio RL",
		sectionKey: SUB_STORE_KEY_LBAaf_RL,
		ftag: "LBA_after_RL",
		when: "after inhaler",
		color: pink[500],
		fmime: "audio/",
		component: <UploadSection />,
	},
];
