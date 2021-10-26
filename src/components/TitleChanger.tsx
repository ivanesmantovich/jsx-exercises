import React, { FC, useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

export const TitleChanger:FC = () => {
    const [inputValue, setValue] = useState('')
    const [title, setTitle] = useState('App');

    const changeHandler = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setTitle(inputValue)
    }

    useEffect(() => {
        console.log('effect in use')
        document.title = title
    }, [title])

    return <form onSubmit={changeHandler}><input value={inputValue} onChange={event => setValue(event.target.value)} type="text"/></form>
}