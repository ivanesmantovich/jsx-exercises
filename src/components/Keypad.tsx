import React, { FC, useReducer } from 'react';

type KeypadState = {
	passed: boolean;
	currentButtonIndex: number;
	rightButtons: string[];
};

type KeypadAction = {
	type: 'buttonPress' | 'passed';
	pressedButton?: string;
};

const KeypadInitialState: KeypadState = {
	passed: false,
	currentButtonIndex: 0,
	rightButtons: ['1', '2', '3', '4', '5', '6'],
};

const KeypadReducer = (state: KeypadState, action: KeypadAction) => {
	switch (action.type) {
		case 'buttonPress': {
			if (
				action.pressedButton == state.rightButtons[state.currentButtonIndex]
			) {
				let newButtonIndex = state.currentButtonIndex + 1;
				if (newButtonIndex == state.rightButtons.length)
					// ???
					return {
						...state,
						passed: true,
					};
				else
					return {
						...state,
						currentButtonIndex: newButtonIndex,
					};
			} else {
				return {
					...state,
					currentButtonIndex: 0,
				};
			}
		}
        case 'passed': {
            return {
                ...state,
                passed: false,
                currentButtonIndex: 0
            }
        }
		default:
			return state;
	}
};

export const Keypad: FC = () => {
	const [keypadState, dispatch] = useReducer(KeypadReducer, KeypadInitialState);

	const buttonPress = (event: React.MouseEvent) => {
		dispatch({
			type: 'buttonPress',
			pressedButton: event.currentTarget.textContent!,
		});
	};

	return (
		<div className="container">
			{keypadState.passed ? (
                <>
				<h1>Passed</h1>
                <button onClick={() => dispatch({type: 'passed'})}>Reset</button>
                </>
			) : (
				<div className="keypad">
					<div>
						<button
							className="keypadButton"
							onClick={(event) => buttonPress(event)}
						>
							1
						</button>
					</div>
					<div>
						<button
							className="keypadButton"
							onClick={(event) => buttonPress(event)}
						>
							2
						</button>
					</div>
					<div>
						<button
							className="keypadButton"
							onClick={(event) => buttonPress(event)}
						>
							3
						</button>
					</div>
					<div>
						<button
							className="keypadButton"
							onClick={(event) => buttonPress(event)}
						>
							4
						</button>
					</div>
					<div>
						<button
							className="keypadButton"
							onClick={(event) => buttonPress(event)}
						>
							5
						</button>
					</div>
					<div>
						<button
							className="keypadButton"
							onClick={(event) => buttonPress(event)}
						>
							6
						</button>
					</div>
					<div>
						<button
							className="keypadButton"
							onClick={(event) => buttonPress(event)}
						>
							7
						</button>
					</div>
					<div>
						<button
							className="keypadButton"
							onClick={(event) => buttonPress(event)}
						>
							8
						</button>
					</div>
					<div>
						<button
							className="keypadButton"
							onClick={(event) => buttonPress(event)}
						>
							9
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

