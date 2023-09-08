import React, { useState } from  'react';
import FormDetails from './FormDetails';
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confPassword, setConfPassword] = useState("");  
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    
    const createUser = (e) => {
        
        e.preventDefault();

        const newUser = { firstName, lastName, email, password};
        console.log("Welcome", newUser);
    	setFirstName("");
    	setLastName("");
    	setEmail("");
    	setPassword("");
    	setConfPassword("");

        setHasBeenSubmitted( true );
    };

    const formMessage = () => {
        if (hasBeenSubmitted){
            return "Thanks for filling out the User Form.";
        } else {
            return "Welcome, please fill out the User Form";
        }
    }

    const handleFirstName = (e) =>{
        setFirstName(e.target.value)
    }
    const handleLastName = (e) =>{
        setLastName(e.target.value)
    }
    const handleEmail = (e) =>{
        setEmail(e.target.value)
    }
    const handlePassword = (e) =>{
        setPassword(e.target.value)
    }
    const handleConfPassword = (e) =>{
        setConfPassword(e.target.value)
    }
    
    
    return(
        <>
        <h2>{formMessage()}</h2>

        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" 
                value={firstName} 
                onChange={ handleFirstName } />
                {
                    firstName.length < 2?
                    <p style={{ color: "red" }}>First name must be at least 2 characters.</p>:
                    <p></p>
                }
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" 
                value={lastName} 
                onChange={ handleLastName } />
                {
                    lastName.length < 2?
                    <p style={{ color: "red" }}>Last name must be at least 2 characters.</p>:
                    <></>
                }
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" 
                value={email} 
                onChange={ handleEmail } />
                {
                    email.length < 2?
                    <p style={{ color: "red" }}>Email must be at least 2 characters.</p>:
                    <></>
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="password" 
                value={password} 
                onChange={ handlePassword } />
                {
                    password.length < 8?
                    <p style={{ color: "red" }}>Password must be at least 8 characters.</p>:
                    <></>
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" 
                value={confPassword}
                onChange={ handleConfPassword } />
                {
                    handleConfPassword != handlePassword?
                    <p style={{ color: "red" }}>Passwords must match.</p>:
                    <></>
                }
            </div>
            <input type="submit" 
            value="Create User" />
        </form>
        
        < FormDetails firstName={firstName} lastName={lastName} email = {email} password = {password} confPassword ={confPassword}/>
        </>
    );
};
    
export default UserForm;
