import React from 'react'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./app_component/weather.component";


function App() {
  return (
    // we  have  to wrap it  in opening  closing  tags it  is  important
    <div className="App">
      <Weather/>
    </div>
  );
}
export default App;
