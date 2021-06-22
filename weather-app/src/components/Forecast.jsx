import React from 'react';
import Daily from './Daily.jsx';

const Forecast = (props) => {
  return (
    <div>
      {props.forecast.map((daily, i) => {
        return <Daily key={i} high={daily.temp.max} low={daily.temp.min} icon={daily.weather[0].icon}/>
      })}
    </div>
  );
};

export default Forecast;