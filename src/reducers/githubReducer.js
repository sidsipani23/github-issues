import {
	GET_ISSUES,
	GET_ERROR,
	FILTER_ISSUES,
	SET_LOADING,
} from "../actions/types";
const initialState = {
	issues: [],
	errors: null,
	filtered: null,
	loading: false,
};
export default (state = initialState, action) => {
	switch (action.type) {
		case GET_ISSUES:
			return {
				...state,
				issues: action.payload,
				loading: false,
			};
		case GET_ERROR:
			return {
				...state,
				errors: action.payload,
			};
		case FILTER_ISSUES:
			return {
				...state,
				filtered: state.issues.filter((issue) => {
					const regex = new RegExp(`${action.payload}`, "gi");
					return issue.title.match(regex);
				}),
				loading: false,
			};
		case SET_LOADING:
			return {
				...state,
				loading: true,
			};
		default:
			return state;
	}
};
