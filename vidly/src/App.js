import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Movies from './components/movies';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';

function App() {
  return (
    <main id="root" role="main" className="container">
      <Switch>
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
      );
}

export default App;
