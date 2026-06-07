import React from 'react'
import Modelo2 from './modelos/Modelo2/Modelo2'
import { Analytics } from "@vercel/analytics/react"

import './App.css'

function App() {
  return (
    <div className="app-container">
      <Modelo2 />
      <Analytics />
    </div>

  )
}

export default App
