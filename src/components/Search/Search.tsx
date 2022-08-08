import {
	LocationButton,
	LocationIcon,
	SearchElement,
	SearchIcon,
	SearchInput,
} from './styled';

const Search: React.FC = () => {
	return (
		<SearchElement>
			<SearchIcon />
			<SearchInput placeholder='Search for location' />
			<LocationButton onClick={() => console.log('location')}>
				<LocationIcon />
			</LocationButton>
		</SearchElement>
	);
};

export default Search;
