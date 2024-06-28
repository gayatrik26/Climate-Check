// const ApiKey = import.meta.env.VITE_APP_API_KEY;
// const baseUrl = "https://api.openweathermap.org/data/2.5/";

// const getWeatherData = async (infotype , city) =>{
//     try {
//         const url = `https://api.openweathermap.org/data/2.5/weather${infotype}?q=${city}&appid=${this.ApiKey}`;
//         // const url = new URL(baseUrl + infotype);
//         // url.search = new URLSearchParams({...searchPara , appid : ApiKey});
//         const response =  await fetch(url);
//         const weatherData = await response.json();
//         return weatherData;
//         // return fetch(url).then((res) => res.json()).then(data => data);  
//     } catch (error) {
//         console.log("errrrrrrrrrr" , error)
//     }
    

// };

// export default getWeatherData;


const ApiKey = import.meta.env.VITE_APP_API_KEY;
const baseUrl = "https://api.openweathermap.org/data/2.5/";

const getWeatherData = async (infotype, city) => {
    try {
        const url = `${baseUrl}${infotype}?q=${city}&appid=${ApiKey}`;
        const response = await fetch(url);
        const weatherData = await response.json();
        return weatherData;
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
};

export default getWeatherData;