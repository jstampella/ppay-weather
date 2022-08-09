import styled from 'styled-components';
import { ReactComponent as AppIconSvg } from '../../assets/clima_ppay.svg';

export const HeaderContainer = styled.header`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	margin: 10px;
	align-items: center;
`;
export const Title = styled.div`
	color: ${({ theme }) => theme.appTitleColor};
	flex: 1 250px;
	svg {
		height: auto;
	}
`;

export const GithubLink = styled.a`
	margin-left: 1rem;
	width: 100%;
	svg {
		width: 100%;
		fill: ${({ theme }) => theme.appTitleColor};
	}
	&:hover svg {
		fill: #20546a;
	}
`;

export const AppIcon = styled(AppIconSvg)`
	width: 100%;
	g {
		width: 100%;
		height: auto;
		fill: ${({ theme }) => theme.appTitleColor};
	}
`;

export const HeaderIconsContainer = styled.div`
	display: flex;
	align-items: center;
	button {
		flex: initial;
	}
	a {
		flex: 1;
	}
`;
