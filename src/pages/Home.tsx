import { useEffect } from 'react';
import { Header } from '../components/Header/Header';
import Search from '../components/Search/Search';
import { useSelector } from 'react-redux';
import { AppStore } from '../store/store';
import Spinner from '../components/ui/Spinner/Spinner';
import CurrentWeather from '../components/CurrentWeather/CurrentWeather';
import Footer from '../components/Footer/Footer';
import Forecast from '../components/Forecast/Forecast';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
/**
 * Componente que almacena el HEADER, SEARCH, CURRENT, FORECAST, FOOTER
 * @returns Component JSX
 */
const Home = () => {
	const { loading, isError } = useSelector((state: AppStore) => ({
		loading: state.app.isLoading,
		isError: state.weather.isError,
	}));
	useEffect(() => {
		if (isError) {
			console.log(isError);
			toast.error('Ocurrio un error al obtener los datos', {
				position: 'top-center',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}
	}, [isError]);
	return (
		<>
			{loading && <Spinner />}
			<Header />
			<Search />
			<CurrentWeather />
			<Forecast />
			<Footer />
			<ToastContainer />
		</>
	);
};

export default Home;
