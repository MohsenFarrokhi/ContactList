import './App.css'
import React from "react";

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
            <hr style={{borderColor: "#B6DCFE", marginLeft: 70, marginRight: 70}}/>
            <div className="titles">
                <span className="titles-container">
                    <img src="../public/icons8-name-40.png" alt="name-icon"/>Name
                    </span>
                <span className="titles-container">
                    <img src="../public/icons8-phone-40.png" alt="phone-icon"/>Phone
                </span>
                <span className="titles-container">
                    <img src="../public/icons8-email-40.png" alt="email-icon"/>Email
                </span>
            </div>
            <hr style={{borderColor: "#B6DCFE", marginLeft: 70, marginRight: 70}}/>
        </div>
    )
}

export default App
