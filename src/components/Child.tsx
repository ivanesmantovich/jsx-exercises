import React from 'react';
import { FC } from 'react';

interface ChildProps {
	childToParent: any;
}

export const Child: FC<ChildProps> = ({childToParent }) => {
	const data = 'This is the data from Child Component to the Parent Component';
	return (
		<div>
			<button onClick={() => childToParent(data)}>Click Child</button>
		</div>
	);
};
