import React from 'react'
import Modelo2 from './modelos/Modelo2/Modelo2'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

import './App.css'

function App() {
  return (
    <div className="app-container">
      <Modelo2 />
      <Analytics />
      <SpeedInsights />
    </div>
  )
}

export default App
