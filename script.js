const apiKey="f07f7cd210e5a8f44157eb4f5637b084";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox= document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");

async function checkweather(city)
{
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    let data = await response.json();  //java script object notation
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

}

searchBtn.addEventListener("click", ()=>{

    checkweather(searchBox.value);
})