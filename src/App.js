import React, { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios'
import Loading from './component/Loading'
import Weather from './component/Weather'
function App() {
  const API_KEY = 'eb1cb1ef69eb5e99b8a96c78101e497e'
  
  const [isLoading, setIsLoading] = useState(true)
  const [value, setValue] = useState([])
  const [coord, setCoord] = useState([])

  useEffect(() => {
    const getData = async () => {
      if(value.lat === undefined  && value.lon === undefined ) {
        navigator.geolocation.getCurrentPosition(geo)
      }
      else {
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${value.lat}&lon=${value.lon}&appid=${API_KEY}`)
        setCoord(res.data)
        
         setTimeout(() => {
            setIsLoading(false)
         }, 2000);
      }    
    }     
    getData()
  }, [value.lat, value.lon])
  
  const geo = (position) => {
    const arr = {
      lat: position.coords.latitude,
      lon: position.coords.longitude
    }
    setValue(arr)
  } 
  
  return (
    <div className="App" >
     {/* <WeatherBox coord={coord}/> */}
       { isLoading ? <Loading /> : <Weather coord={coord}/> }  
    </div>
  );
}

export default App;
