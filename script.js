const apiKey = "b8de58bdd36f820d25bcfeee4e137586"
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bishkek"


async function checkWeather(){
    const response = await fetch(apiURL + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
}

checkWeather()