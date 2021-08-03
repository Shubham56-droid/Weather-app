import React from "react";

//  way  to use inline  css  into react  file
// import { div, makeStyles } from "@material-ui/core";

// const useStyles = makeStyles({
//     component:{
//         height:`100vh`,
//         display:`flex`,
//         alignItems:`center`,

//     },
//     leftcontainer:{
//         backgroundImage:`url(${wall})`,
//         height:`100%`,
//         width:`500px`,

//     }

// })
//  function  

function minmaxTemp(min,max)
{
  return(
    <h3>
      {min?( <span className="py-4 minmax">{min}&deg; min</span>):null}
      {max?(<span className="py-4 minmax">{max}&deg; max</span>):null}
    </h3>
  );
}



export const Weather = (props) => {
  // const classes = useStyles();
  // in  order  to use  css  we  have  to put  className={classes.component} and same  for  other.

  return (
    <div className="component">
      <div className="blur-back">
        <div className="container">
          <div className="rightcontainer">

            <div className="box">
            <h1 className="head-name py-2">

              {props.city}  {props.country}

            </h1>
            <h5 className="py-4 icons-weath">
              <i class={`wi ${props.weatherIcon} display-1`}></i>
            </h5>
           {props.temp_celsius?( <h1 className="py-2 temp-main">{props.temp_celsius}&deg; Celsius</h1>):null}
             {/* show  min  max  temprature */}
             
             {minmaxTemp(props.temp_min,props.temp_max)}
            
             {props.description?(<h4 className="py-2 desc">{props.description}</h4>):null}
            
            <div className="py-3 box-2">
            {props.pressure?(<h4>Pressure: {props.pressure} hpa</h4>):null}
            {props.humidity?(<h4>Humidity: {props.humidity}%</h4>):null}
            {props.windspeed?(<h4>Wind-speed: {props.windspeed} kmph</h4>):null}
              
            </div>
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  );
};


