export function increment(dispatch){
    return dispatch({
        type: 'increment'
    })
}

export function decrement(dispatch){
    return dispatch({
        type: 'decrement'
    })
}