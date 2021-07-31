import React from "react";
import { Box } from "@material-ui/core";
import { Form } from "../components/Form";

//  way  to use inline  css  into react  file
// import { Box, makeStyles } from "@material-ui/core";

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

export const Weather = () => {
  // const classes = useStyles();
  // in  order  to use  css  we  have  to put  className={classes.component} and same  for  other.

  return (
    <Box className="component">
      <div className="blur-back">
        <div className="container">
        <div className="imbg-back"></div>
          <Box className="rightcontainer">
              <Form/>
          </Box>
        </div>
      </div>
    </Box>
  );
};
