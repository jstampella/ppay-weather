import lightBg from './assets/bgLight.svg';
import darkBg from './assets/bgNight.svg';

export interface Theme {
	color: string;
	appTitleColor: string;
	backgroundImage: string;
	backgroundGradient: {
		color1: string;
		color2: string;
	};
	panelBgColor: string;
	panelTitleColor: string;
	forecastPanelBgColor: string;
	searchInput: {
		color: string;
		placeholderColor: string;
	};
	temperatureSwitch: {
		backgroundColor: string;
		sliderColor: string;
		textColor: string;
	};
	searchSuggestion: {
		backgroundColor: string;
		hoverBackgroundColor: string;
		seperatorLineColor: string;
	};
	smallIconColor: string;
	smallIconTextColor: string;
}

export const lightTheme: Theme = {
	color: '#4a6fa1',
	appTitleColor: '#2F5D8A',
	backgroundImage: lightBg,
	backgroundGradient: {
		color1: '#acd6d5',
		color2: '#9acac9',
	},
	panelBgColor: '#FFFFFF',
	panelTitleColor: '#727E8E',
	forecastPanelBgColor: 'rgba(255, 255, 255, 0.75)',
	searchInput: {
		color: '#727E8E',
		placeholderColor: '#6898d5',
	},
	temperatureSwitch: {
		backgroundColor: '#77b1c7',
		sliderColor: '#fff',
		textColor: '#fff',
	},
	searchSuggestion: {
		backgroundColor: '#fff',
		hoverBackgroundColor: '#f9f9f9',
		seperatorLineColor: '#ccc',
	},
	smallIconColor: '#A1B9CE',
	smallIconTextColor: '#7B98B2',
};

export const darkTheme: Theme = {
	color: '#c4dbfa',
	appTitleColor: '#ffe901',
	backgroundImage: darkBg,
	backgroundGradient: {
		color1: '#031027',
		color2: '#02101D',
	},
	panelBgColor: '#051A33',
	panelTitleColor: '#59a7ff',
	forecastPanelBgColor: 'rgba(5, 26, 51, 0.75)',
	searchInput: {
		color: '#5f8bbf',
		placeholderColor: '#235A84',
	},
	temperatureSwitch: {
		backgroundColor: '#1b3657',
		sliderColor: '##59a7ff',
		textColor: '##59a7ff',
	},
	searchSuggestion: {
		backgroundColor: '#0f2744',
		hoverBackgroundColor: '#183553',
		seperatorLineColor: '#356097',
	},
	smallIconColor: '#153C5E',
	smallIconTextColor: '#3975AB',
};
