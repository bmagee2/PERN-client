import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
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
    NavItem,
    NavLink,
    // Button
  } from 'reactstrap';
 
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
                    <NavItem>
                        <Button variant="outlined"><Link to="/addmonologue">add monologue</Link></Button>
                    </NavItem>
                    <NavItem>
                        <Button variant="outlined" onClick={props.clearToken}>logout</Button>
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