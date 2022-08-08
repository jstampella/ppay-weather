import { Header } from '../components/Header/Header';
import Search from '../components/Search/Search';
/**
 * Componente que almacena el HEADER, SEARCH, CURRENT, FORECAST, FOOTER
 * @returns Component JSX
 */
const Home = () => {
	return (
		<>
			<Header />
			<Search />
		</>
	);
};

export default Home;
