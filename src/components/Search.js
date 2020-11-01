import React from "react";
import { connect } from "react-redux";
import { filterIssues } from ".././actions/githubActions";
const Search = ({ git: { filtered }, filterIssues }) => {
	return (
		<div
			classname='card'
			style={{ paddingTop: "10px", paddingLeft: "50px", position: "relative" }}
		>
			<form className='form-inline' action='#'>
				<input
					type='search'
					className='form-control mr-sm-2'
					placeholder='Search'
					aria-label='Search'
					style={{ width: "400px" }}
					onChange={(e) => {
						filterIssues(e.target.value);
					}}
				/>
			</form>
			<span style={{ position: "absolute", left: "60%", top: "20%" }}>
				<button type='button' className='btn'>
					<img
						src='https://img.icons8.com/fluent/48/000000/tag.png'
						style={{ height: "18px", width: "18px" }}
						alt='label-img'
					/>
					Labels: <span class='Counter mr-1'>30</span>
				</button>
			</span>
			<span style={{ position: "absolute", left: "72%", top: "20%" }}>
				<button className='btn' type='button'>
					<img
						src='data:image/svg+xml;base64,PHN2ZyBpZD0iYm9sZCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTUuNSIgY3k9IjE1IiByPSIzIi8+PHBhdGggZD0ibTE4LjI1IDE5aC01LjVjLTEuNTE3IDAtMi43NSAxLjIzMy0yLjc1IDIuNzV2MS41YzAgLjQxNC4zMzYuNzUuNzUuNzVoOS41Yy40MTQgMCAuNzUtLjMzNi43NS0uNzV2LTEuNWMwLTEuNTE3LTEuMjMzLTIuNzUtMi43NS0yLjc1eiIvPjxwYXRoIGQ9Im0xNC4xNyA1IDIuNjktMy44MmMuMTYtLjIzLjE4LS41My4wNi0uNzgtLjEzLS4yNC0uMzktLjQtLjY3LS40aC0xMC4zOGMuMDguMjMuMTMuNDkuMTMuNzV2OS4yNWgxMC4yNWMuMjggMCAuNTQtLjE2LjY3LS40LjEyLS4yNS4xLS41NS0uMDYtLjc4eiIvPjxwYXRoIGQ9Im0zLjc1IDI0Yy0uNDE0IDAtLjc1LS4zMzYtLjc1LS43NXYtMjIuNWMwLS40MTQuMzM2LS43NS43NS0uNzVzLjc1LjMzNi43NS43NXYyMi41YzAgLjQxNC0uMzM2Ljc1LS43NS43NXoiLz48L3N2Zz4='
						style={{ height: "18px", width: "18px" }}
						alt='milestone_img'
					/>{" "}
					Milestones: <span class='Counter mr-1'>4</span>
				</button>
			</span>
		</div>
	);
};
const mapStateToProps = (state) => ({
	git: state.github,
});
export default connect(mapStateToProps, { filterIssues })(Search);
