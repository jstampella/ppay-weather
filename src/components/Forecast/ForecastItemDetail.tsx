import React from 'react';
import Temperature from '../CurrentWeather/Temperature';
import WeatherIcon from '../CurrentWeather/WeatherIcon';
import { ForecastItemDetailStlyed } from './styled';
import { List } from '../../models/forecastExtendsApi';
import { formatTime } from '../../utils/dateUtils';

const ForecastItemDetail: React.FC<List> = data => {
	return (
		<ForecastItemDetailStlyed>
			<h6>{formatTime(data.dt_txt.split(' ')[1])}</h6>
			<WeatherIcon code={data.weather[0].id} />
			<p>{data.weather[0].description}</p>
			<span>
				<Temperature value={data.main.temp_max} />
				<sup>&deg;</sup>
				<small>/ </small>
				<Temperature value={data.main.temp_min} />
				<sup>&deg;</sup>
			</span>
		</ForecastItemDetailStlyed>
	);
};

export default ForecastItemDetail;
