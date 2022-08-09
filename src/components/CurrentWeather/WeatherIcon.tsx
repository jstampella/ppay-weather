import React from 'react';
import { AppStore } from '../../store/store';
import { useSelector } from 'react-redux';

interface IWeatherIconProps {
	big?: boolean;
	icon: string;
	main: string;
}

const WeatherIcon: React.FC<IWeatherIconProps> = props => {
	const darkMode = useSelector((state: AppStore) => state.app.darkMode);
	const weatherCode = darkMode ? `${props.icon}_n` : `${props.icon}`;
	const widt = props.big ? 200 : 50;
	if (!props.icon || props.icon == '') return <></>;
	return (
		<img
			width={widt}
			src={require(`../../assets/weather/icon_${weatherCode}.png`)}
			alt={props.main}
		/>
	);
};

export default WeatherIcon;
