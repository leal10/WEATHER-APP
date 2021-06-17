import React, { Component } from 'react';
import Weather from './components/weather.jsx';
import axios from 'axios';
import './App.css';
import { api_key } from './config.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: '',
      info: ''
    };
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //axios request for the information that we need


  //event handler to change the state when typed
  handleStateChange(event) {
    event.preventDefault();
    this.setState({ city: event.target.value });
  }

  //event handler to submit the inputs
  handleSubmit(event) {
    event.preventDefault();
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=imperial&appid=${api_key}`)
      .then(results => {
        console.log("this is the results", results.data)
        this.setState({
          info: results.data.weather[0],
          temp: results.data.main,
          feels_like: results.data.main.feels_like,
          ciudad_name: results.data.name
        })
      })
      .catch(error => {
        console.log("this is the error", error)
      });
  }

  //trying to display the icons into the page


  render() {
    const url = `http://openweathermap.org/img/wn/${this.state.info.icon}@2x.png`;

    return <div className="Header">
      <Weather />
      <input onChange={this.handleStateChange} placeholder="city" type="text"></input>
      <input onClick={this.handleSubmit} type="submit"></input>
      <div>
        {this.state.ciudad_name === '' ? '' : <h2>{this.state.ciudad_name}</h2>}
      </div>
      <div>
        {this.state.temp === '' ? '' : <h2>{this.state.info.description}</h2>}
      </div>
      <div>
      {this.state.temp === '' ? '' : <img src={url}></img>}
      </div>
      <div>
        {this.state.temp === '' ? '' : <h2>{Math.round(this.state.temp.temp)}{'\u00b0'}</h2>}
      </div>
      <div>
        {this.state.temp === '' ? '' : <h2>H: {Math.round(this.state.temp.temp_max)}{'\u00b0'}  L: {Math.round(this.state.temp.temp_min)}{'\u00b0'}</h2>}
      </div>
    </div>;
  }
}

export default App;
