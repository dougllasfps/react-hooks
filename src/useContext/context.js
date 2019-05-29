import React, { createContext, useState } from 'react'

export const Context = createContext()

export default ({children}) => {

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    return(
        <Context.Provider value={{
            count, increment, decrement
        }}>
            {children}
        </Context.Provider>
    )
}