import React from "react";

const Form = ({
                  submitFormHandler,
                  nameChangeHandler,
                  searchHandler,
                  numberChangeHandler,
                  emailChangeHandler,
                  searchTerm,
                  names,
                  numbers,
                  emails
              }) => {
    return (
        <form onSubmit={submitFormHandler}>
            <div className="search">
                <input
                    className="search-input"
                    placeholder='Search...'
                    value={searchTerm}
                    onChange={searchHandler}
                />
            </div>
            <div className="input">
                <input
                    id="input-container"
                    placeholder="Name"
                    value={names}
                    onChange={nameChangeHandler}
                />
                <input
                    id="input-container"
                    placeholder="Phone"
                    value={numbers}
                    onChange={numberChangeHandler}
                />
                <input
                    id="input-container"
                    placeholder="Email"
                    value={emails}
                    onChange={emailChangeHandler}
                />
                <button
                    className="button"
                    type='submit'
                >+Add</button>
            </div>
        </form>
    )
}

export default Form;