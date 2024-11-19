import { useState } from "react";
import './Form.css';


function Form () {
const [ firstName, setFirstName] = useState('');
const [ lastName, setLastName] = useState('');

const handleChangeInput = (e) => {
    const {name, value} = e.target;

    return name === 'firstName' ? setFirstName(value): setLastName(value);
};

handleFormSubmit = (e) => {
    e.preventDefault();

    alert(`Hello ${firstName} ${lastName}`);
    setFirstName('');
    setLastName('');
};
    return(
        <>
        <div className="container text-center">
            <h1>Hello ${firstName} {lastName}</h1>
            <form className="form" onSubmit={handleFormSubmit}>
                <input 
                value={firstName}
                name="firstName"
                onChange={handleChangeInput}
                type="text"
                placeholder="First Name"/>
                
            <input 
                value={lastName}
                name="lastName"
                onChange={handleChangeInput}
                placeholder="Last Name"
                type="text" />
                <button type="submit">
                    Submit</button>
                    </form>
                    </div>
                    </>
    );
}

export default Form;