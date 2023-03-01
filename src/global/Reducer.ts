import { configureStore } from "@reduxjs/toolkit";
import { PhotoReducer } from "./PhotoSlice";
import { FavReducer } from "./FavSlice";

export const Reducer = configureStore({
    reducer: {
        photos: PhotoReducer,
        favorites: FavReducer
    },
});

export type RootState = ReturnType <typeof Reducer.getState>;
export type AppDispatch = typeof Reducer.dispatch;


