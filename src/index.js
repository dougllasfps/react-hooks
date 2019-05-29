import React from 'react';
import ReactDOM from 'react-dom';
import App from './useReducer';
import Other from './useReducer/otherComponent';
import ContextComponent from './useContext';
import OtherContextComponent from './useContext/otherContextComponent';
import Provider from './useContext/context'


ReactDOM.render(
    <>
        <Provider>
            <ContextComponent />
            <OtherContextComponent />
        </Provider>
    </>, 
    document.getElementById('root')
);
