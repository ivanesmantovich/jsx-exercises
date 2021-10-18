import React, { FC, useState } from 'react';

interface OneTimeButtonProps {
	onClick: Function;
}

export const OneTimeButton: FC<OneTimeButtonProps> = ({ onClick }) => {
	const [clicked, setClicked] = useState(false);

	const handleClick = () => {
		onClick();

		setClicked(true);
	};

	return (
		<button onClick={handleClick} disabled={clicked} className="oneTimeButton">
			Hello
		</button>
	);
};


