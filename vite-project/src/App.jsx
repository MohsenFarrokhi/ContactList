import './App.css'

function App() {

  return (
    <div className="container">
        <div className="search">
      <input className="search-input" placeholder='Search...'/>
        </div>
        <div className="input">
            <input id="input-container" placeholder="Name" type="text"/>
            <input id="input-container" placeholder="Phone" type="number"/>
            <input id="input-container" placeholder="Email" type="email"/>
            <button className="button">+Add</button>
        </div>
    </div>
  )
}

export default App
