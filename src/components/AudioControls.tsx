import React, { FC, useState } from 'react';

type ControlProps = {
	name: string;
};

const Control: FC<ControlProps> = ({ name }) => {
	const [stat, changeStat] = useState<number>(1);
	const [isFocus, setIsFocus] = useState(false);
	const [isBlur, setIsBlur] = useState(false);

	const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		changeStat(Number(event.target.value));
	};

	const focusHandler = (event: React.FocusEvent<HTMLInputElement>) => {
		setIsFocus(true);
		setIsBlur(false);

        event.target.select();

		// сделать что то с эвентом
	};

	const blurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
		setIsFocus(false);
		setIsBlur(true);

		if (stat > 100) changeStat(100);
		if (stat < 1) changeStat(1);
	};

	return (
		<div className="control">
			<div className="buttonContainer">
				<div
					onClick={() => {
						changeStat((stat) => {
							if (stat - 1 === 0) return stat;
							else return stat - 1;
						});
					}}
					className="minus button noselect"
				>
					-
				</div>
			</div>
			<div className="buttonContainer">
				<div
					onClick={() => {
						changeStat((stat) => {
							if (stat + 1 === 101) return stat;
							else return stat + 1;
						});
					}}
					className="plus button noselect"
				>
					+
				</div>
			</div>
			<input onFocus={focusHandler} onBlur={blurHandler} onChange={changeHandler} value={stat} className="stat"></input>
			<div className="name">{name.toUpperCase()}</div>
		</div>
	);
};

export const AudioControls: FC = () => {
	return (
		<div className="controls">
			<Control name="volume" />
			<Control name="treble" />
			<Control name="mid" />
			<Control name="bass" />
		</div>
	);
};
