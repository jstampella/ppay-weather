import { useSelector } from 'react-redux';
import { AppStore } from './store/store';
import Home from './pages/Home';
import { GlobalStyles } from './app.tyled';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';
function App() {
	const darkMode = useSelector((state: AppStore) => state.app.darkMode);
	return (
		<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
			<GlobalStyles />
			<Home />
		</ThemeProvider>
	);
}

export default App;
