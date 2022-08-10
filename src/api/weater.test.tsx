// api/getParticipants.test.js
import { fetchWeatherData, fetchExtendedForecastData } from './weather';

jest.spyOn(window, 'fetch');

const cityValue = 'parana';

describe('get Api weather', () => {
	it('check property api getWeatherApi', async () => {
		const data = await fetchExtendedForecastData(cityValue);
		expect(data).toHaveProperty('cod');
	});

	it('check property api getWeatherCurrentApi', async () => {
		const data = await fetchWeatherData(cityValue);
		expect(data).toHaveProperty('cod');
	});
});
