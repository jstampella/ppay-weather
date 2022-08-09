import { createGlobalStyle } from 'styled-components';
import { Theme } from './theme';

declare module 'styled-components' {
	/* tslint:disable */
	export interface DefaultTheme extends Theme {}
}

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: inherit;
}
html {
  font-size: 16px;
}
body {
  font-family: 'Poppins', sans-serif;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background: url(${({ theme }) => theme.backgroundImage});
  background-size: cover;
  background-attachment: fixed;
}
#root {
  max-width: 1200px;
  width: 100%;
  margin: auto 0;
  padding: 0 1rem;
}
`;
