import React, { useState } from 'react'
import Modelo1 from './modelos/Modelo1/Modelo1'
import Modelo2 from './modelos/Modelo2/Modelo2'
import Modelo3 from './modelos/Modelo3/Modelo3'
import Modelo4 from './modelos/Modelo4/Modelo4'
import './App.css'

function App() {
  const [modeloAtual, setModeloAtual] = useState(1)

  return (
    <div className="app-container">
      <div className="model-selector">
        <button 
          className={modeloAtual === 1 ? 'active' : ''} 
          onClick={() => setModeloAtual(1)}
        >
          Modelo 1
        </button>
        <button 
          className={modeloAtual === 2 ? 'active' : ''} 
          onClick={() => setModeloAtual(2)}
        >
          Modelo 2
        </button>
        <button 
          className={modeloAtual === 3 ? 'active' : ''} 
          onClick={() => setModeloAtual(3)}
        >
          Modelo 3
        </button>
        <button 
          className={modeloAtual === 4 ? 'active' : ''} 
          onClick={() => setModeloAtual(4)}
        >
          Modelo 4
        </button>
      </div>
      
      {modeloAtual === 1 && <Modelo1 />}
      {modeloAtual === 2 && <Modelo2 />}
      {modeloAtual === 3 && <Modelo3 />}
      {modeloAtual === 4 && <Modelo4 />}
    </div>
  )
}

export default App


