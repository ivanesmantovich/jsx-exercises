import React, { FC, useReducer, useRef, useLayoutEffect } from 'react';
// import {v4 as uuidv4} from 'uuid';

// let myuuid = uuidv4();

interface ItemProps {
	id: number;
	name: string;
}

type IState = ItemProps[];

interface IAction {
	type: 'add' | 'remove' | 'clear';
	name: string;
	index: number;
}

const initialState: IState = [];

const reducer: React.Reducer<IState, IAction> = (state, action) => {
	switch (action.type) {
		case 'add':
			return [
				...state,
				{
					id: state.length,
					name: action.name,
				},
			];
		case 'remove':
			return state.filter((_, index) => index !== action.index);
		case 'clear':
			return [];
		default:
			return state;
	}
};

export const ShoppingList: FC = () => {
	const inputRef = useRef<HTMLInputElement>(null);
	const [items, dispatch] = useReducer<React.Reducer<IState, IAction>>(
		reducer,
		initialState
	);

	const handleSubmit = (event: React.FormEvent) => {
		if (null !== inputRef.current) {
			event.preventDefault();
			dispatch({
				type: 'add',
				name: inputRef.current.value,
				index: items.length,
			});
			inputRef.current.value = '';
		}
	};

	return (
		<div className='container'>
			<form onSubmit={handleSubmit}>
				<input ref={inputRef} />
			</form>
			<ul>
				{items.map((item, index) => {
					return (
						<li key={item.id}>
							{item.name}
							<button
								onClick={() =>
									dispatch({ type: 'remove', name: item.name, index })
								}
							>
								X
							</button>
						</li>
					);
				})}
			</ul>
			<button
				onClick={() => dispatch({ type: 'clear', name: 'clear', index: -1 })}
			>
				Clear
			</button>
		</div>
	);
};
