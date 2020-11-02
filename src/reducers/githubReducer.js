import {
	GET_ISSUES,
	GET_ERROR,
	FILTER_ISSUES,
	SET_LOADING,
	GET_OPEN,
	GET_WATCH,
	INCR_WATCH,
	INCR_FORK,
	INCR_STAR,
	GET_FORK,
	GET_STAR,
} from "../actions/types";
const initialState = {
	issues: [],
	errors: null,
	filtered: null,
	loading: false,
	open_issues: null,
	watch: null,
	star: null,
	fork: null,
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
		case GET_OPEN:
			return {
				...state,
				open_issues: action.payload,
			};
		case GET_WATCH:
			return {
				...state,
				watch: parseInt(action.payload),
			};
		case INCR_WATCH:
			return {
				...state,
				watch: state.watch + 1,
			};
		case GET_STAR:
			return {
				...state,
				star: parseInt(action.payload),
			};
		case INCR_STAR:
			return {
				...state,
				star: state.star + 1,
			};
		case GET_FORK:
			return {
				...state,
				fork: parseInt(action.payload),
			};
		case INCR_FORK:
			return {
				...state,
				fork: state.fork + 1,
			};
		default:
			return state;
	}
};
