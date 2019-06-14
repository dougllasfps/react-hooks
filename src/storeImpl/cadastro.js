import React, {useContext, useState, useEffect} from 'react'
import { StoreContext } from './index';

export function Cadastro(){

    const { fruta : {id}, frutas, dispatch } = useContext(StoreContext)
    const [nome, setNome] = useState('');

    function salvar(){
        dispatch({
            type: 'save',
            payload: {
                id,
                nome 
            }
        })
    }

    function editar(fruta){
        dispatch({
            type: 'prepareEdit',
            payload: fruta
        })
    }

    return (
        <>
            <h3>{ id ? 'Atualizando' : 'Cadastrando'}</h3><br/>
            <label>Id</label><br />
            <input type="text" value={id} disabled={true} /><br />
            <label>Nome</label><br />
            <input type="text" value={nome} onChange={ e => setNome(e.target.value)} /><br />
            <button onClick={salvar}>{ id ? 'Atualizar' : 'Salvar'}</button><br /><br />
            <ul>
                {
                    frutas.map( f => <li key={f.id}>id: {f.id} nome: {f.nome} <a href="#" onClick={e => editar(f)}>editar</a></li>)
                }
            </ul>
        </>
    )
}