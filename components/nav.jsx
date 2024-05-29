import React, { useState } from "react";
import "./nav.css";
import MenuItems from "./MenuItems";
import { Link } from "react-router-dom";

function Nav() {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };

    return (
        <nav className="navbar">
            <Link to="/" className="no">
            <h1 className="navbar-logo">ORAN</h1>
            </Link>
            <div className="menu-icons" onClick={handleClick}>
                <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link className={item.cName} to={item.url}>
                                <i className={`fas ${item.icon}`}></i>
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default Nav;
