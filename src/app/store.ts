import { configureStore } from "@reduxjs/toolkit"; // turns on redux dev store, adds thunk
import counterReducer from '../features/counter/counterSlice';
import { dogsApiSlice } from "../features/dogs/dogsApiSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [dogsApiSlice.reducerPath]: dogsApiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat([dogsApiSlice.middleware]);
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;