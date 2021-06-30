import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Daily = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <Paper elevation={3}>{props.forecast[0].weather[0].description}{<img src={`http://openweathermap.org/img/wn/${props.forecast[0].weather[0].icon}@2x.png`} alt={''}></img>}{Math.round(props.forecast[0].temp.max)}{'\u00b0'} {Math.round(props.forecast[0].temp.min)}{'\u00b0'}</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper elevation={3}>{props.forecast[1].weather[0].description}{<img src={`http://openweathermap.org/img/wn/${props.forecast[1].weather[0].icon}@2x.png`} alt={''}></img>}{Math.round(props.forecast[1].temp.max)}{'\u00b0'} {Math.round(props.forecast[1].temp.min)}{'\u00b0'}</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper elevation={3}>{props.forecast[2].weather[0].description}{<img src={`http://openweathermap.org/img/wn/${props.forecast[2].weather[0].icon}@2x.png`} alt={''}></img>}{Math.round(props.forecast[2].temp.max)}{'\u00b0'} {Math.round(props.forecast[2].temp.min)}{'\u00b0'}</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper elevation={3}>{props.forecast[3].weather[0].description}{<img src={`http://openweathermap.org/img/wn/${props.forecast[3].weather[0].icon}@2x.png`} alt={''}></img>}{Math.round(props.forecast[3].temp.max)}{'\u00b0'} {Math.round(props.forecast[3].temp.min)}{'\u00b0'}</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper elevation={3}>{props.forecast[4].weather[0].description}{<img src={`http://openweathermap.org/img/wn/${props.forecast[4].weather[0].icon}@2x.png`} alt={''}></img>}{Math.round(props.forecast[4].temp.max)}{'\u00b0'} {Math.round(props.forecast[4].temp.min)}{'\u00b0'}</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper elevation={3}>{props.forecast[5].weather[0].description}{<img src={`http://openweathermap.org/img/wn/${props.forecast[5].weather[0].icon}@2x.png`} alt={''}></img>}{Math.round(props.forecast[5].temp.max)}{'\u00b0'} {Math.round(props.forecast[5].temp.min)}{'\u00b0'}</Paper>
        </Grid>
      </Grid>
    </div>
  )
};

export default Daily;



 {/* {here would be the individual days info} */}
      {/* <h2>{Math.round(props.high)}{'\u00b0'}</h2>
      <h2>{Math.round(props.low)}{'\u00b0'}</h2>
      <h2>{<img src={daily_url}></img>}</h2> */}

  // const classes = useStyles();
  // const daily_url = `http://openweathermap.org/img/wn/${props.icon}@2x.png`;
  // console.log("HAHAHAH", props)
  // return (
  //   <div className={classes.root}>
  //     <Grid container spacing={3}>
  //       <Grid item xs={12}>
  //         <Paper elevation={3}>{<img src={daily_url} alt={''}></img>}{Math.round(props.high)}{'\u00b0'} {Math.round(props.low)}{'\u00b0'}</Paper>
  //       </Grid>
  //     </Grid>
  //   </div>
  // )