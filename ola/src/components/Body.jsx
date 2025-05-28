import { useState } from 'react'
import './Body.css'

function Body() {
  const [cont, setCont] = useState(0)
  const[inputValor,setInputValor] = useState("")
  const[inputN1, setInputN1] = useState('')
  const[inputN2, setInputN2] = useState('')
  function aumentar() {
    setCont(cont + 1)
  }

  function diminuir(){
    if (cont > 0) {
      setCont(cont - 1)
    }
  }

    function alterar(){
      setCont(Number(inputValor))
    }

    function somar(){
      const somar = Number(inputN1) + Number (inputN2)
      setCont((somar))
    }

    function dividir(){
      setCont(Number(inputN1) - Number(inputN2))
    }

    function multiplicacao(){
      setCont(Number(inputN1) * Number(inputN2))
    }

  return (
    <div className='Body'>
      <h2 className='titulo2'>Dinos são legais</h2>
      <div className='cont'>
      <button onClick={diminuir}>-</button>
      <p>Contagem: {cont}</p>
      <button onClick={aumentar}>+</button>
      </div>

      <div className='form'>
        <input type="number"
         value={inputValor}
         onChange={(e) => setInputValor(e.target.value)}
        />
       <button onClick={alterar}>Alterar</button>
      </div>

      <div className='calculadera'>
        <input type="number" 
        value={inputN1}
        onChange={(e) => setInputN1(e.target.value)}
        />
        <button onClick={somar}>+</button>
        <button onClick={dividir}>-</button>
        <button onClick={multiplicacao}>*</button>
        <input type="number" 
         value={inputN2}
         onChange={(e) => setInputN2(e.target.value)}
        />
      </div>

    </div>
  )
}

export default Body