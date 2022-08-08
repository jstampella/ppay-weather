import { createAsyncThunk } from '@reduxjs/toolkit';
import { setIsInitial, setIsLoading } from './reducers/appReducer';
import { fetchExtendedForecastData, fetchWeatherData } from '../api/weather';

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
