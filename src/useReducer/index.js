import React from 'react'
import useStore from './reducer' 

function Reducer(){
    const [ state , dispatch ] = useStore();

    const increment = () => {
        dispatch({ type: 'increment' })
    }

    function decrement () {
        dispatch({ type: 'decrement' })
    }

    return (
        <div>
            <h3>Contador</h3>
            <span>{`Count: ${state.count}`}</span>
            <br />
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default Reducer