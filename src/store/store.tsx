import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
	reducer: {},
});

export type AppStore = ReturnType<typeof store.getState>;

export default store;
