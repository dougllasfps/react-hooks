import React , { useReducer, createContext } from 'react'

export const StoreContext = createContext()

const defaultState = {
    id: 0,
    fruta: {},
    frutas: []
}

function reducer( state = defaultState, action){
    switch(action.type){
        case 'new': 
            return {...state, fruta: { nome: '', id: null }}
        case 'busca': 
            return {...state, frutas: action.payload}
        case 'save':
            return {
                    ...state, 
                    id: state.id + 1 , 
                    frutas: [...state.frutas, {...action.payload, id: action.payload.id || state.id + 1 }]
            }
        case 'prepareEdit':
            return {...state, fruta: action.payload}
        default: return state;
    }
}

export function Store({children}){
    const[state, dispatch] = useReducer(reducer, defaultState)

    return(
        <StoreContext.Provider value={{...state, dispatch}}>
            {children}
        </StoreContext.Provider>
    )
}


