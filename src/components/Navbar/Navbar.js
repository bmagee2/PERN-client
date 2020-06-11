import React from 'react';
import './Navbar.css';
import './Auth/Auth';


const Navbar = (props) => {
    return(
        <div>
            <nav>
                <Auth />
            </nav>
        </div>
    );
};

export default Navbar;