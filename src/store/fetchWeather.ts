/* eslint-disable camelcase */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setIsInitial, setIsLoading } from './reducers/appReducer';
import { fetchExtendedForecastData, fetchWeatherData } from '../api/weather';
import { WeatherData, ExtendedForecastData } from '../api/types';
import { kelvinToCelcius } from '../utils/unitConversion';
import { getNextSevenDays } from '../utils/dateUtils';

export const fetchWeather = createAsyncThunk(
	'weather/fetchWeather',
	async (
		city: string | { lat: number; lng: number },
		{ dispatch, rejectWithValue }
	) => {
		dispatch(setIsLoading(true));

		try {
			const res = await Promise.all([
				fetchWeatherData(city),
				fetchExtendedForecastData(city),
			]);
			dispatch(setIsLoading(false));
			if (res[0].cod === 200) {
				dispatch(setIsInitial(false));
				return res;
			}
			return rejectWithValue(res[0].message);
		} catch {
			dispatch(setIsLoading(false));
			return rejectWithValue('Error');
		}
	}
);

export const transformWeatherData = (
	res: any
): {
	weather: WeatherData;
	forecast: ExtendedForecastData[];
} => {
	const weather = res[0] as WeatherData;
	const forecast: ExtendedForecastData[] = [];

	weather.weather = res[0].weather[0];
	weather.main = {
		...weather.main,
		temp: kelvinToCelcius(weather.main.temp),
		feels_like: kelvinToCelcius(weather.main.feels_like),
		temp_max: kelvinToCelcius(weather.main.temp_max),
		temp_min: kelvinToCelcius(weather.main.temp_min),
	};
	weather.wind.speed = Math.round(weather.wind.speed * 3.6);

	const next7Days = getNextSevenDays();
	res[1].list.forEach((i: any, index: number) => {
		forecast.push({
			day: next7Days[index],
			temp: {
				temp_max: kelvinToCelcius(i.main.temp_max),
				temp_min: kelvinToCelcius(i.main.temp_min),
			},
			weather: {
				id: i.weather[0].id,
				main: i.weather[0].main,
			},
		});
	});

	return {
		weather,
		forecast,
	};
};
