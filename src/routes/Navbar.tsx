import React from "react";
import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";

export const Navbar = () => {
    return (
        <React.Fragment>
            <nav className="navbar">
                <h3>Photos</h3>
                <ul className="navbar__ul">
                    <Link className="navbar__link" 
                        to="/">Photos
                    </Link>
                    <Link className="navbar__link" 
                        to="/favs">Favorites
                    </Link>
                </ul>
            </nav>
            <Outlet />
        </React.Fragment>
    );
};


