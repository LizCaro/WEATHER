import React, { useState } from 'react'
import './Weather.css'
import { FaWind, FaCloudShowersHeavy, FaTemperatureHigh } from "react-icons/fa";

function WeatherBox( { coord } ) {

    let toDay = new Date();
    let date = toDay.getDate() + "-" + ( toDay.getMonth() + 1 ) + "-" + toDay.getFullYear()
    let houre = toDay.getHours() + ":" + toDay.getMinutes();

    const [degrees, setDegrees] = useState({
        dg: Math.round(coord.main.temp - 273.15),
        type: true,
        grade: "°C"
    })

    const dats = {
        name: coord.name,
        description: coord.weather[0].description,
        country: coord.sys.country,
        weather: coord.weather[0].main,
        icon: coord.weather[0].icon,
        wind: coord.wind.speed,
        humidity: coord.main.humidity,
        pressure: coord.main.pressure,    
        cloods: coord.weather[0].main
    }

    const changue = () => {
        const data = degrees.dg
        if(degrees.type) {
            setDegrees({
                dg: Math.round([(data * 9/5) + 32]),
                type: false,
                grade: "°F"
            })
        }
        else {
            setDegrees({
                dg: Math.round(coord.main.temp - 273.15),
                type: true,
                grade: "°C"
            })
        }
    }

    let iconUrl = `https://openweathermap.org/img/wn/${dats.icon}.png`;



    return (
        <div className="body">
            <div className="card"style={{backgroundImage: "url(https://png.pngtree.com/thumb_back/fw800/back_our/20190628/ourmid/pngtree-hand-drawn-cartoon-weather-background-design-image_272674.jpg)"}}>
                <div className="header__box">
                    <h2>{dats.name},<span>{dats.country}</span></h2>
                    <h2>" {dats.description} "</h2>
                </div>
                <div className="Houre">
                <img  src={iconUrl} alt="Weather icon"></img>
                    <span>{degrees.dg} {degrees.grade}</span>
                </div>
                <div className="Cloud"> 
                    <div>
                        <p><FaWind /> {dats.wind} m/s </p>
                        <h5>Wind</h5>
                    </div>        
                    <div>
                        <p><FaCloudShowersHeavy /> {dats.humidity}%</p>
                        <h6>Humidity</h6>
                    </div> 
                    <div>
                        <p><FaTemperatureHigh /> {dats.pressure}</p>
                        <h6>Pressure</h6>
                    </div>    
                </div>
                <div className="button">
                <button onClick={ changue } className="convert__formule">°C / °F</button>
                </div>        
            </div>        
        </div>
        
    )
}

export default WeatherBox

