import React, {FC, useContext, useState} from 'react'

const RoomContext = React.createContext<{isLit: boolean; toggleLight: React.MouseEventHandler} | undefined>(undefined);

export const RoomStore:FC = ({children}) => {
    const [isLit, setLit] = useState(false);

    const toggleLight = () => {
        setLit(!isLit)
    }

    const value = {isLit, toggleLight}
    return (
        <RoomContext.Provider value={value}>
            {children}
        </RoomContext.Provider>
    )
}

export const Room:FC = () => {
    const context = useContext(RoomContext)
    if (context === undefined) throw new Error('context must be used')

    return (
        <div className={`container room ${context.isLit ? 'lit' : 'dark'}`}>
            <p>The room is {context.isLit ? 'lit': 'dark'}</p>
            <button onClick={context.toggleLight}>Toggle light</button>
        </div>
    )
}