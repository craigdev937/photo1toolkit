import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFav, IFavState, IPhoto } from "../models/Interfaces";

const initialState: IFavState = {
    favStatus: false,
    favorites: localStorage.getItem("myFavs") ? 
    JSON.parse(localStorage.getItem("myFavs")
    || "") : []
};

const FavSlice = createSlice({
    name: "favorites",
    initialState: initialState,
    reducers: {
        addToFavs: (
            state: { favorites: IFav[] }, 
            action: PayloadAction<IFav>
        ) => {
            let favStatus: boolean = false;
            state.favorites = state.favorites.map((item: IFav) => {
                if (item.photo.id === action.payload.photo.id) {
                    favStatus = true;
                    return {...item, amount: item.amount + 1}
                }
                return item;
            });
            if (!favStatus) {
                state.favorites.push(action.payload);
            };
            localStorage.setItem("myFavs", 
                JSON.stringify(state.favorites));
        },
        subFromFavs: (
            state: { favorites: IFav[] },
            action: PayloadAction<IFav>
        ) => {
            state.favorites = state.favorites.filter(
                (item: {photo: IPhoto}) => {
                    return item.photo.id !==
                        action.payload.photo.id;
                });
            localStorage.setItem("myFavs", 
                JSON.stringify(state.favorites)
            );
        },
        changeFavStatus: (state: {favStatus: boolean}) => {
            state.favStatus = !state.favStatus;
        },
        clearAllFavs: (state: {favorites: IFav[]}) => {
            state.favorites = [],
            localStorage.removeItem("myFavs")
        },
    }
});

export const FavActions = FavSlice.actions;
export const FavReducer = FavSlice.reducer;



