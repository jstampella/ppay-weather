/* eslint-disable camelcase */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setIsInitial, setIsLoading } from './reducers/appReducer';
import { fetchExtendedForecastData, fetchWeatherData } from '../api/weather';
import { kelvinToCelcius } from '../utils/unitConversion';
import { WeatherAPI } from '../models/weatherApi';
import { getNamberDate } from '../utils/dateUtils';
import {
	ForecastCustom,
	ForecastExtends,
	List as ListExtend,
} from '../models/forecastExtendsApi';

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
	weather: WeatherAPI;
	newForecast: ForecastCustom[];
} => {
	const weather = res[0] as WeatherAPI;
	const forecast = res[1] as ForecastExtends;
	const newForecast: ForecastCustom[] = [];
	weather.main = {
		...weather.main,
		temp: kelvinToCelcius(weather.main.temp),
		feels_like: kelvinToCelcius(weather.main.feels_like),
		temp_max: kelvinToCelcius(weather.main.temp_max),
		temp_min: kelvinToCelcius(weather.main.temp_min),
	};
	weather.wind.speed = Math.round(weather.wind.speed * 3.6);

	let days: ListExtend[] = [];
	let fecha = '';
	// if (day !== item.dt_txt.split(' ')[0]
	forecast.list.forEach((i: ListExtend) => {
		if (fecha !== i.dt_txt.split(' ')[0] && days.length > 0) {
			newForecast.push({
				day: getNamberDate(i.dt_txt.split(' ')[0]),
				list: days,
			});
			days = [];
		} else {
			fecha = i.dt_txt.split(' ')[0];
			i.main = {
				...i.main,
				temp: kelvinToCelcius(i.main.temp),
				feels_like: kelvinToCelcius(i.main.feels_like),
				temp_max: kelvinToCelcius(i.main.temp_max),
				temp_min: kelvinToCelcius(i.main.temp_min),
			};
			i.wind.speed = Math.round(i.wind.speed * 3.6);
			days.push(i);
		}
		// 	const itemN = i;
		// 	itemN.main = {
		// 		...itemN.main,
		// 		temp: kelvinToCelcius(itemN.main.temp),
		// 		feels_like: kelvinToCelcius(itemN.main.feels_like),
		// 		temp_max: kelvinToCelcius(itemN.main.temp_max),
		// 		temp_min: kelvinToCelcius(itemN.main.temp_min),
		// 	};
		// 	itemN.wind.speed = Math.round(itemN.wind.speed * 3.6);
		// 	if (fecha !== itemN.dt_txt.split(' ')[0] && fecha !== '') {
		// 		newForecast.push({
		// 			day: fecha,
		// 			list: days,
		// 		});
		// 		fecha = '';
		// 		days.slice();
		// 	} else {
		// 		fecha = itemN.dt_txt.split(' ')[0];
		// 		days.push(i);
		// 	}
	});
	console.log(newForecast);
	return {
		weather,
		newForecast,
	};
};
