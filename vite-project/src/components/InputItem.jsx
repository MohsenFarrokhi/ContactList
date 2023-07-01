import React from "react";

const InputItem = ({name, id, number, email, searchTerm}) => {
    const index = name.indexOf(searchTerm) || number.indexOf(searchTerm) || email.indexOf(searchTerm);

    return (
        <div className="list-container" key={id}>
            <div className="list-item">
                {index === -1 ? (
                    <p>{name}</p>
                ) : (
                    <p>
                        <span>
                            {name.slice(0, index)}
                        </span>
                        <span
                            style={{backgroundColor: "yellow"}}>
                            {name.slice(index, index + searchTerm.length)}
                        </span>
                        <span>
                            {name.slice(index + searchTerm.length)}
                        </span>
                    </p>
                )}
            </div>
            <div className="list-item">
                {index === -1 ? (
                        <p>{number}</p>
                    ) : (
                        <p>
                            <span>
                                {number.slice(0, index)}
                            </span>
                            <span
                                style={{backgroundColor: "yellow"}}>{number.slice(index, index + searchTerm.length)}</span>
                            <span>
                                {number.slice(index + searchTerm.length)}
                            </span>
                        </p>
                    )}
            </div>
            <div className="list-item">
                {index === -1 ? (
                    <p>{email}</p>
                ) : (
                    <p>
                        <span>
                            {email.slice(0, index)}
                        </span>
                        <span
                            style={{backgroundColor: "yellow"}}>
                            {email.slice(index, index + searchTerm.length)}
                        </span>
                        <span>
                            {email.slice(index + searchTerm.length)}
                        </span>
                    </p>
                )}
            </div>
        </div>
    )
}
export default InputItem;