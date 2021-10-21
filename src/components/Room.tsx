import React, { FC, useReducer } from 'react';

type RoomState = {
	levels: string[];
	currentLevel: number;
};
type RoomAction = {
	type: 'changeLevel';
};
const initialRoomState = {
	levels: ['off', 'low', 'medium', 'high'],
	currentLevel: 0,
};

//                  Текущее состояние, Действие для изменения текущего состояния
const RoomReducer = (state: RoomState, action: RoomAction) => {
	switch (action.type) {
		case 'changeLevel': {
			// Находится на последнем уровне, надо начать сначала
			if (state.currentLevel === state.levels.length - 1)
				return {
					...state,
					currentLevel: 0,
				};
			else
				return {
					...state,
					currentLevel: state.currentLevel + 1,
				};
		}
	}
};

export const Room: FC = () => {
	//   Состояние, Отправка действия    Обработчик действий, начальное состояние
	const [roomState, dispatch] = useReducer(RoomReducer, initialRoomState);

	return (
		<div className="room container">
			<p>{roomState.levels[roomState.currentLevel]}</p>
			<button onClick={() => dispatch({ type: 'changeLevel' })}>
				Change Level
			</button>
		</div>
	);
};