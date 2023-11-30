import {configureStore} from '@reduxjs/toolkit';

import store from '../interfaces/store';

export default configureStore({
    reducer: {},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: true
});