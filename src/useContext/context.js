import { createContext } from 'react'

export const Context = createContext({
    counter: 0,

    increment: () => {
        counter = this.counter +1
    },
    
    decrement: () => {
        counter = this.counter - 1
    }
})
