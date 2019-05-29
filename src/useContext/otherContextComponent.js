import React, {useContext} from 'react'
import  {Context} from './context'

function OtherContextComponent(){    
    const context = useContext(Context)

    return (
        <div>
            Context value: {context.count} <br />
            <button onClick={context.increment}>+</button>
        </div>
    )
}

export default OtherContextComponent