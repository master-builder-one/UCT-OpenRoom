import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createRoot } from 'react-dom/client'
import './css/App.css'
import './css/index.css'
import VenueTable from './components/VenueTable'
import raw from './data/heading.txt'
import logo from './assets/uctlogo_white.png'

const fileData = await fetch(raw)
  .then(r => r.text())
  .then(text =>  text);

function App() {
  let par = document.getElementById("heading-words");
  const domNode = document.getElementById('root');
  return (
    <>
      <div class="heading" id ="heading">
        <input type="image" src={logo} alt="" />
        <div class="heading-words">
          <h1>UCT Schedule</h1>
          <h3>{fileData}</h3>
        </div>
      </div>
      <div className="table-container">
        
      < VenueTable />
      </div>        
    </>
  )
}

export default App
