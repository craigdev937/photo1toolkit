import React from "react";
import { useAppSelector, useAppDispatch } from "../global/Hooks";
import { getPhotos } from "../global/FetchAPI";

export const Photos = () => {
    const [query, setQuery] = React.useState("");
    const dispatch = useAppDispatch();
    const error = useAppSelector((state) => state.photos.error);
    const loading = useAppSelector((state) => state.photos.loading);
    const allPhotos = useAppSelector((state) => state.photos.photos);

    const handleChange = 
    (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleSubmit = 
    (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(getPhotos(query));
        setQuery("");
    };

    if (error) return <h1>Error: {error.message}</h1>;
    if (loading) return <h1>Loading...</h1>;

    return (
        <React.Fragment>
            <h1>Search Photos</h1>
            <section>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        value={query}
                        placeholder="Search for Photos"
                        onChange={handleChange}
                    />
                    <button type="submit">Search</button>
                </form>
            </section>
            {allPhotos.map((photo) => (
                <section key={photo.id}>
                    <h3>{photo.alt_description}</h3>
                    <img 
                        alt={photo.alt_description}
                        src={photo.urls.thumb} 
                    />
                </section>
            ))}
        </React.Fragment>
    );
};



