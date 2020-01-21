import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return ( 
        
        <NavLink className="navbar" to="/">
            <i className="fa fa-2x fa-home" aria-hidden="true"></i>
        </NavLink>
     );
}
 
export default Nav;