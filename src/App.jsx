import './css/App.css'
import './css/index.css'
import VenueTable from './components/VenueTable'
import raw from './data/heading.txt'
import logo from './assets/uct_logo.png'

const fileData = await fetch(raw)
  .then(r => r.text())
  .then(text =>  text);

function App() {
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
