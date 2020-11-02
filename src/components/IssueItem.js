import React from "react";

const IssueItem = ({ issue }) => {
	function daysBetween(date1String) {
		var toDate = new Date().toISOString().slice(0, 10);
		var fromDate = date1String;
		var diff = Math.floor(
			(Date.parse(toDate) - Date.parse(fromDate)) / 86400000
		);
		return diff;
	}

	return (
		<div class='Box' style={{ margin: "5px 35px" }}>
			<div class='Box-header'>
				<h3 class='Box-title'>
					{/*  */}
					{issue.state === "open" ? (
						<i className='fas fa-exclamation-circle fa-lg'></i>
					) : (
						<i className='far fa-check-circle'></i>
					)}
					<span
						style={{
							fontFamily: "monospace",
							fontWeight: "400",
							fontSize: "1rem",
						}}
					>
						{" "}
						{issue.title}{" "}
					</span>
					{issue.labels.length !== 0
						? issue.labels.map((label) => {
								return (
									<span
										style={{
											background: `#${label.color}`,
											borderRadius: "10px",
											fontSize: "0.75rem",
											padding: "3px",
										}}
									>
										{label.name}
									</span>
								);
						  })
						: null}
				</h3>
				#{issue.number} opened{" "}
				{daysBetween(issue.created_at.split("T")[0]) === 0
					? "today "
					: daysBetween(issue.created_at.split("T")[0])}
				{daysBetween(issue.created_at.split("T")[0]) !== 0 && " days ago "}
				by {issue.user.login}
				{issue.comments !== 0 && (
					<span style={{ float: "right" }}>
						<i className='far fa-comment'></i>
						{issue.comments}
					</span>
				)}
			</div>
		</div>
	);
};

export default IssueItem;
