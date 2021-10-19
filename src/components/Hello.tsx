import React, { FC, useRef, useState } from 'react';


interface NameProps {
    setValue: Function
}

const FirstName: FC<NameProps> = ({setValue}) => {

	const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	return (
		<input
			className="firstName"
			type="text"
			onChange={changeHandler}
			placeholder="First name"
		/>
	);
};



const LastName: FC<NameProps> = ({setValue}) => {

	const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	return (
		<input
			className="lastName"
			type="text"
			onChange={changeHandler}
			placeholder="Last name"
		/>
	);
};

export const Hello: FC = () => {
	const [firstName, setFirstName] = useState<string>('');
	const [lastName, setLastName] = useState<string>('');

	const changeFirstName = (newFirstName: string) => {
		setFirstName(newFirstName);
	};

	const changeLastName = (newLastName: string) => {
		setLastName(newLastName);
	};

	return (
		<>
			<FirstName setValue={changeFirstName} />
			<LastName setValue={changeLastName} />
            <p>Hello, {firstName} {lastName}</p>
		</>
	);
};