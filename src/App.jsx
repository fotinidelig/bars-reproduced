import { useState } from 'react'
import './App.css'
import BarPlot from './BarPlot'

function App() {

  return (
    <>
      <section className='main-section'>
        <div className='main-container'>
          <svg width="100%" height="3%" >
            <line x1="0" y1="0" x2="100%" y2="0" stroke="red" strokeWidth="1" />
            <rect x={0} y={0} width={70} height={10} fill="red" />
          </svg>
          <h1 fontWeight="bold">Escape artists</h1>
          <p>Number of laboratory-acquired infections, 1970-2021</p>
          <BarPlot height={490} width={1070} />

        </div>
      </section>
    </>
  )
}

export default App
