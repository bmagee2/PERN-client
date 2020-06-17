import React, {useState} from 'react';
import APIURL from '../../../helpers/environment';  

const Signup = (props) => {

    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        
        fetch(`${APIURL}/user/signup`, {
            method: 'POST',
            body: JSON.stringify({user: {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            }}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken)
        })
    }


return(
        <div>
            <Signup />
        </div>
    )
}

export default Signup;