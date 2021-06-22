import React from 'react';
import Forecast from './Forecast';

const Daily = (props) => {
  const daily_url = `http://openweathermap.org/img/wn/${props.icon}@2x.png`;
  return (
    <div>
      {/* {here would be the individual days info} */}
      <h2>{Math.round(props.high)}{'\u00b0'}</h2>
      <h2>{Math.round(props.low)}{'\u00b0'}</h2>
      <h2>{<img src={daily_url}></img>}</h2>
    </div>
  )
};

export default Daily;