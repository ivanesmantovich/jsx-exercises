import React, { FC, useState } from 'react';

export const House: FC = () => {
	const [lights, changeLights] = useState({
		rooms: {
			kitchen: false,
			bathroom: false,
			livingRoom: false,
			bedroom: false,
		},
	});

	const lightswitch = (room: keyof typeof lights.rooms) => {
		if (lights.rooms[room] == false) changeLights({ ...lights, [room]: true });
		else changeLights({ ...lights, [room]: false });
	};

	return (
		<div className="house">
			<div className="kitchen">{`Kitchen: ${lights.rooms.kitchen}`}</div>
			<div className="bathroom">{`Bathroom: ${lights.rooms.bathroom}`}</div>
			<div className="livingRoom">{`Living Room: ${lights.rooms.livingRoom}`}</div>
			<div className="bedroom">{`Bedroom: ${lights.rooms.bedroom}`}</div>
			<button onClick={() => lightswitch('kitchen')}>Kitchen</button>
			<button onClick={() => lightswitch('bathroom')}>Bathroom</button>
			<button onClick={() => lightswitch('livingRoom')}>Living Room</button>
			<button onClick={() => lightswitch('bedroom')}>Bedroom</button>
		</div>
	);
};