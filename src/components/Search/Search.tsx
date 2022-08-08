import Suggestion from './Suggestion';
import { DebounceInput } from 'react-debounce-input';
import {
	SearchResult,
	LocationButton,
	LocationIcon,
	SearchElement,
	SearchIcon,
	SearchInput,
} from './styled';
import { fetchCities } from './../../api/placeSuggestion';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { fetchWeather } from '../../store/fetchWeather';

const Search: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>();
	const [showSuggestions, setShowSuggestions] = useState(false);
	const suggestionRef = useRef(null);
	const [suggestions, setSuggestions] = useState<string[]>([]);
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		if (!searchTerm) {
			return;
		}
		setShowSuggestions(true);
		fetchCities(searchTerm).then(res => {
			setSuggestions(res);
		});
	}, [searchTerm]);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const onSearchInputChanged = (e: any) => {
		setSearchTerm(e.target.value);
	};

	const showPosition = (position: any) => {
		dispatch(
			fetchWeather({
				lat: position.coords.latitude,
				lng: position.coords.longitude,
			})
		);
	};

	return (
		<SearchElement>
			<SearchIcon />
			<DebounceInput
				element={SearchInput}
				debounceTimeout={300}
				onChange={onSearchInputChanged}
				placeholder='Buscar por Localizacion'
			/>
			<LocationButton
				onClick={() => {
					if (navigator.geolocation) {
						navigator.geolocation.getCurrentPosition(showPosition);
					} else {
						alert('Geolocation is not supported by this browser.');
					}
				}}
			>
				<LocationIcon />
			</LocationButton>
			{showSuggestions && (
				<SearchResult ref={suggestionRef}>
					{suggestions?.slice(0, 6)?.map((s, i) => (
						<Suggestion
							key={i}
							label={s}
							hideSuggestionFn={() => {
								setShowSuggestions(false);
							}}
						/>
					))}
				</SearchResult>
			)}
		</SearchElement>
	);
};

export default Search;
