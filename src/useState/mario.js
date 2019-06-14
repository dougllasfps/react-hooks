import React, { useState } from 'react'

function Componente({voltar}){

    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')

    return (
        <form>
            <label>Nome</label>
            <input type="text" value={nome} onChange={e => setNome(e.target.value)} />

            <label>Idade</label>
            <input type="text" value={idade} onChange={e => setIdade(e.target.value)} />

            <Button onClick={voltar}>Voltar</Button>
        </form>
    )

}
