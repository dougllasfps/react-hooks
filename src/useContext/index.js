import React, {useContext} from 'react'
import  {Context} from './context'

function ContextComponent(){    
    const context = useContext(Context)

    return (
        <div>
            Context value: {context.count} <br />
            <button onClick={context.increment}>+</button>
            <button onClick={context.decrement}>-</button>
        </div>
    )
}

export default ContextComponent