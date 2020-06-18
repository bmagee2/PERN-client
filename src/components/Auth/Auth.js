// IMPORTS
import React, {useState} from 'react';
import {Container, Row, Col, Form} from 'reactstrap';
import APIURL from '../../helpers/environment';
import './Auth.css';

import Login from './Login/Login';
import Signup from './Signup/Signup';


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
        ) : <Login />  


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
        console.log(bodyObj);
        
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
        <Container>
            <Row>
                <Col md="6">
                <h1>The Mono-Log</h1>
                <p>store your monologues</p>

                </Col>
                <Col md="6">  
                    <Form onSubmit={handleSubmit}>
                        <h1>{title()}</h1>
                        {signupFields()} 
                        <button type="submit">Submit Information</button>
                        <button onClick={loginToggle}>Login/Signup</button>
                    </Form>       
                </Col>
            </Row>
        </Container>
    )
}

export default Auth;