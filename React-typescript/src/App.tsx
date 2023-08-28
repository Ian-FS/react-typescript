import React from 'react'
import Button from './Button'
import { Input } from './Input'

function App() {
  const [total, setTotal] = React.useState(0)
  
  function incrementar() {
    setTotal((total) => total +1)
  }
  function resetar() {
    setTotal(0)
  }

  return (
    <div>
      <p>Total: {total}</p>
      <Button 
        tamanho="1.5rem"
        onClick={incrementar}
        children="Incrementar"
      />
      <Button 
        tamanho="1.5rem"
        onClick={resetar}
        children="Resetar"
      />
      <Input
        id='nome'
        tamanho='1.5rem'
        label='Nome'
      /> 
      <Input
        id='email'
        tamanho='1.5rem'
        label='Email'
        type='email'
      />
      <Input
        id='inicio'
        tamanho='1.5rem'
        label='Inicio de viagem'
        type='date'
      />
      <Input
        id='horario'
        tamanho='1.5rem'
        label='Horário'
        type='time'
      />      
    </div>
  ) 
    
}

export default App
