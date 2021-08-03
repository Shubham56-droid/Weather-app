import React from 'react'
import "./App.css";
import "weather-icons-master/css/weather-icons.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { Weather } from "./app-component/Weather";
import { Form } from "./app-component/Form";


const API_key = "19281a26448be18411057a10467dd830";

class App extends React.Component
{
  
  constructor()
  {
    super();
    this.state = {
      city:undefined,
      country:undefined,
      icon:undefined,
      main:undefined,
      celsius: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description:"",
      preassure: undefined,
      humidity: undefined,
      windspeed: undefined,
      error: false,
      error2:false
    };
   

    this.weatherIcon = {
      Thunderstorm:"wi-thunderstorm",
      Drizzle:"wi-sleet",
      Rain:"wi-storm-showers",
      Snow:"wi-snow",
      Atmosphere:"wi-fog",
      Clear:"wi-day-sunny",
      Clouds:"wi-day-fog"

    }

  };


  calCelsius(temp)
  {
    let cell = Math.floor(temp-273.15);
    return cell;
  }

  get_WeatherIcon(icons,rangeid){
      // eslint-disable-next-line default-case
      switch(true)
      {
        case rangeid>=200 && rangeid<= 232:
          this.setState({icon:this.weatherIcon.Thunderstorm});
          break;
        case rangeid>=300 && rangeid<= 321:
          this.setState({icon:this.weatherIcon.Drizzle});
          break;
        case rangeid>=500 && rangeid<=531:
          this.setState({icon:this.weatherIcon.Rain});
          break;    
        case rangeid>=600 && rangeid<=622:
          this.setState({icon:this.weatherIcon.Snow});
          break;
        case rangeid>=701 && rangeid<=781:
          this.setState({icon:this.weatherIcon.Atmosphere});
          break;


        case rangeid===800:
          this.setState({icon:this.weatherIcon.Clear});
          break;

        case rangeid>=801 && rangeid<=804:
          this.setState({icon:this.weatherIcon.Clouds});
          break;

        default:
          this.setState({icon:this.weatherIcon.Clouds});
      }
  }

  getWeather = async(e)=>{

    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

   if(city && country)
   {
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`);
    const response  =  await api_call.json();
    console.log(response);
    
    
    this.setState({
      city:response.name,
      country: response.sys.country,
      celsius: this.calCelsius(response.main.temp),
      temp_max: this.calCelsius(response.main.temp_max),
      temp_min: this.calCelsius(response.main.temp_min),
      description: response.weather[0].description,
      pressure: response.main.pressure,
      humidity: response.main.humidity,
      windspeed: response.wind.speed

    });

    this.get_WeatherIcon(this.weatherIcon, response.weather[0].id)
   }
   else if(city===country)
   {
     this.setState({error2:true})
   }
   else
   {
     this.setState({error:true})
   }
  };
  render()
  {
    return(
      <>
      <div className="leftcontainer">
      <Form loadWeather={this.getWeather} error={this.state.error}  error2={this.state.error2}/>
      </div>
      <div className="App">
      <Weather 
      city={this.state.city}
      country={this.state.country}
      temp_celsius={this.state.celsius}
      temp_max = {this.state.temp_max}
      temp_min = {this.state.temp_min}
      description={this.state.description}
      weatherIcon={this.state.icon}
      pressure={this.state.pressure}
      humidity={this.state.humidity}
      windspeed={this.state.windspeed}
      />
      </div>
      </>
    );
  };
}

export default App;

