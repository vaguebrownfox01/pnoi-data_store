// user context
import createDataContext from "../createDataContext";

// Initial State
const subjectInitialState = {
	loading: false,
	firebaseId: "",
	subjectMetadata: {},
	subjectQuestionnair: {},
	subjectUploadedData: [],

	metadataDone: false,
	questionnairDone: false,
	vocalbreathDone: false,
	lungbreathDone: false,

	accordionState: {},
};

// Reducer
const subjectReducer = (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case "SET_LOADING":
			return { ...state, loading: payload };

		case "SET_ALL":
			return { ...state, ...payload };

		default:
			return state;
	}
};

// Actions
const subjectLoadAction = (d) => {
	return () => {
		wait(true, d);

		console.log("subject action log");

		wait(false, d);
	};
};

const subjectSetAllInfoAction = (d) => {
	return (subjectState, action) => {
		wait(true, d);

		switch (action) {
			case "reset":
				d({ type: "SET_ALL", payload: subjectInitialState });

				break;

			default:
				d({ type: "SET_ALL", payload: subjectState });
				break;
		}

		wait(false, d);
	};
};

// Helpers
const wait = (l, d) => d({ type: "SET_LOADING", payload: l });

// Export
const { Context: SubjectContext, Provider: SubjectProvider } =
	createDataContext(
		subjectReducer,
		{
			subjectLoadAction,
			subjectSetAllInfoAction,
		},
		subjectInitialState
	);

export { SubjectContext, SubjectProvider };
