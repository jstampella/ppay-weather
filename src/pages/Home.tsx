import { Header } from '../components/Header/Header';
import Search from '../components/Search/Search';
import { useSelector } from 'react-redux';
import { AppStore } from '../store/store';
import Spinner from '../components/ui/Spinner/Spinner';
/**
 * Componente que almacena el HEADER, SEARCH, CURRENT, FORECAST, FOOTER
 * @returns Component JSX
 */
const Home = () => {
	const { loading } = useSelector((state: AppStore) => ({
		loading: state.app.isLoading,
	}));
	return (
		<>
			{loading && <Spinner />}
			<Header />
			<Search />
		</>
	);
};

export default Home;
