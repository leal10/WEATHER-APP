import React, { Component } from 'react';
import Weather from './components/weather.jsx'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: 'it works'
    };
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleCountryChange = this.handleCountryChange.bind(this);
  }

  //event handler to change the state when typed
  handleStateChange(event) {
    event.preventDefault();
    this.setState({state: event.target.value});
  }

  //event handler to change the country when typed
  handleCountryChange(event) {
    event.preventDefault();
    this.setState({country: event.target.value});
  }


  render() {
    return <div>
      <Weather/>
      <input onChange={this.handleStateChange} placeholder="state" type="text"></input>
      <input onChange={this.handleCountryChange} placeholder="country"></input>
      <input type="submit"></input>
    </div>;
  }
}

export default App;
