// IMPORTS
import React, {useState} from 'react';
import {Container, Row, Col, Form} from 'reactstrap';
import APIURL from '../../helpers/environment';
import './Auth.css';

import Login from './Login/Login';
import Signup from './Signup/Signup';
import MonoLog from '../../assests/monoLog.png';

import styled from 'styled-components'

const Button = styled.button`
    margin-top: 1em;
    border: 2px solid black;
    border-radius: 2px;
    height: 50px;
    width: 200px;
    background-color: rgb(255, 255, 0);
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    margin: 10px;
    font-family: Colombia-Regular;
`;

const Resize = styled.img`
    width: 35vw;
    height: auto;
    display: block;
    margin: auto;
`;


// COMPONENTS
const Auth = (props) => {

    const [firstName, setFirstName] = useState(''); 
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(true);

    
    const title = () => {
        return login ? 'Login' : 'Signup'
    }

     
    const loginToggle = (event) => {
        event.preventDefault();

        setLogin(!login);

        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
    }

    

    const signupFields = () => !login ? 
        (
            <div>
                <Signup setFirstName={setFirstName} setLastName={setLastName} setEmail={setEmail} setPassword={setPassword} firstName={firstName} lastName={lastName} email={email} password={password}/>
            </div>
        ) : <Login setEmail={setEmail} setPassword={setPassword} email={email} password={password}/>  


    //HANDLESUBMIT
    const handleSubmit = (event) => {
        event.preventDefault();
                            //'http://localhost:4000/user/login' 'http://localhost:4000/user/signup'
                            //  `${APIURL}/user/login`      `${APIURL}/user/signup`
        const url = login ? `${APIURL}/user/login` : `${APIURL}/user/signup`;

        const bodyObj = login ? {
            email: email,
            password: password
        } : {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }
        // console.log(bodyObj);

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({user: bodyObj}),
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
            <Row>
                <Col md="6">
                <h1>The Mono-Log</h1>
                <Resize src={MonoLog} />

                </Col>
                <Col md="6">  
                    <Form onSubmit={handleSubmit}>
                        <h1>{title()}</h1>
                        {signupFields()} 
                        <Button type="submit">Submit</Button>
                        <Button onClick={loginToggle}>Login or Signup</Button>
                    </Form>       
                </Col>
            </Row>
        </div>
    )
}

export default Auth;