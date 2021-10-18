import React, { FC, useState } from 'react';

export const RandomList: FC = () => {
	interface numProps {
		id: number;
		value: number;
	}
	const [nums, changeNums] = useState<numProps[]>([]);

	const addNum = () => {
		changeNums([
			...nums,
			{
				id: nums.length,
				value: Math.round(Math.random() * 100),
			},
		]);
	};

	return (
		<>
			<h1>Random List</h1>
			<button onClick={addNum}>Add a number</button>
			<ol>
				{nums.map((num) => {
					return <li key={num.id}>{num.value}</li>;
				})}
			</ol>
		</>
	);
};