const { server_db } = require("../creds/server");
const { SURVEY_DOC_PATH, SURVEY_PATH } = require("../creds/.setup");

const { allQuestions } = require(SURVEY_PATH);

const setSurveyQuestions = async () => {
	const surveyRef = server_db.doc(SURVEY_DOC_PATH);

	if (allQuestions) {
		await surveyRef.set(allQuestions);
		console.log("Done uploading questions");
	} else {
		console.log("Failed to upload questions");
	}
};

const setContent = () => {
	setSurveyQuestions();
};

setContent();
