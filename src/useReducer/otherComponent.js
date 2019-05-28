import React, { useReducer } from 'react'
import useStore from './reducer' 

function Other(){
    const [ state , dispatch ] = useStore();

    return (
        <div>
            <h3>Other</h3>
            <span>{`Count: ${state.count}`}</span>
            <br />
            <button onClick={e => dispatch({type: 'increment'})}>+</button>
            <button onClick={e => dispatch({type: 'decrement'})}>-</button>
        </div>
    )
}

export default Other
