import SearchBox from './SearchBox.jsx';
import InfoBox from './InfoBox.jsx';
import { useState } from 'react';
export default function WeatherApp(){
    const [weatherInfo ,setWeatherInfo] = useState({
        city : "Delhi",
        feelsLike: 18.66,
        humidity: 63,
        temp: 19.05,
        tempMax: 19.05,
        tempMin: 19.05,
        weather: "smoke"
    });
    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }
    return (
        <div style={{textAlign: "center"}}>
            <h2>Weather app info</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info ={weatherInfo}/>
        </div>
    );
}