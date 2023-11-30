import {configureStore} from '@reduxjs/toolkit';

import langSlice from './slices/langSlice';

export const store = configureStore({
    reducer: {
        lang: langSlice
    },
    devTools: true
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;