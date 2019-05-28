import React, { useState } from 'react';
import '../custom.css'

export default () => {

  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [mostrarDados, setMostrarDados] = useState(false)

  function isIdadeValid() {
    return !isNaN(idade)
  }

  function isNomeValid() {
    if (!nome) {
      return true;
    }
    return nome.length > 2;
  }

  function isFormValid() {
    return isIdadeValid() && isNomeValid()
  }

  function onSubmit(e) {
    e.preventDefault();
    setMostrarDados(true)
  }

  function msgErro(render, message) {
    return render && <span className="msg-erro">{message}</span>
  }

  return (
    <form onSubmit={e => onSubmit(e)}>
      <input type="text"
        placeholder="nome"
        onChange={e => setNome(e.target.value)}
        value={nome} />
      {msgErro(!isNomeValid(), 'Nome inválido')}
      <br /><br />
      <input type="text"
        placeholder="idade"
        onChange={e => setIdade(e.target.value)}
        value={idade} />
      {msgErro(!isIdadeValid(), 'Idade inválida')}
      <br /><br />

      <button disabled={!isFormValid()} type="submit">Enviar</button>
      <br /><br />
      {mostrarDados && <span>{`Nome: ${nome}, Idade: ${idade}`}</span>}
    </form>
  )
}
