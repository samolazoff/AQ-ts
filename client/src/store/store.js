import {configureStore} from '@reduxjs/toolkit';

import langSlice from './slices/langSlice';

export default configureStore({
    reducer: {
        lang: langSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: true
});