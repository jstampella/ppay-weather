/* eslint-disable camelcase */
import { createSlice } from '@reduxjs/toolkit';
import { fetchWeather, transformWeatherData } from '../fetchWeather';
import { WeatherAPI } from '../../models/weatherApi';
import { ForecastCustom, MainEnum, Pod } from '../../models/forecastExtendsApi';

export type WeatherState = {
	weatherData: WeatherAPI;
	ForecastCustom: ForecastCustom[];
	isError: boolean;
};

const initialState: WeatherState = {
	weatherData: {
		coord: {
			lat: 0,
			lon: 0,
		},
		base: '',
		main: {
			temp: 0,
			feels_like: 0,
			temp_min: 0,
			temp_max: 0,
			pressure: 0,
			humidity: 0,
			sea_level: 0,
			grnd_level: 0,
		},
		visibility: 0,
		clouds: {
			all: 0,
		},
		dt: 0,
		sys: {
			id: 0,
			type: 0,
			country: '',
			sunrise: 0,
			sunset: 0,
		},
		timezone: 0,
		id: 0,
		name: '',
		cod: 0,

		wind: {
			deg: 0,
			speed: 0,
			gust: 0,
		},
		weather: [
			{
				id: 0,
				main: '',
				description: '',
				icon: '',
			},
		],
	},
	ForecastCustom: [
		{
			day: '',
			temp_max: 0,
			temp_min: 0,
			icon: '',
			list: [
				{
					dt: 0,
					main: {
						temp: 0,
						feels_like: 0,
						temp_min: 0,
						temp_max: 0,
						pressure: 0,
						sea_level: 0,
						grnd_level: 0,
						humidity: 0,
						temp_kf: 0,
					},
					weather: [
						{
							id: 0,
							main: MainEnum.Clear,
							description: '',
							icon: '',
						},
					],
					clouds: {
						all: 0,
					},
					wind: {
						speed: 0,
						deg: 0,
						gust: 0,
					},
					visibility: 0,
					pop: 0,
					rain: {
						'3h': 0,
					},
					sys: {
						pod: Pod.D,
					},
					dt_txt: '',
				},
			],
		},
	],
	isError: false,
};

const weatherSlice = createSlice({
	name: 'weather',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchWeather.fulfilled, (state, action) => {
				const res = transformWeatherData(action.payload);
				state.weatherData = res.weather;
				state.ForecastCustom = res.newForecast;
			})
			.addCase(fetchWeather.rejected, state => {
				state.isError = true;
			});
	},
});

export default weatherSlice.reducer;
