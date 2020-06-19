import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import {
    Route,
    Link,
    Switch
  } from 'react-router-dom';

import MyMonologues from '../Monologues/MyMonologues/MyMonologues';
import AddMonologue from '../Monologues/AddMonologue/AddMonologue';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    // NavItem,
    NavLink,
    // Button
  } from 'reactstrap';

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
    font-family: MOMCAKE-BOLD;
`;

const NavItem = styled.ul`
  marging-left: 5px;
  margin-right: 20px;
`;
 
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
  
//   const clearToken = () => {
//     localStorage.clear();
//     // setSessionToken('');
//   }

const Sitebar = (props) => {
    console.log(props)
    const classes = useStyles();

    return(
        <div>
            <Navbar>
                <Nav className="sitebar">
                    <NavItem>
                        {/* <Button variant="outlined"><Link to="/mymonologues">my monologues</Link></Button> */}
                    </NavItem>
                    <NavItem className="add-button">
                        <Button variant="outlined"><Link to="/addmonologue">Add Monologue</Link></Button>
                    </NavItem>
                    <NavItem>
                        <Button id="logoutNavButton" variant="outlined" onClick={props.clearToken}>Logout</Button>
                    </NavItem>
                </Nav>    
            </Navbar>
            <div className="sitebar-route">
                <Switch>
                    {/* <Route exact path="/mymonologues"><MyMonologues /></Route> */}
                    <Route exact path="/addmonologue"><AddMonologue token={props.token} fetchMonologues={props.fetchMonologues} /></Route>
                </Switch>
            </div>
        </div>
    );
};

export default Sitebar;