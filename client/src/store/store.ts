import {configureStore} from '@reduxjs/toolkit';

import langSlice from './slices/langSlice';
import permissionsSlice from './slices/permissionsSlice';

export const store = configureStore({
    reducer: {
        lang: langSlice,
        classPermissions: permissionsSlice
    },
    devTools: true
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;