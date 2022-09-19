// user context
import createDataContext from "../createDataContext";

// Initial State
const subjectInitialState = {
	loading: false,
	firebaseId: "",
	subjectInfo: {},
};

// Reducer
const subjectReducer = (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case "SET_LOADING":
			return { ...state, loading: payload };

		default:
			return state;
	}
};

// Actions
const subjectLoadAction = (dispatch) => {
	return () => {
		wait(true, dispatch);

		console.log("subject action log");

		wait(false, dispatch);
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
		},
		subjectInitialState
	);

export { SubjectContext, SubjectProvider };
