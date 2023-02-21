import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar bg-white fixed-top ">
            <div className="container">
                <a className="navbar-brand text-dark" href="#">
                    <img src={require("./../../images/logo/logo.png")} alt="..." height="36"/>
                 Car Rental</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link text-dark" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-link text-dark" to="/catalogue">Catalogue</NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">Rentals</a>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark" to="/profile">Profile</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;