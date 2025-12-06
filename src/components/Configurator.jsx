import React, { useState } from 'react'
import Canvas from './Canvas'
import ConfigurationPanel from './ConfigurationPanel'
import './Configurator.css'

function Configurator() {
  // Shared state that both Canvas and ConfigurationPanel can access
  // Set default colors to match the model's default appearance
  const [configState, setConfigState] = useState({
    activeTab: 'Adornment',
    activeFeature: 'Gems',
    activeCategory: 'Semi-Precious', // Default to Semi-Precious for beautiful initial display
    selectedGridItem: 0, // Agate is at index 0 in Semi-Precious category - shows active border
    selectedColorName: 'Red', // Default color for Agate gem - kept for active border when colors are shown
    sliderValue: 50,
    selectedGem: { category: 'Semi-Precious', itemIndex: 0, gemName: null }, // gemName is null initially to show gems grid, but itemIndex keeps active border
    selectedMaterial: null,
    showColorPicker: false, // Don't show color picker initially - show gems grid
  })

  // Handler to update config state from ConfigurationPanel
  const updateConfigState = (updates) => {
    setConfigState(prev => ({ ...prev, ...updates }))
  }

  React.useEffect(() => {
    console.log('Configurator mounted')
  }, [])

  return (
    <div className="configurator">
      <Canvas configState={configState} />
      <ConfigurationPanel 
        configState={configState} 
        updateConfigState={updateConfigState}
      />
    </div>
  )
}

export default Configurator


