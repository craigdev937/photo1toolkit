import { configureStore } from "@reduxjs/toolkit";
import { PhotoReducer } from "./PhotoSlice";

export const Reducer = configureStore({
    reducer: {
        photos: PhotoReducer,
        favorites: () => "Favorite Photos!"
    },
});

export type RootState = ReturnType <typeof Reducer.getState>;
export type AppDispatch = typeof Reducer.dispatch;


