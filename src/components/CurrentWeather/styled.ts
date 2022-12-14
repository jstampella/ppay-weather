import styled from 'styled-components';

export const WeatherContainer = styled.div`
	background-color: ${({ theme }) => theme.panelBgColor};
	box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
	border-radius: 15px;
	padding: 1.5rem 2rem;
	display: flex;
	flex-direction: column;
`;
export const SectionTitle = styled.h6`
	font-weight: 500;
	font-size: 1.125rem;
	color: ${({ theme }) => theme.panelTitleColor};
`;
export const CurrentWeatherContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	@media (max-width: 800px) {
		justify-content: center;
	}
`;
export const CurrentWeatherStatus = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	margin: 2rem 1.5rem;
	width: 25rem;

	@media (max-width: 800px) {
		margin: 2rem 0rem;
		justify-content: center;
	}

	h4 {
		text-align: center;
		font-weight: 600;
		font-size: 2rem;
		color: #396bae;
		margin-bottom: 2rem;
	}
	span {
		font-weight: 200;
		font-size: 7rem;
		color: ${({ theme }) => theme.color};
		margin-left: 1.5rem;
		line-height: 1;
		sup {
			line-height: 0;
		}
	}
	h6 {
		font-size: 2.375rem;
		text-align: center;
		color: #7b98b2;
		letter-spacing: 3px;
	}
`;
export const CurrentWeatherInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	margin: 2rem 1rem;
	margin-left: 2rem;
`;
export const FeelsLike = styled.p`
	font-size: 1.25rem;
	color: ${({ theme }) => theme.color};
`;
export const HighLowContainer = styled.div`
	display: flex;
	margin-bottom: 2rem;
	width: 2rem;
`;
export const WeatherDegree = styled.div`
	display: flex;
	align-items: center;
	font-weight: 500;
	font-size: 1.25rem;
	color: #3a86ca;
	margin-top: 0.8rem;
	margin-right: 2.5rem;
	svg {
		fill: ${({ theme }) => theme.smallIconColor};
		margin-right: 1rem;
	}
`;
export const InfoRow = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	margin-bottom: 0.8rem;
	div {
		color: ${({ theme }) => theme.smallIconTextColor};
		display: flex;
		align-items: center;
		font-size: 1rem;
		width: 8rem;
	}
	svg {
		fill: ${({ theme }) => theme.smallIconColor};
		margin-right: 1rem;
		width: 1.6rem;
		margin-left: -0.3rem;
	}
	span {
		color: #3080c8;
		font-weight: 500;
		font-size: 1rem;
	}
`;
