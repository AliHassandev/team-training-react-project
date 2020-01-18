import React, { Component } from 'react';


//Stateless Functional Components
//you can't use the lifecycle hooks with the stateless functional components 

const NavBar = ({totalCounters}) => {
    console.log("NavBar - Rendered");
    return ( 
        <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
            <span className="badge badge-pill badge-secondary">{totalCounters}</span>
    </nav>
 );
}
 
export default NavBar;