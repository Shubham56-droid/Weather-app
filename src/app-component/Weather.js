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
      <span className="py-4 minmax">{min}&deg; </span>
      <span className="py-4 minmax"> {max}&deg;</span>
    </h3>
  );
}



export const Weather = () => {
  // const classes = useStyles();
  // in  order  to use  css  we  have  to put  className={classes.component} and same  for  other.

  return (
    <div className="component">
      <div className="blur-back">
        <div className="container">
          <div className="rightcontainer">

            <div className="box">
            <h1 className="head-name">London</h1>
            <h5 className="py-4">
              <i class="wi wi-day-cloudy display-1"></i>
            </h5>
            <h1 className="py-2 temp-main">25&deg;</h1>
             {/* show  min  max  temprature */}
             {minmaxTemp(24,19)}
            
            <h4 className="py-2 desc">Show Rain</h4>
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
};


