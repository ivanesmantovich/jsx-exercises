import React, { useState, FC, ReactElement } from 'react';
import logo from './logo.svg';
import './App.css';

// Confirmation ---------------------------------------
// interface ConfirmationProps {
// 	title: string
// 	message: string;
// }
// const Confirmation: FC<ConfirmationProps> = ({children, ...props}) => {
// 	return (
// 		<div className="confirmation">
// 			<div className='title'>{props.title}</div>
// 			<div className='message'>{props.message}</div>
// 			<div className='buttons'>
// 				<button>OK</button> <button>Cancel</button>
// 			</div>
// 		</div>
// 	);
// };

// function App() {
// 	return (
// 		<div className="App">
// 			<Confirmation
// 				title='Are you sure?'
// 				message='Really sure?'
// 			/>
// 		</div>
// 	);
// }
// Confirmation ---------------------------------------

// Error Box ---------------------------------------
const ErrorBox: FC = ({ children }) => {
	return (
		<div className="errorbox">
			<div>
				<i className="fa-2x fas fa-exclamation-triangle"></i>
			</div>
			<div className="message">{children}</div>
		</div>
	);
};

const YellowBox: FC = ({ children }) => {
	return (
		<div className="yellowbox">
			<div className="icon">
				<i className="fa-2x far fa-lightbulb"></i>
			</div>
			<div className="message">{children}</div>
		</div>
	);
};

const Container: FC = ({ children }) => {
	return (
		<div className="container">
			<ErrorBox>The world is ending... Hover on to prevent!</ErrorBox>
			<YellowBox>Idea could come anytime... Catch it!</YellowBox>
		</div>
	);
};

const FirstChildOnly: FC = ({ children }) => {
	let items = React.Children.toArray(children);
	return <div className="container">{items[0]}</div>;
};

const LastChildOnly: FC = ({ children }) => {
	let items = React.Children.toArray(children);
	return <div className="container">{items[items.length - 1]}</div>;
};

function App() {
	return (
		<div className="App">
			<LastChildOnly>
				<ErrorBox>The world is ending... Hover on to prevent!</ErrorBox>
				<YellowBox>Idea could come anytime... Catch it!</YellowBox>
			</LastChildOnly>
		</div>
	);
}
// Error Box ---------------------------------------

export default App;
