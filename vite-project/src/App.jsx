import './App.css'
import React, {useState} from "react";
import Form from "./components/Form.jsx";
import InputList from "./components/InputList.jsx";

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
            <Form
                submitFormHandler={submitFormHandler}
                nameChangeHandler={nameChangeHandler}
                searchHandler={searchHandler}
                numberChangeHandler={numberChangeHandler}
                emailChangeHandler={emailChangeHandler}
                searchTerm={searchTerm}
                names={names}
                numbers={numbers}
                emails={emails}
            />
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
            <hr style={{borderColor: "#B6DCFE", marginLeft: 70, marginRight: 70, marginBottom: 2}}/>
            <InputList
                searchTerm={searchTerm}
                persons={persons}
            />
        </div>
    )
}

export default App;
