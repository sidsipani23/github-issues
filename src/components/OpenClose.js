import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getOpen } from "../actions/githubActions";
const OpenClose = ({ git: { open_issues }, getOpen }) => {
	useEffect(() => {
		getOpen();
	}, []);
	return (
		<div style={{ paddingTop: "1%", paddingLeft: "5%", fontSize: "1rem" }}>
			<i className='fas fa-exclamation-circle'></i> {open_issues} Open{" "}
			<span> </span>
			<i className='far fa-check-circle'></i> 5782 Closed
		</div>
	);
};
const mapStateToProps = (state) => ({
	git: state.github,
});

export default connect(mapStateToProps, { getOpen })(OpenClose);
