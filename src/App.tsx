import React, { useState, FC, ReactElement } from 'react';
import logo from './logo.svg';
import './App.css';
import { House } from './components/House';
import { Parent } from './components/Parent';
import { Counter } from './components/Counter';
import { OneTimeButton } from './components/OneTimeButton';
import { StepTracker } from './components/StepTracker';
import { ListOfNumbers } from './components/ListOfNumbers';
// import { Room } from './components/Room';
import { RandomList } from './components/RandomList';
import { AudioControls } from './components/AudioControls';
import { Hello } from './components/Hello';
import { PizzaOrder } from './components/PizzaOrder';
import { OrderList } from './components/OrderList';
import { Order } from './components/Order';
import { ShoppingList } from './components/ShoppingList';
import LoginUseReducer from './components/LoginForm';
import { Keypad } from './components/Keypad';
import {Reddit } from './components/UseEffectPlayground';
import react from "@vitejs/plugin-react";
import {TitleChanger} from "./components/TitleChanger";
import {ClickHandler} from "./components/ClickHandler";
import {Room} from "./components/ContextRoom";

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
// const ErrorBox: FC = ({ children }) => {
// 	return (
// 		<div className="errorbox">
// 			<div>
// 				<i className="fa-2x fas fa-exclamation-triangle"></i>
// 			</div>
// 			<div className="message">{children}</div>
// 		</div>
// 	);
// };
// // Error Box ---------------------------------------

// const YellowBox: FC = ({ children }) => {
// 	return (
// 		<div className="yellowbox">
// 			<div className="icon">
// 				<i className="fa-2x far fa-lightbulb"></i>
// 			</div>
// 			<div className="message">{children}</div>
// 		</div>
// 	);
// };

// const Container: FC = ({ children }) => {
// 	return (
// 		<div className="container">
// 			<ErrorBox>The world is ending... Hover on to prevent!</ErrorBox>
// 			<YellowBox>Idea could come anytime... Catch it!</YellowBox>
// 		</div>
// 	);
// };

// function App() {
// 	return (
// 		<div className="App">
// 			<Container/>
// 		</div>
// 	);
// }

// const FirstChildOnly: FC = ({ children }) => {
// 	let items = React.Children.toArray(children);
// 	return <div className="container">{items[0]}</div>;
// };

// const LastChildOnly: FC = ({ children }) => {
// 	let items = React.Children.toArray(children);
// 	return <div className="container">{items[items.length - 1]}</div>;
// };

// interface HeadProps {
// 	num: number;
// }

// const Head: FC<HeadProps> = ({ children, ...props }) => {
// 	let childrenToReturn = React.Children.map(children, (child, i) => {
// 		if (i >= props.num) return;
// 		return child;
// 	});
// 	return <div className="container">{childrenToReturn}</div>;
// };

// interface TailProps {
// 	num: number;
// }

// const Tail: FC<TailProps> = ({ children, ...props }) => {
// 	let childrenToReturn = React.Children.map(children, (child, i) => {
// 		if (i < React.Children.toArray(children).length - props.num) return;
// 		return child;
// 	});
// 	return <div className="container">{childrenToReturn}</div>;
// };

// function App() {
// 	return (
// 		<div className="App">
// 			<Tail num={3}>
// 				<p>First</p>
// 				<p>Second</p>
// 				<p>Third</p>
// 				<p>Fourth</p>
// 				<p>Fifth</p>
// 				<p>Sixth</p>
// 			</Tail>
// 		</div>
// 	);
// }

// const App: FC = () => {

// 	const [state, changeState] = useState({mounted: true});

// 	const mountCounter = () => changeState({mounted:true})
// 	const unmountCounter = () => changeState({mounted:false})

// 	return (
// 		<div className="App">
// 			<button onClick={mountCounter} disabled={state.mounted}>Mount</button>
// 			<button onClick={unmountCounter} disabled={!state.mounted}>Unmount</button>
// 			{state.mounted ? <Counter/> : null}
// 		</div>
// 	);
// };

// const App: FC = () => {
// 	const [size, setSize] = useState<string>('Not Selected');
// 	const [topping, setTopping] = useState<string>('None');
// 	const [glutenfree, setGlutenfree] = useState<boolean>(false);
// 	const [special, setSpecial] = useState<string>('Not specified');
// 	const [orders, setOrders] = useState<string[]>([]);

// 	const addOrder = () => {
// 		let order: string = `Size: ${size}, Topping: ${topping}, Gluten Free: ${glutenfree}, Special: ${special}`;
// 		setOrders([...orders, order]);
// 	};

// 	const changeGluten = () => {
// 		setGlutenfree(!glutenfree);
// 	};

// 	const changeSize = (event: React.ChangeEvent<HTMLInputElement>) => {
// 		setSize(event.target.value);
// 	};

// 	const changeTopping = (event: React.ChangeEvent<HTMLSelectElement>) => {
// 		setTopping(event.target.value);
// 	};

// 	const changeSpecial = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
// 		setSpecial(event.target.value);
// 	};

// 	return (
// 		<div className="App">
// 			<PizzaOrder
// 				size={size}
// 				changeSize={changeSize}
// 				changeTopping={changeTopping}
// 				changeSpecial={changeSpecial}
// 				changeGluten={changeGluten}
// 				addOrder={addOrder}
// 			/>
// 			<OrderList orders={orders} />
// 		</div>
// 	);
// };

// const App:FC = () => {
// 	const [inputValue, setValue] = useState('reactjs')
// 	const [subreddit, setSubreddit] = useState(inputValue)
//
// 	const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
// 		event.preventDefault()
// 		setSubreddit(inputValue)
// 	}
//
// 	return (
// 		<div className='App'>
// 			<form onSubmit={handleSubmit}><input value={inputValue} onChange={event => setValue(event.target.value)}/></form>
// 			<Reddit subreddit={subreddit}/>
// 		</div>
// 	)
// }

const App:FC = () => {
	return (
		<div className='App'>
			<Room/>
		</div>
	)
}

export default App;