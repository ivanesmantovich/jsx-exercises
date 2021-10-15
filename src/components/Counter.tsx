import React, { FC, useState } from 'react';

export const Counter:FC = () => {

    const [state, changeState] = useState({counter: 0})

    const increment = () => changeState({counter: state.counter + 1})
    const decrement = () => changeState({counter: state.counter - 1})

    return (
        <div>
            <h1>{`Counter: ${state.counter}`}</h1>

            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}
