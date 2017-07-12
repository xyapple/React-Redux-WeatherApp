import axios from 'axios';

//weather app key from www.openweathermap.org
const API_KEY = '506881b94be98562e6574fb594f252af';
//ES6 way to use ``
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?units=metric&appid=${API_KEY}`;

//create a sigal variable to hold the action type
export const FETCH_WEATHER = 'FETCH_WEATHER';

//create action creater
export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    console.log('request: ', request);
    return {
        type: FETCH_WEATHER,
        //if the payload is a promise, react will stop the action, dispactch a new action
        payload: request
    };
}
