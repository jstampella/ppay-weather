import {
	HeaderContainer,
	Title,
	HeaderIconsContainer,
	GithubLink,
} from './styled';
import { ReactComponent as GithubIcon } from '../../assets/github.svg';
import DarkModeToggle from 'react-dark-mode-toggle';
import { AppStore } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../../store/reducers/appReducer';

/**
 * Componente que almacena el Header de la pagina
 * TITULO, BOTON TEMA, Link a Github
 * @returns Component JSX
 */
export const Header = () => {
	const dispatch = useDispatch();
	const isDarkMode = useSelector((state: AppStore) => state.app.darkMode);
	return (
		<HeaderContainer>
			<Title>Weather - PPAY</Title>
			<HeaderIconsContainer>
				<DarkModeToggle
					checked={isDarkMode}
					onChange={() => dispatch(toggleDarkMode())}
					size={90}
				/>
				<GithubLink
					target='_blank'
					href='https://github.com/jstampella/ppay-weather'
				>
					<GithubIcon />
				</GithubLink>
			</HeaderIconsContainer>
		</HeaderContainer>
	);
};
