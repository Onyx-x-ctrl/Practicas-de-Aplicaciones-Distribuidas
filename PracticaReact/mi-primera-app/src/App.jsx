import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Saludo from './Saludo'

function App() {
  const [contador, setContador] = useState(0)

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Mi primera app en React</h1>

      <Saludo nombre="Marco Arch" />

      <hr />

      <h2>Contador</h2>
      <p>Has hecho clic {contador} veces</p>
      <button onClick={() => setContador(contador + 1)}>
        Sumar 1
      </button>
    </div>
  )
}

export default App

