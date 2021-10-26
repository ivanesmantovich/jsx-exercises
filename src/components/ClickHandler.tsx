import React, { FC, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

export const ClickHandler:FC = () => {
    const [messages, setMessages] = useState<string[]>([])

    const addMessage = () => {
        setMessages([
            ...messages,
            'Message'
        ])
    }

    useEffect(() => {
        document.addEventListener('click', addMessage)

        return () => document.removeEventListener('click', addMessage)

    }, [messages])

    return <div className={'clickMessages'}>{messages.map(message => {
        return <p>{message}</p>
    })}</div>
}