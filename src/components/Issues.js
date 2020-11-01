import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getIssues } from "../actions/githubActions";
import IssueItem from "./IssueItem";
import Spinner from "../components/layout/Spinner";
const Issues = ({ git: { issues, filtered, loading }, getIssues }) => {
	useEffect(() => {
		getIssues();
	}, []);
	if (loading === true) {
		return <Spinner />;
	} else {
		return (
			<div>
				{filtered !== null
					? filtered.map((issue) => {
							return <IssueItem issue={issue} key={issue.id} />;
					  })
					: issues.map((issue) => {
							return <IssueItem issue={issue} key={issue.id} />;
					  })}
			</div>
		);
	}
};
const mapStateToProps = (state) => ({
	git: state.github,
});

export default connect(mapStateToProps, { getIssues })(Issues);
