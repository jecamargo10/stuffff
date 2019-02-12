import React, { Component } from 'react';
import './App.css';
import UserForm from './components/UserForm';

class App extends Component {

  // Main Render
  render() {

    // Main Return
    return (
      
      <div className="App">
        <UserForm />          
      </div>
    );
  }
}

export default App;
