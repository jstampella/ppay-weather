import { HeaderContainer, Title, HeaderIconsContainer } from './styled';
import DarkModeToggle from 'react-dark-mode-toggle';
import { AppStore } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../../store/reducers/appReducer';

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
			</HeaderIconsContainer>
		</HeaderContainer>
	);
};
