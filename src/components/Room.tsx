import React, { FC, useState } from 'react';

export const Room: FC = () => {
	const [light, setLight] = useState<boolean>(false);

	const lightswitch = () => {
		setLight(!light);
	};

	return (
		<div className="room">
			<h1>Room</h1>
			<p>{light ? 'The room is lit' : 'The room is dark'}</p>
			<button onClick={lightswitch}>Light on/off</button>
		</div>
	);
};
