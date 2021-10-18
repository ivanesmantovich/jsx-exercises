import React, { FC, useState } from 'react';

interface NumberProps {
	id: number;
	value: number;
}

export const ListOfNumbers: FC = () => {
	const [numbers, setNumbers] = useState<NumberProps[]>([]);

	const addNumber = () => {
		setNumbers([
			...numbers,
			{
				id: numbers.length,
				value: Math.random() * 100,
			},
		]);
	};

	return (
		<>
			<h1>List of numbers</h1>
			<button onClick={addNumber}>Add a number</button>
			<ul>
				{numbers.map((num) => {
					return <li key={num.id}>{num.value}</li>;
				})}
			</ul>
		</>
	);
};
