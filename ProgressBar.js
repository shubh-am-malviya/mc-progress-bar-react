import React from "react";
import "./styles.css";

const ProgressBar = ({ progress }) => {
	return (
		<div className="progress-container">
			<div
				className="progress-filled"
				style={{ transform: `translateX(${progress - 100}%)` }}
			></div>
		</div>
	);
};

export default ProgressBar;
