import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Container, Row, Col} from 'reactstrap';

import APIURL from '../../helpers/environment';

import Sitebar from './Sitebar/Sitebar';
import MyMonologues from '../MonoLog/Monologues/MyMonologues/MyMonologues';
import EditMonologue from './Monologues/EditMonologue/EditMonologue';

const MonoLog = (props) => {

    const [monologues, setMonologues] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [monologueToUpdate, setMonologueToUpdate] = useState({});
    
    // GET
    const fetchMonologues = () => {
      //'http://localhost:4000/monologue/get'
      //fetch(`${APIURL}/monologue/get`
      fetch(`${APIURL}/monologue/get`, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
            .then((res) => res.json())
            .then((logData) => {
                console.log(logData.monologues)
                setMonologues(logData.monologues)
        })
    }

  const editUpdateMonologue = (monologue) => {
      setMonologueToUpdate(monologue);
      console.log(monologue);
  }

  const updateOn = () => {
      setUpdateActive(true);
  }

  const updateOff = () => {
      setUpdateActive(false);
  }


    useEffect(() => {
      fetchMonologues();
    }, [])
   

      return(
          <div>
              <h1>the mono-log</h1>
              <Router>
                <Sitebar clearToken = {props.clearToken} token={props.token} fetchMonologues={fetchMonologues}/>
                {/* <Sitebar clickLogout={clearToken}/> */}
            <Container>
              <Row>
                  <Col md="12">
                      <MyMonologues monologues={monologues} editUpdateMonologue={editUpdateMonologue} updateOn={updateOn} fetchMonologues={fetchMonologues} token={props.token} />
                      
                  </Col>
                  {updateActive ? <EditMonologue monologueToUpdate={monologueToUpdate} updateOff={updateOff} token={props.token} fetchMonologues={fetchMonologues} /> : <></> } 
              </Row>
            </Container>
            </Router>
          </div>
      )
  }

  export default MonoLog;