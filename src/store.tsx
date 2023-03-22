
// import { composeWithDevTools } from 'redux-devtools-extension';
import AuthSlice from './Component/Features/AuthSlice';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';

const store = configureStore({
    reducer: {
        username: AuthSlice,
    },
    middleware: [...getDefaultMiddleware(), thunkMiddleware],
});
export default store;