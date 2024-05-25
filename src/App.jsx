import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createRoot } from 'react-dom/client'
import './css/App.css'
import './css/index.css'
<<<<<<< HEAD
=======
import StickyTable from './components/StickyTable'
>>>>>>> 2170c804fc0a6e33e4ad09f57cc328f41836321c
import VenueTable from './components/VenueTable'
import raw from './data/heading.txt'
<<<<<<< HEAD
import image from "./assets/uctlogo_white.png"
=======
import logo from './assets/uctlogo_white.png'
>>>>>>> 2170c804fc0a6e33e4ad09f57cc328f41836321c

const fileData = await fetch(raw)
  .then(r => r.text())
  .then(text =>  text);

function App() {
  let par = document.getElementById("heading-words");
  const domNode = document.getElementById('root');
  return (
    <>
      <div class="heading" id ="heading">
<<<<<<< HEAD
        <input type="image" src={image} alt="" />
=======
        <input type="image" src={logo} alt="" />
>>>>>>> 2170c804fc0a6e33e4ad09f57cc328f41836321c
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
