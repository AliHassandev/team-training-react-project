import React from 'react';
import logo from './logo.svg';
import './App.css';
import Movies from './components/movies';
function App() {
  return (
    <main id="root" role="main" className="container">

      <div className="starter-template">
        <Movies />
      </div>

    </main>
      );
}

export default App;
