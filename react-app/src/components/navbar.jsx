import React, { Component } from 'react';


//Stateless Functional Components 

const NavBar = ({totalCounters}) => {
    return ( 
        <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
            <span className="badge badge-pill badge-secondary">{totalCounters}</span>
    </nav>
 );
}
 
export default NavBar;