import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { AppStore } from '../../store/store';
import ForecastItem from './ForecastItem';
import { ActiveTab, ForecastContainer, SectionTitle } from './styled';

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
		<ForecastContainer>
			<SectionTitle>Clima Extendido</SectionTitle>
			<>
				{forecast.map((item: ForecastCustom, i) => {
					return (
						<div key={i}>
							<ForecastItem key={i} day={item.day} list={item.list} />
							<div onClick={() => clickHandler(i)}>Expandad</div>
							{activeIndex === i ? (
								<ActiveTab>
									{item.list.map((data: List, index) => {
										return <ForecastItemDetail key={index} {...data} />;
									})}
								</ActiveTab>
							) : null}
						</div>
					);
				})}

				{/* {forecast.list.map((item, i) => {
					return (
						<ForecastItem
							key={i}
							day={item.dt_txt}
							high={item.main.temp_max}
							low={item.main.temp_min}
							weatherCode={item.weather[0].id}
							main={item.weather[0].description}
						/>
					);
					// if (day !== item.dt_txt.split(' ')[0] && items.length > 0) {
					// 	day = item.dt_txt.split(' ')[0];
					// 	console.log(items);
					// 	items.splice(1, items.length);
					// } else items.push(item);
					// console.log(item.dt_txt.split(' ')[0]);

					// <Sections>

					// </Sections>
					// console.log(formatTime(item.dt_txt.split(' ')[1])); // Obtener Hora
					// if (i < 5)
					// 	return (
					// 		<div key={i}>
					// 			<ForecastItem
					// 				day={item.dt_txt}
					// 				high={item.main.temp_max}
					// 				low={item.main.temp_min}
					// 				weatherCode={item.weather[0].id}
					// 				main={item.weather[0].description}
					// 			/>
					// 			<div onClick={() => clickHandler(i)}>CLICK</div>
					// 			{activeIndex === i ? <ActiveTab>Hola</ActiveTab> : null}
					// 		</div>
					// 	);
				})} */}
			</>
		</ForecastContainer>
	);
};

export default Forecast;
