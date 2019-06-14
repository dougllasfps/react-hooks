import React from 'react';
import ReactDOM from 'react-dom';
import App from './useReducer';
import Other from './useReducer/otherComponent';
import ContextComponent from './useContext';
import OtherContextComponent from './useContext/otherContextComponent';
import Provider from './useContext/context'
import { Store } from './storeImpl';
import { Cadastro } from './storeImpl/cadastro';


ReactDOM.render(
    <Store>
        <Cadastro />
    </Store>, 
    document.getElementById('root')
);
