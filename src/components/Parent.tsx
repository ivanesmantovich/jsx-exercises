import React from 'react';
import { FC } from 'react';
import { Child } from './Child';
import { useState } from 'react';
import '../App.css';

// export const Parent: FC = () => {
// 	const [data, setData] = useState('');

// 	const parentToChild = () => {
// 		setData('This is the data from Parent Component to the Child Component');
// 	};

// 	const childToParent = (childData: any) => {
// 		setData(childData);
// 	};

// 	return (
// 		<div className="App">
// 			{data}
// 			<Child parentToChild={data} childToParent={childToParent} />

// 			<div className="Child">
// 				<button onClick={() => parentToChild()}>Click Parent</button>
// 			</div>
// 		</div>
// 	);
// };
export const Parent: FC = () => {
	const [data, setData] = useState('');

	const childToParent = (childData: any) => {
		setData(childData);
	};

	return (
		<div className="App">
			{data}
			<Child childToParent={childToParent} />
		</div>
	);
};
