import './App.css'
import React, {useState} from "react";

function App() {
    const [value, setValue] = useState('');
    const [names, setNames] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const searchHandler = (e) => {
        setSearchTerm(e.target.value);
    }
    const inputChangeHandler = (e) => {
        setValue(e.target.value);
    }
    const submitFormHandler = (e) => {
        e.preventDefault();
        if (value.trim()) {
            setNames([...names, {id: names.length + 1, name: value}]);
            setValue('');
        } else {
            alert("Please enter a name");
        }
    }

    return (
        <div>
            <h1 className="header">Contact List</h1>
            <form className="search">
                <input className="search-input" placeholder='Search...' value={searchTerm} onChange={searchHandler}/>
            </form>
            <form className="input" onSubmit={submitFormHandler}>
                <input id="input-container" placeholder="Name" value={value} onChange={inputChangeHandler}/>
                <input id="input-container" placeholder="Phone"/>
                <input id="input-container" placeholder="Email"/>
                <button className="button" type='submit'>+Add</button>
            </form>
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
            <ul>
                {names
                    .filter(({name}) => name.includes(searchTerm))
                    .map(({id, name}) => <li key={id}>{name}</li>)}
            </ul>
        </div>
    )
}

export default App
