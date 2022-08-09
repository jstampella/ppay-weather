import { useDispatch, useSelector } from 'react-redux';
import { AppStore } from '../../store/store';
import { changeTempUnit } from '../../store/reducers/appReducer';
import { kmToMile, TempUnit } from '../../utils/unitConversion';
import ToggleSwitch from '../ui/ToggleSwitch/ToggleSwitch';

// Icons
import { ReactComponent as HighIcon } from '../../assets/high-icon.svg';
import { ReactComponent as HumidityIcon } from '../../assets/humidity-icon.svg';
import { ReactComponent as LowIcon } from '../../assets/low-icon.svg';
import { ReactComponent as PressureIcon } from '../../assets/pressure-icon.svg';
import { ReactComponent as WindIcon } from '../../assets/wind-icon.svg';
// styles
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
import WeatherIcon from './WeatherIcon';
const CurrentWeather: React.FC = () => {
	const { weather, degreeType, isInitial } = useSelector((store: AppStore) => ({
		weather: store.weather.weatherData,
		degreeType: store.app.tempUnit,
		isInitial: store.app.isInitial,
	}));
	const dispatch = useDispatch();

	if (isInitial) return <></>;

	return (
		<WeatherContainer>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<SectionTitle>Clima Actual</SectionTitle>
				<div>
					<ToggleSwitch onClick={() => dispatch(changeTempUnit())} />
				</div>
			</div>
			<CurrentWeatherContainer>
				<CurrentWeatherStatus>
					<h4>
						{weather.name}, {weather.sys.country}
					</h4>
					<div style={{ display: 'flex', justifyContent: 'center' }}>
						<WeatherIcon
							icon={weather.weather[0].icon}
							main={weather.weather[0].main}
							big
						/>
						{/* <WeatherIcon code={weather.weather[0].id} big /> */}
						<span>
							<Temperature value={weather.main.temp} />
							<sup>&deg;</sup>
						</span>
					</div>
					<h6>{weather.weather[0].description}</h6>
				</CurrentWeatherStatus>

				<CurrentWeatherInfo>
					<FeelsLike>
						Sensacion Termica: <Temperature value={weather.main.feels_like} />
						<sup>&deg;</sup>
					</FeelsLike>
					<HighLowContainer>
						<WeatherDegree>
							<HighIcon />
							<Temperature value={weather.main.temp_max} />
							<sup>&deg;</sup>
						</WeatherDegree>
						<WeatherDegree>
							<LowIcon />
							<Temperature value={weather.main.temp_min} />
							<sup>&deg;</sup>
						</WeatherDegree>
					</HighLowContainer>
					<InfoRow>
						<div>
							<HumidityIcon />
							Humedad
						</div>
						<span>{weather.main.humidity}%</span>
					</InfoRow>
					<InfoRow>
						<div>
							<WindIcon />
							Viento
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
							<PressureIcon />
							Presion
						</div>
						<span>{weather.main.pressure}hPa</span>
					</InfoRow>
				</CurrentWeatherInfo>
			</CurrentWeatherContainer>
		</WeatherContainer>
	);
};

export default CurrentWeather;
