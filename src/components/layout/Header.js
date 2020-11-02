import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
	getWatch,
	incrWatch,
	getStar,
	incrStar,
	getFork,
	incrFork,
} from "../../actions/githubActions";
const Header = ({
	git: { watch, star, fork },
	getWatch,
	incrWatch,
	getStar,
	incrStar,
	getFork,
	incrFork,
}) => {
	useEffect(() => {
		getWatch();
		getStar();
		getFork();
		incrWatch();
		incrFork();
		incrStar();
	}, []);

	return (
		<div className='card'>
			<div className='card-body' style={{ position: "relative" }}>
				<i className='fab fa-github-alt fa-lg'></i>
				{"  "}
				<span
					style={{
						fontFamily: "Roboto",
						fontSize: "1.5rem",
						color: "#389393",
					}}
				>
					facebook
				</span>
				<span
					style={{ fontFamily: "Roboto", fontSize: "1.5rem", color: "#16697a" }}
				>
					/ create-react-app
				</span>
				<span style={{ position: "absolute", left: "66%" }}>
					<button
						className='btn'
						type='button'
						onClick={(e) => {
							incrWatch();
							e.preventDefault();
						}}
					>
						<i className='fas fa-eye'></i> Watch:
						<span class='Counter mr-1'>{watch}</span>
					</button>
				</span>
				<span style={{ position: "absolute", left: "78%" }}>
					<button
						className='btn '
						type='button'
						onClick={(e) => {
							incrStar();
							e.preventDefault();
						}}
					>
						<i className='far fa-star'></i> Star:{" "}
						<span class='Counter mr-1'>{star}</span>
					</button>
				</span>
				<span style={{ position: "absolute", left: "89.5%" }}>
					<button
						className='btn '
						type='button'
						onClick={(e) => {
							incrFork();
							e.preventDefault();
						}}
					>
						<img
							src='https://user-images.githubusercontent.com/17777237/54873012-40fa5b00-4dd6-11e9-98e0-cc436426c720.png'
							alt='fork_img'
							style={{ width: "10px", height: "15px" }}
						/>{" "}
						Fork: <span class='Counter mr-1'>{fork}</span>
					</button>
				</span>
			</div>
		</div>
	);
};
const mapStateToProps = (state) => ({
	git: state.github,
});
export default connect(mapStateToProps, {
	getWatch,
	incrWatch,
	getStar,
	incrStar,
	getFork,
	incrFork,
})(Header);
