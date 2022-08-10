import axios from 'axios';
import { ForecastExtends } from '../models/forecastExtendsApi';
import { WeatherAPI, WeatherError } from '../models/weatherApi';
// const baseUrl = 'https://api.openweathermap.org/data/2.5';

export const reqResApi = axios.create({
	baseURL: 'https://api.openweathermap.org/data/2.5',
});

export const fetchWeatherData = async (
	city: string | { lat: number; lng: number }
) => {
	let url = `/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&lang=es`;
	if (typeof city === 'object') {
		url = `/weather?lat=${city.lat}&lon=${city.lng}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&lang=es`;
	}
	const resp = await reqResApi.get<WeatherError | WeatherAPI>(url);

	return resp.data;
};

export const fetchExtendedForecastData = async (
	city: string | { lat: number; lng: number }
) => {
	let url = `/forecast?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&lang=es`;

	if (typeof city === 'object') {
		url = `/forecast?lat=${city.lat}&lon=${city.lng}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&lang=es`;
	}

	const resp = await reqResApi.get<WeatherError | ForecastExtends>(url);

	return resp.data;
};
