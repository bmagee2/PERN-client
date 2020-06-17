import React, {useState} from 'react';
import APIURL from '../../../helpers/environment';      // import environment.js

const Login = (props) => {

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/user/login`, {
            method: 'POST',
            body: JSON.stringify({user: {
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
            console.log(data);
            props.updateToken(data.sessionToken)
        })
    }

    return(
        <div>
            <Login />
        </div>
    )
}

    export default Login;
