import React from "react";
import { useAppSelector } from "../global/Hooks";

export const Favorites = () => {
    const favIMGs = useAppSelector((state) => state.favorites.favorites)
    
    return (
        <React.Fragment>
            <h1>Favorites</h1>
            {favIMGs.map((fav) => (
                <section key={fav.photo.id}>
                    <h1>{fav.photo.alt_description}</h1>
                    <img
                        alt={fav.photo.alt_description} 
                        src={fav.photo.urls.small} 
                    />
                </section>
            ))}
        </React.Fragment>
    );
};



