import React from "react";

const IssueItem = ({ issue }) => {
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
							fontWeight: "600",
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
											padding: "1px",
										}}
									>
										{label.name}
									</span>
								);
						  })
						: null}
				</h3>
				#{issue.number} opened on {issue.created_at.split("T")[0]} by{" "}
				{issue.user.login}
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
