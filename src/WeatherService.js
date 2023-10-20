const API_KEY = '91c76bcce072409ad2594b9a5356fd13'

const getFormattedWeatherData = async (city, units = 'metric') => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`
    const makeIconUrl = (iconId) => `https://openweathermap.org/img/wn/${iconId}.png`
    const data = await fetch(url)
        .then((res => res.json()))
        .then((data) => data)
    console.log(data)
    const {
        main: {temp, feels_like, temp_min, temp_max, pressure, humidity},
        name,
        sys: {country},
        weather,
        wind: {speed},

    } = data
    const {description, icon} = weather[0]
    return {
        description,
        iconURL: makeIconUrl(icon),
        temp,
        feels_like,
        temp_min,
        temp_max,
        pressure,
        humidity,
        speed,
        name,
        country
    }
}
export {getFormattedWeatherData}
