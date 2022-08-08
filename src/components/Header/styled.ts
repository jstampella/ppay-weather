import styled from 'styled-components';
import { ReactComponent as AppIconSvg } from '../../assets/clima_ppay.svg';

export const HeaderContainer = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 8rem;
`;
export const Title = styled.h1`
	color: ${({ theme }) => theme.appTitleColor};
	font-size: 3.2rem;
`;

export const GithubLink = styled.a`
	margin-left: 1rem;
	svg {
		fill: ${({ theme }) => theme.appTitleColor};
	}
	&:hover svg {
		fill: #20546a;
	}
`;

export const AppIcon = styled(AppIconSvg)`
	margin-left: 1.2rem;
	g {
		fill: ${({ theme }) => theme.appTitleColor};
	}
`;

export const HeaderIconsContainer = styled.div`
	display: flex;
	align-items: center;
`;
