import React, { useState } from "react";

const Header = () => {
	var [watch, setWatch] = useState(1);
	const [fork, setFork] = useState(1);
	const [star, setStar] = useState(1);
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
				<span style={{ position: "absolute", left: "68%" }}>
					<button
						className='btn'
						type='button'
						onClick={(e) => {
							setWatch(watch + 1);
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
							setStar(star + 1);
							e.preventDefault();
						}}
					>
						<i className='far fa-star'></i> Star:{" "}
						<span class='Counter mr-1'>{star}</span>
					</button>
				</span>
				<span style={{ position: "absolute", left: "87%" }}>
					<button
						className='btn '
						type='button'
						onClick={(e) => {
							setFork(fork + 1);
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

export default Header;
