import React from 'react'; 
import {
    Route,
    Link,
    Switch
  } from 'react-router-dom';

import AddMonologue from '../AddMonologue/AddMonologue';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button
  } from 'reactstrap';
  


const Sitebar = (props) => {
    return(
        <div>
            <nav>
                <h1>sitebar</h1>
                {/* <MyMonologues /> */}
                {/* <AddMonologue /> */}
            </nav>
        </div>
    );
};

export default Sitebar;