import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getPhotos } from "./FetchAPI";
import { IPhoto, IPhotoState } from "../models/Interfaces";

const initialState: IPhotoState = {
    photos: [],
    loading: false,
    error: null
};

const PhotoSlice = createSlice({
    name: "photos",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPhotos.rejected.toString(), 
        (state, action: PayloadAction<IPhotoState>) => {
            state.loading = false,
            state.error = action.payload.error
        });
        builder.addCase(getPhotos.pending, (state) => {
            state.loading = true,
            state.error = null
        });
        builder.addCase(getPhotos.fulfilled.type, 
        (state, action: PayloadAction<IPhoto[]>) => {
            state.loading = false,
            state.photos = [...action.payload]
        });
    },
});

export const PhotoReducer = PhotoSlice.reducer;



