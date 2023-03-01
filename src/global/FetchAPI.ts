import { createAsyncThunk } from "@reduxjs/toolkit";
const api_key = process.env.API_KEY;
const URL = "https://api.unsplash.com/search/photos?client_id";

export const getPhotos = 
createAsyncThunk("photos/getPhotos", 
async (query: string) => {
    const res: Response = 
    await fetch(`${URL}=${api_key}&query=${
        query}&per_page=30`);
    if (!res.ok) throw new Error(res.statusText);
    const data = await res.json();
    console.log(data);
    return [...data.results];
});



