import { ForecastCustom } from '../../models/forecastExtendsApi';
import { ForecastItemDetailStlyed } from './styled';
import PropTypes from 'prop-types';

const ForecastItem: React.FC<ForecastCustom> = props => {
	ForecastItem.propTypes = {
		day: PropTypes.string.isRequired,
		list: PropTypes.array.isRequired,
	};

	return (
		<ForecastItemDetailStlyed>
			<h6>{props.day}</h6>
		</ForecastItemDetailStlyed>
	);
};

export default ForecastItem;
