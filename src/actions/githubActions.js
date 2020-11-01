import {
	GET_ISSUES,
	GET_ERROR,
	INCR_WATCH,
	FILTER_ISSUES,
	SET_LOADING,
} from "../actions/types";

export const getIssues = () => async (dispatch) => {
	try {
		setLoading();
		const res = await fetch(
			"https://api.github.com/repos/facebook/create-react-app/issues?client_id=7686703693b2ebc34972&client_secret=288ec1d185f8ea74b983fc7e0ddf2bd818af341b&per_page=1000"
		);
		const data = await res.json();
		dispatch({ type: GET_ISSUES, payload: data });
	} catch (error) {
		dispatch({
			type: GET_ERROR,
			payload: error.response.statusText,
		});
	}
};
export const filterIssues = (text) => {
	return {
		type: FILTER_ISSUES,
		payload: text,
	};
};
export const setLoading = () => {
	return {
		type: SET_LOADING,
	};
};
