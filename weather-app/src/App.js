import React, { Component } from 'react';
import Weather from './components/weather.jsx';
import axios from 'axios';
import './App.css';
import { api_key } from './config.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      temp: '',
      info: ''
    };
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleCountryChange = this.handleCountryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //axios request for the information that we need


  //event handler to change the state when typed
  handleStateChange(event) {
    event.preventDefault();
    this.setState({ city: event.target.value });
  }

  //event handler to change the country when typed
  handleCountryChange(event) {
    event.preventDefault();
    this.setState({ country: event.target.value });
  }


  //event handler to submit the inputs
  handleSubmit(event) {
    event.preventDefault();
    // console.log('api.openweathermap.org/data/2.5/weather?q=Austin&appid=ec28cd50941b65648a3ba3bf1c981500');
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=imperial&appid=${api_key}`)
      .then(results => {
        console.log("this is the results", results.data)
        this.setState({
          info: results.data.weather[0],
          temp: results.data.main,
          feels_like: results.data.main.feels_like
        })
      })
      .catch(error => {
        console.log("this is the error", error)
      });
  }


  render() {
    return <div className="Header">
      <Weather />
      <input onChange={this.handleStateChange} placeholder="city" type="text"></input>
      {/* <input onChange={this.handleCountryChange} placeholder="country"></input> */}
      <input onClick={this.handleSubmit} type="submit"></input>
      <h2>current temp: {this.state.temp.temp} </h2>
      <h2>feels like: {this.state.feels_like} </h2>
      <h2>description: {this.state.info.description} </h2>
      {/* <h1>&deg;F</h1> */}
    </div>;
  }
}

export default App;
