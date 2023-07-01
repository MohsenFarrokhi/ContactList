import './App.css'
import React, {useState} from "react";

function App() {
    const [names, setNames] = useState('');
    const [numbers, setNumbers] = useState('');
    const [emails, setEmails] = useState('');
    const [persons, setPersons] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    // const [searchNumbers, setSearchNumbers] = useState('');
    // const [searchEmails, setSearchEmails] = useState('');
    const emailChangeHandler = (e) => {
        setEmails(e.target.value);
        console.log(e.target.value)
    }

    const numberChangeHandler = (e) => {
        setNumbers(e.target.value);
        console.log(e.target.value)
    }
    const nameChangeHandler = (e) => {
        setNames(e.target.value);
        console.log(e.target.value);
    }
    const searchHandler = (e) => {
        setSearchTerm(e.target.value);
    }
    const submitFormHandler = (e) => {
        e.preventDefault();
        if (names.trim() && numbers.trim() && emails.trim()) {
            setPersons([...persons, {id: persons.length + 1, name: names, number: numbers, email: emails}]);
            setNames('');
            setNumbers('');
            setEmails('');
        } else {
            alert("Please type something");
        }
    }

    return (
        <div className="container">
            <h1 className="header">Contact List</h1>
            <form onSubmit={submitFormHandler}>
                <div className="search">
                    <input className="search-input" placeholder='Search...' value={searchTerm}
                           onChange={searchHandler}/>
                </div>
                <div className="input">
                    <input id="input-container" placeholder="Name" value={names} onChange={nameChangeHandler}/>
                    <input id="input-container" placeholder="Phone" value={numbers} onChange={numberChangeHandler}/>
                    <input id="input-container" placeholder="Email" value={emails} onChange={emailChangeHandler}/>
                    <button className="button" type='submit'>+Add</button>
                </div>
            </form>
            <hr style={{borderColor: "#B6DCFE", marginLeft: 70, marginRight: 70}}/>
            <div className="titles">
                    <span className="titles-container">
                        Name<img src="../public/icons8-name-40.png" alt="name-icon"/>
                    </span>
                <span className="titles-container">
                        Phone<img src="../public/icons8-phone-40.png" alt="phone-icon"/>
                    </span>
                <span className="titles-container">
                        Email<img src="../public/icons8-email-40.png" alt="email-icon"/>
                    </span>
            </div>
            <hr style={{borderColor: "#B6DCFE", marginLeft: 70, marginRight: 70,marginBottom:2}}/>
            <div>
                {persons
                    .filter(
                        ({name, number, email}) =>
                            name.includes(searchTerm) ||
                            number.includes(searchTerm) ||
                            email.includes(searchTerm)
                    )
                    .map(({id, name, number, email}) => (
                        <div className="list-container">
                            <div className="list-item" key={id}>
                                {name}
                            </div>
                                <div className="list-item" key={id}>
                                    {number}
                                </div>
                                <div className="list-item" key={id}>
                                    {email}
                                </div>
                        </div>
                    ))}
                <hr style={{borderColor: "#B6DCFE", marginLeft: 70, marginRight: 70, marginBottom:2}}/>
            </div>
        </div>
    )
}

export default App;
