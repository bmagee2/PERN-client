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
  

const Sitebar = (props) => {

    const classes = useStyles();

    return(
        <div>
            <Navbar>
                <Nav className="sitebar">
                    <NavItem>
                        <Button variant="outlined"><Link to="/mymonologues"><h4>my monologues</h4></Link></Button>
                    </NavItem>
                    <NavItem>
                        <Button variant="outlined"><Link to="/addmonologue"><h4>add monologue</h4></Link></Button>
                    </NavItem>
                    <NavItem>
                        <Button variant="outlined"><h4>logout</h4></Button>
                    </NavItem>
                </Nav>    
            </Navbar>
            <div className="sitebar-route">
                <Switch>
                    <Route exact path="/mymonologues"><MyMonologues /></Route>
                    <Route exact path="/addmonologue"><AddMonologue /></Route>
                </Switch>
            </div>
        </div>
    );
};

export default Sitebar;