import React, { FC, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

export const LogEffect = () => {
	const [text, setText] = useState('');

	useEffect(() => {
		console.log('latest value:', text);
	});

	return <input value={text} onChange={(e) => setText(e.target.value)} />;
};