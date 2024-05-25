import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createRoot } from 'react-dom/client'
import './css/App.css'
import './css/index.css'
//import VenueTable from './components/VenueTable'  
import StickyTable from './components/StickyTable'
import VenueTable from './components/VenueTable'
import VenueSchedule from './components/VenueSchedule'
import raw from './data/heading.txt'

const fileData = await fetch(raw)
  .then(r => r.text())
  .then(text =>  text);

function App() {
  let sb = "";
  let par = document.getElementById("heading-words");
  const domNode = document.getElementById('root');
  return (
    <>
      <div class="heading" id ="heading">
        <input type="image" src="./src/assets/uctlogo_white.png" alt="" />
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
