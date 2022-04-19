import axios from "axios";


const api = {
    weather: {
        fetchCityWeather: (city) => axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9cff733aee57cb05b63dd4f731c46bc4`).then((res) => res.data)
    },
}

export default api;