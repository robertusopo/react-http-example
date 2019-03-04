import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>

        <section className="section">
          <div className="container">
            <UserList/>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
