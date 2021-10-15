import React, { FC, useState } from 'react';
// import { Switches } from './Switches';

// If you want to get the updated value of the state immediately after the setState call, you can pass a function as the second argument to the setState call which will be executed once the state is updated.

export const House: FC = () => {
	const [lights, changeLights] = useState({
		kitchen: false,
		bathroom: false,
		livingRoom: false,
		bedroom: false,
	});

	const lightswitch = (room: keyof typeof lights) => {
		if (lights[room] == false) changeLights({ ...lights, [room]: true });
		else changeLights({ ...lights, [room]: false });
	};

	return (
		<div className="house">
			<div className="kitchen">{`Kitchen: ${lights.kitchen}`}</div>
			<div className="bathroom">{`Bathroom: ${lights.bathroom}`}</div>
			<div className="livingRoom">{`Living Room: ${lights.livingRoom}`}</div>
			<div className="bedroom">{`Bedroom: ${lights.bedroom}`}</div>
			<button onClick={() => lightswitch('kitchen')}>Kitchen</button>
			<button onClick={() => lightswitch('bathroom')}>Bathroom</button>
			<button onClick={() => lightswitch('livingRoom')}>Living Room</button>
			<button onClick={() => lightswitch('bedroom')}>Bedroom</button>
		</div>
	);
};
