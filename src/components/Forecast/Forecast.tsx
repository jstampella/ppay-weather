import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { AppStore } from '../../store/store';
import ForecastItem from './ForecastItem';
import { ActiveTab, ForecastContainer, SectionTitle, Sections } from './styled';

import { ForecastCustom, List } from '../../models/forecastExtendsApi';
import ForecastItemDetail from './ForecastItemDetail';

const Forecast: React.FC = () => {
	const { forecast, isInitial } = useSelector((state: AppStore) => ({
		loading: state.app.isLoading,
		isInitial: state.app.isInitial,
		forecast: state.weather.ForecastCustom,
	}));
	const [activeIndex, setActiveIndex] = useState(null);
	const clickHandler = (d: any) => {
		if (d === activeIndex) {
			setActiveIndex(null);
		} else {
			setActiveIndex(d);
		}
	};

	if (isInitial) return <></>;
	return (
		<Sections>
			<SectionTitle>Clima Extendido</SectionTitle>
			{forecast.map((item: ForecastCustom, i) => {
				return (
					<ForecastContainer key={i} onClick={() => clickHandler(i)}>
						<ForecastItem
							temp_max={item.temp_max}
							temp_min={item.temp_min}
							icon={item.icon}
							key={i}
							day={item.day}
							list={item.list}
						/>
						{activeIndex === i ? (
							<ActiveTab>
								{item.list.map((data: List, index) => {
									return <ForecastItemDetail key={index} {...data} />;
								})}
							</ActiveTab>
						) : null}
					</ForecastContainer>
				);
			})}
		</Sections>
	);
};

export default Forecast;
