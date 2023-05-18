const apiKey = "b8de58bdd36f820d25bcfeee4e137586"
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchInput = document.getElementById('search')
const searchBtn = document.getElementById('btn')
const weatherIcon = document.getElementById('weatherIcon')

async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`)
    var data = await response.json()

    if (response.status == 404) {
        document.getElementById('error').style.display = 'block'
        document.getElementById('hidden').style.display = 'none'
    } else {
        console.log(data)
        document.getElementById('city').innerHTML = data.name
        document.getElementById('temp').innerHTML = Math.round(data.main.temp) + '°C'
        document.getElementById('humidity').innerHTML = data.main.humidity + '%'
        document.getElementById('wind').innerHTML = data.wind.speed + ' km/h'

        let status = data.weather[0].main
        if (status === 'Clouds') {
            weatherIcon.src = './img/clouds.png'
        } else if (status === 'Clear') {
            weatherIcon.src = './img/clear.png'
        } else if (status === 'Rain') {
            weatherIcon.src = './img/mist.png'
        } else if (status === 'Snow') {
            weatherIcon.src = './img/snow.png'
        } else if (status === 'Drizzle') {
            weatherIcon.src = './img/drizzle.png'
        }
        searchInput.value = ""
        document.getElementById('error').style.display = 'none'
    }

}
searchBtn.addEventListener('click', () => {
    checkWeather(searchInput.value)
    document.getElementById('hidden').style.display = 'block'
})