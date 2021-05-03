import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: 'it works'
    };
  }
  render() {
    return <div>
      <h2>
        Weather App
    </h2>
    </div>;
  }
}

export default App;
