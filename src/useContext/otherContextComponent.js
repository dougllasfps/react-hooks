import React, {useContext} from 'react'
import  {Context} from './context'

function OtherContextComponent(){    
    const { count, increment } = useContext(Context)

    return (
        <div>
            Context value: {count} <br />
            <button onClick={increment}>+</button>
        </div>
    )
}

export default OtherContextComponent