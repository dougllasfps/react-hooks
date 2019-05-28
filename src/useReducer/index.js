import React, { useReducer } from 'react'
import { reducer } from './reducer' 

function Reducer(){

    const [ state , dispatch ] = useReducer( reducer , {count: 0} );

    return (
        <div>
            <h3>Main</h3>
            <span>{`Count: ${state.count}`}</span>
            <br />
            <button onClick={e => dispatch({type: 'increment'})}>+</button>
            <button onClick={e => dispatch({type: 'decrement'})}>-</button>
        </div>
    )
}

export default Reducer