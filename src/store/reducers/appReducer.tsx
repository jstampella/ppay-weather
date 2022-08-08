import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IAppState {
	isLoading: boolean;
	isInitial: boolean;
	darkMode: boolean;
}

const initialState: IAppState = {
	isLoading: false,
	isInitial: true,
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
		setIsLoading: (state: IAppState, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
		setIsInitial: (state: IAppState, action: PayloadAction<boolean>) => {
			state.isInitial = action.payload;
		},
	},
});

export const { toggleDarkMode, setIsLoading, setIsInitial } = appSlice.actions;
export default appSlice.reducer;
