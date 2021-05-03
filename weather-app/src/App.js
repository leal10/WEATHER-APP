import React, { Component } from 'react';
import Weather from './components/weather.jsx'
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
      <Weather/>
      <input placeholder="state" type="text"></input>
      <input placeholder="country"></input>
      <input type="submit"></input>
    </div>;
  }
}

export default App;
