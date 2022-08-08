import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppStore } from '../../store/store';
import { changeTempUnit } from '../../store/reducers/appReducer';
import { kmToMile, TempUnit } from '../../utils/unitConversion';
import ToggleSwitch from '../ui/ToggleSwitch/ToggleSwitch';
import {
	CurrentWeatherStatus,
	CurrentWeatherContainer,
	CurrentWeatherInfo,
	FeelsLike,
	HighLowContainer,
	InfoRow,
	SectionTitle,
	WeatherContainer,
	WeatherDegree,
} from './styled';
import Temperature from './Temperature';

const CurrentWeather: React.FC = () => {
	const { weather, degreeType, isInitial, isError } = useSelector(
		(store: AppStore) => ({
			weather: store.weather.weatherData,
			degreeType: store.app.tempUnit,
			isInitial: store.app.isInitial,
			isError: store.weather.isError,
		})
	);
	const dispatch = useDispatch();

	useEffect(() => {
		if (isError) {
			console.log('Ocurrio un error al obtener los datos');
		}
	}, [isError]);

	if (isInitial) return <></>;

	return (
		<WeatherContainer>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<SectionTitle>Current Weather</SectionTitle>
				<div>
					<ToggleSwitch onClick={() => dispatch(changeTempUnit())} />
				</div>
			</div>
			<CurrentWeatherContainer>
				<CurrentWeatherStatus>
					<h4>{weather.name}</h4>
					<div style={{ display: 'flex' }}>
						{/* WeatherIcon componente para renderizar icon */}
						<span>
							<Temperature value={weather.main.temp} />
							<sup>&deg;</sup>
						</span>
					</div>
					<h6>{weather.weather.description}</h6>
				</CurrentWeatherStatus>

				<CurrentWeatherInfo>
					<FeelsLike>
						Feels like <Temperature value={weather.main.feels_like} />
						<sup>&deg;</sup>
					</FeelsLike>
					<HighLowContainer>
						<WeatherDegree>
							{/* <HighIcon /> */}
							<Temperature value={weather.main.temp_max} />
							<sup>&deg;</sup>
						</WeatherDegree>
						<WeatherDegree>
							{/* <LowIcon /> */}
							<Temperature value={weather.main.temp_min} />
							<sup>&deg;</sup>
						</WeatherDegree>
					</HighLowContainer>
					<InfoRow>
						<div>
							{/* <HumidityIcon />  */}
							Humidity
						</div>
						<span>{weather.main.humidity}%</span>
					</InfoRow>
					<InfoRow>
						<div>
							{/* <WindIcon />  */}
							Wind
						</div>
						<span>
							{degreeType === TempUnit.CELCIUS
								? weather.wind.speed
								: kmToMile(weather.wind.speed)}
							{degreeType === TempUnit.CELCIUS ? 'kph' : 'mph'}
						</span>
					</InfoRow>
					<InfoRow>
						<div>
							{/* <PressureIcon />  */}
							Pressure
						</div>
						<span>{weather.main.pressure}hPa</span>
					</InfoRow>
				</CurrentWeatherInfo>
			</CurrentWeatherContainer>
		</WeatherContainer>
	);
};

export default CurrentWeather;