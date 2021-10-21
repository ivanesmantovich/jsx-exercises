import React, { useReducer } from 'react';

// type Login = (username: string, password:string) => Promise<boolean>

// let login:Login

let login = async function ({
	username,
	password,
}: {
	username: string;
	password: string;
}) {
	return new Promise<void>((resolve, reject) => {
		setTimeout(() => {
			if (username === 'life' && password === 'password') {
				resolve();
			} else {
				reject();
			}
		}, 1000);
	});
};

const initialState = {
	username: '',
	password: '',
	isLoading: false,
	error: '',
	isLoggedIn: false,
};

type LoginState = typeof initialState;

type LoginAction =
	| { type: 'login' | 'success' | 'error' | 'logOut' }
	| { type: 'field'; fieldName: string; payload: string };

function loginReducer(state: LoginState, action: LoginAction) {
	switch (action.type) {
		case 'field': {
			return {
				...state,
				[action.fieldName]: action.payload,
			};
		}
		case 'login': {
			return {
				...state,
				error: '',
				isLoading: true,
			};
		}
		case 'success': {
			return {
				...state,
				isLoggedIn: true,
				isLoading: false,
			};
		}
		case 'error': {
			return {
				...state,
				error: 'Incorrect username or password!',
				isLoggedIn: false,
				isLoading: false,
				username: '',
				password: '',
			};
		}
		case 'logOut': {
			return {
				...state,
				isLoggedIn: false,
			};
		}
		default:
			return state;
	}
}

export default function LoginUseReducer() {
	const [state, dispatch] = useReducer(loginReducer, initialState);
	const { username, password, isLoading, error, isLoggedIn } = state;

	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		dispatch({ type: 'login' });

		try {
			await login({ username, password });
			dispatch({ type: 'success' });
		} catch (error) {
			dispatch({ type: 'error' });
		}
	};

	return (
		<div className="container">
			{isLoggedIn ? (
				<>
					<h1>Welcome {username}!</h1>
					<button onClick={() => dispatch({ type: 'logOut' })}>Log Out</button>
				</>
			) : (
				<form className="form" onSubmit={onSubmit}>
					{error && <p className="error">{error}</p>}
					<p>Please Login!</p>
					<input
						type="text"
						placeholder="username"
						value={username}
						onChange={(e) =>
							dispatch({
								type: 'field',
								fieldName: 'username',
								payload: e.currentTarget.value,
							})
						}
					/>
					<input
						type="password"
						placeholder="password"
						autoComplete="new-password"
						value={password}
						onChange={(e) =>
							dispatch({
								type: 'field',
								fieldName: 'password',
								payload: e.currentTarget.value,
							})
						}
					/>
					<button className="submit" type="submit" disabled={isLoading}>
						{isLoading ? 'Logging in...' : 'Log In'}
					</button>
				</form>
			)}
		</div>
	);
}
