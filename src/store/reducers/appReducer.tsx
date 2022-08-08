import { createSlice } from '@reduxjs/toolkit';

export interface IAppState {
	darkMode: boolean;
}

const initialState: IAppState = {
	darkMode: JSON.parse(localStorage.getItem('darkMode') as string) as boolean,
};

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		toggleDarkMode: (state: IAppState) => {
			localStorage.setItem('darkMode', (!state.darkMode).toString());
			state.darkMode = !state.darkMode;
		},
	},
});

export const { toggleDarkMode } = appSlice.actions;
export default appSlice.reducer;
