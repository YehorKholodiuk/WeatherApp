import logo from './logo.svg';
import './App.css';
import sea from './pictures/2.jpg'
import DescriptionWidgets from "./components/DescriptionWidgets";
import {useEffect, useState} from "react";
import {getFormattedWeatherData} from "./WeatherService";

function App() {
    const [city, setCity] = useState('Limassol');
    const [weather, setWeather] = useState(null);
    const [units, setUnits] = useState('metric');

    useEffect(() => {
        const fetchWeatherData = async () => {
            const data = await getFormattedWeatherData(city, units)
            setWeather(data)
        }
        fetchWeatherData()
    }, [units, city])

    const handleUnitsClick = (e)=> {
        const button = e.currentTarget;
        const currentUnit = button.innerText.slice(1);
        //console.log(currentUnit)
        const isCelsius = currentUnit === 'C'
        button.innerText = isCelsius ? '°F':'°C';
        setUnits(isCelsius? 'metric':'imperial')
    }

    const enterKeyPressed = (e) => {
     if (e.keyCode === 13) {
         setCity(e.target.value)
     }
    }
    return (
        <div className="App" style={{backgroundImage: `url(${sea})`}}>
            <h1>My weather app</h1>
            <div className="overlay">

                {weather && (
                    <div className="container">
                        <div className="section section-inputs">


                                <input
                                    type="text"
                                    placeholder="Enter city ..."
                                    name="city"
                                    onKeyDown = {enterKeyPressed}
                                />


                            <button onClick = {(e) => handleUnitsClick(e)}>°F</button>
                        </div>
                        <div className="section section-temperature">
                            <div className="icon">

                                <h2>{`${weather.name}, ${weather.country}`}</h2>
                                <img src={weather.iconURL}
                                alt="weatherIcon"
                                />
                                <h2>{weather.description}</h2>
                            </div>
                            <div className="temperature">

                                <h1> {`${weather.temp.toFixed()}   ${units === 'imperial'? '°F':'°C'}`}</h1>

                            </div>

                        </div>
                        <DescriptionWidgets
                        weather={weather}
                        units={units}
                        />

                    </div>
                )}
            </div>
        </div>
    );
}

export default App;

