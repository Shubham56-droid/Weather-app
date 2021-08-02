import React from "react";
import { Form } from "./Form";
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
      <span className="py-4 minmax">{min}&deg; min</span>
      <span className="py-4 minmax">{max}&deg; max</span>
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
            <h1 className="head-name">

              {props.city},{props.country}

            </h1>
            <h5 className="py-4">
              <i class={`wi ${props.weatherIcon} display-1`}></i>
            </h5>
            <h1 className="py-2 temp-main">{props.temp_celsius}&deg; Celsius</h1>
             {/* show  min  max  temprature */}
             {minmaxTemp(props.temp_min,props.temp_max)}
            
            <h4 className="py-2 desc">{props.description}</h4>
            </div>
          </div>
          <div className="leftcontainer">
            <Form/>
          </div> 
        </div>
      </div>
    </div>
  );
};


