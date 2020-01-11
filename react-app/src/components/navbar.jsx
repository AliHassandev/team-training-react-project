import React, { Component } from 'react';

class NavBar extends Component {
    render() { 
        return ( 
            <nav class="navbar navbar-light bg-light">
                <a class="navbar-brand" href="#">Navbar</a>
        <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>
            </nav>
         );
    }
}
 
export default NavBar;