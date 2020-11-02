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
			payload: error.response,
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

export const getOpen = () => async (dispatch) => {
	try {
		setLoading();
		const res = await fetch(
			"https://api.github.com/repos/facebook/create-react-app"
		);
		const data = await res.json();
		dispatch({ type: GET_OPEN, payload: data.open_issues_count });
	} catch (error) {
		dispatch({
			type: GET_ERROR,
			payload: error.response,
		});
	}
};
export const getWatch = () => async (dispatch) => {
	try {
		setLoading();
		const res = await fetch(
			"https://api.github.com/repos/facebook/create-react-app"
		);
		const data = await res.json();
		dispatch({ type: GET_WATCH, payload: data.subscribers_count });
	} catch (error) {
		dispatch({
			type: GET_ERROR,
			payload: error.response,
		});
	}
};
export const incrWatch = () => {
	return {
		type: INCR_WATCH,
	};
};
export const getStar = () => async (dispatch) => {
	try {
		setLoading();
		const res = await fetch(
			"https://api.github.com/repos/facebook/create-react-app"
		);
		const data = await res.json();
		dispatch({ type: GET_STAR, payload: data.stargazers_count });
	} catch (error) {
		dispatch({
			type: GET_ERROR,
			payload: error.response,
		});
	}
};
export const incrStar = () => {
	return {
		type: INCR_STAR,
	};
};
export const getFork = () => async (dispatch) => {
	try {
		setLoading();
		const res = await fetch(
			"https://api.github.com/repos/facebook/create-react-app"
		);
		const data = await res.json();
		dispatch({ type: GET_FORK, payload: data.forks_count });
	} catch (error) {
		dispatch({
			type: GET_ERROR,
			payload: error.response,
		});
	}
};
export const incrFork = () => {
	return {
		type: INCR_FORK,
	};
};
