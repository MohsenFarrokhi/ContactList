import React from "react";
import InputItem from "./InputItem.jsx";

const InputList = ({persons, searchTerm}) => {
    return (
        <div>
            {persons
                .filter(
                    ({name, number, email}) =>
                        name.startsWith(searchTerm) ||
                        number.startsWith(searchTerm) ||
                        email.startsWith(searchTerm)
                )
                .map(({id, name, number, email}) => (
                    <InputItem
                        key={id}
                        id={id}
                        name={name}
                        number={number}
                        email={email}
                        searchTerm={searchTerm}
                    />
                ))}
            <hr style={{borderColor: "#B6DCFE", marginLeft: 70, marginRight: 70, marginBottom: 2}}/>
        </div>
    )
}
export default InputList;