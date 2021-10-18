import React, { FC, useState } from 'react';

type ControlProps = {
	name: string;
};

const Control: FC<ControlProps> = ({ name }) => {
	const [stat, changeStat] = useState<number>(1);

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
                    className="minus button"
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
                    className="plus button"
                >
                    +
                </div>
            </div>
			<div className="stat">{stat}</div>
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
