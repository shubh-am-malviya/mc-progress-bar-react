import React, { useEffect, useRef, useState } from "react";
import ProgressBar from "./ProgressBar";

const App = () => {
	const [progress, setProgress] = useState(0);
	const intervalId = useRef();
	const progressCycle = useRef(0);

	useEffect(() => {
		intervalId.current = setInterval(() => {
			setProgress((prevProgress) => prevProgress + 10);
			progressCycle.current++;

			// console.log("Cycle: " + progressCycle.current);
			if (progressCycle.current === 10) clearInterval(intervalId.current);
		}, 1000);

		return () => {
			clearInterval(intervalId.current);
		};
	}, []);

	// console.log("PROGRESS: " + progress);

	return (
		<div>
			<ProgressBar progress={progress} />
		</div>
	);
};

export default App;
