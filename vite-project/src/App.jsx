import './App.css'
import React, {useState} from "react";

function App() {
    const [names, setNames] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [numbers, setNumbers] = useState([]);
    const [emails, setEmails] = useState([]);
    // const [searchNumbers, setSearchNumbers] = useState('');
    // const [searchEmails, setSearchEmails] = useState('');
    const emailChangeHandler = (e) => {
        setEmails(e.target.value);
        console.log(e.target.value)
    }

    const numberChangeHandler = (e) => {
        setNumbers(e.target.value);
    }
    const searchHandler = (e) => {
        setSearchTerm(e.target.value);
        // setSearchNumbers(e.target.value);
        // setSearchEmails(e.target.value);
    }
    const nameChangeHandler = (e) => {
        setNames(e.target.value);
        console.log(e.target.value);
    }
    const submitFormHandler = (e) => {
        e.preventDefault();
        if (names.trim() && numbers.trim() && emails.trim()) {
            setNames([...names, {id: names.length + 1, name: names}]);
            setNumbers([...numbers, {id: numbers.length + 1, number: numbers}]);
            setEmails([...emails, {id: emails.length + 1, email: emails}])
            setNames([]);
            setNumbers([]);
            setEmails([]);
        } else {
            alert("Please type something");
        }
    }

    return (
        <div>
            <h1 className="header">Contact List</h1>
            <form className="input search" onSubmit={submitFormHandler}>
                <input className="search-input" placeholder='Search...' value={searchTerm} onChange={searchHandler}/>
                <input id="input-container" placeholder="Name" value={names} onChange={nameChangeHandler}/>
                <input id="input-container" placeholder="Phone" value={numbers} onChange={numberChangeHandler}/>
                <input id="input-container" placeholder="Email" value={emails} onChange={emailChangeHandler}/>
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
                    .map(({id, name}) => {return(<li key={id}>{name}</li>)})}
            </ul>
            <ul>
                {numbers
                    .filter(({number}) => number.includes(searchNumbers))
                    .map(({id, number}) => <li key={id}>{number}</li>)
                }
            </ul>
            <ul>
                {emails
                    .filter(({email}) => email.includes(searchEmails))
                    .map(({id, email}) => <li key={id}>{email}</li>)
                }
            </ul>
        </div>
    )
}

export default App;
