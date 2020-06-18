import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

import APIURL from '../../../helpers/environment';  

const Signup = (props) => {
    console.log(props)
return(
        <div>
            <label htmlFor="firstName">First Name:</label>
                <br/>
                <input type="text" id="firstName" value={props.firstName} onChange={(e) => props.setFirstName(e.target.value)} />
                <br/>
                <label htmlFor="lastName">Last Name:</label>
                <br/>
                <input type="text" id="lastName" value={props.lastName} onChange={(e) => props.setLastName(e.target.value)}/>
                <br/>
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

export default Signup;