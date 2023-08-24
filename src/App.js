import React, { useEffect } from 'react';
import './App.css';
import { useState } from 'react';
import Fade from 'react-reveal/Fade';
import axios from 'axios';


function App() {
  const[data,setData]=useState({});
  const[location,setLocation]=useState("");
  const apiKey = 'd31c6f5696a3e1585206d1017162ac83';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
  function search(e){
    if(e.key === 'Enter'){
    axios.get(url).then((response)=>{
      setData(response.data)
      console.log(response.data)
    })
    setLocation('')
  }
}
  return (
    <div className="App">
      <div className='container'>
        
        <div className='search'>
        <center><Fade top><h2>Discover Weather In Your City</h2></Fade></center>
          <input type='text' placeholder='Search City...' value={location} onChange={(e)=>{setLocation(e.target.value)}} onKeyPress={(e)=>search(e)}/>
        </div>
        <div className='top'>
          <div className=''location>
            <p>{data.name}</p>
          </div>
          <div className='temp'>
          {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className='description'>
          {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        {data.name !== undefined  &&
        <div className='bottom'>
          <div className='feels'>
          {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
            <p className='bold'>Feels Like</p>
          </div>
          <div className='humidity'>
          {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
            <p className='bold'>humidity</p>
          </div>
          <div className='wind'>
          {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
            <p className='bold'>Wind Speed</p>
          </div>
        </div>}
      </div>
    
      </div>
  );
}
export default App;
