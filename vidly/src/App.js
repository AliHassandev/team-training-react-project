import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {ToastContainer} from "react-toastify";
import dwtDecode from 'jwt-decode';
import logo from './logo.svg';
import Movies from './components/movies';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import NavBar from './components/navBar';
import MovieForm from './components/movieForm';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { render } from '@testing-library/react';
import JwtDecode from 'jwt-decode';

  class App extends Component {

  state = {};

  componentDidMount() {
    //getting the current user info from jwt using jwt-decode library
    try {
      const jwt = localStorage.getItem("token");
      const user = JwtDecode(jwt);
      this.setState( { user } );        
    } catch (ex) { }
  }

  render() {
    return (
      <React.Fragment>
      <ToastContainer />
      
      <NavBar user={this.state.user} />
      <main id="root" role="main" className="container">
        <Switch>
          <Route path="/register" component={RegisterForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="movies" />
          <Redirect to="not-found" />
        </Switch>
        <div className="starter-template">
          {/* <Movies /> */}
        </div>
  
      </main>
      </React.Fragment>
        );
  }

}

export default App;
