import React, { FC, useState } from 'react';

export const StepTracker: FC = () => {
	const [steps, setSteps] = useState(0);

	const increment = () => {
		setSteps((steps) => steps + 1);
	};

	return (
		<div className="stepTracker">
			<h1>Steps: {steps}</h1>
			<button onClick={increment}>Do a step</button>
		</div>
	);
};