/* eslint-disable camelcase */
import { ForecastCustom } from '../../models/forecastExtendsApi';
import { ForecastItems } from './styled';
import PropTypes from 'prop-types';
import WeatherIcon from '../CurrentWeather/WeatherIcon';
import Temperature from '../CurrentWeather/Temperature';

const ForecastItem: React.FC<ForecastCustom> = props => {
	ForecastItem.propTypes = {
		day: PropTypes.string.isRequired,
		list: PropTypes.array.isRequired,
		icon: PropTypes.number.isRequired,
		temp_min: PropTypes.number.isRequired,
		temp_max: PropTypes.number.isRequired,
	};

	return (
		<ForecastItems>
			<div className='sub'>{props.day}</div>
			<div>
				<WeatherIcon code={props.icon} />
				<Temperature value={props.temp_min} />
				<sup>&deg;</sup>
				<small>/</small>
				<Temperature value={props.temp_max} />
				<sup>&deg;</sup>
			</div>
		</ForecastItems>
	);
};

export default ForecastItem;
