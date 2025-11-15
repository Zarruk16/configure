import React from 'react'
import Canvas from './Canvas'
import ConfigurationPanel from './ConfigurationPanel'
import './Configurator.css'

function Configurator() {
  return (
    <div className="configurator">
      <Canvas />
      <ConfigurationPanel />
    </div>
  )
}

export default Configurator


