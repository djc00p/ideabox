import React, { Component } from 'react';
import Ideas from './Ideas';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: []
    }
  }
  
  render() {
    return (
      <main className='App'>
        <h1>IdeaBox</h1>
        <p>Hi!</p>
      </main>
    )
  }
}

export default App;
