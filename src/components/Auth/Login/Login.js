import React, {useState} from 'react';
import APIURL from '../../../helpers/environment';      // import environment.js

const Login = (props) => {

    // const[email, setEmail] = useState('');
    // const[password, setPassword] = useState('');


    return(
        <div>
            <label htmlFor="email">Email:</label> 
            <br/>
            <input type="text" id="email" value={props.email} onChange={(e) => props.setEmail(e.target.value)} />
            <br/>
            <label htmlFor="password">Password:</label>
            <br/>
            <input type="password" id="password" value={props.password} onChange={(e) => props.setPassword(e.target.value)} />
            <br/>
        </div>
    )
}

    export default Login;
