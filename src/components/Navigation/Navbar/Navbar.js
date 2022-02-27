import React from 'react';
import Brand from '../Brand/Brand';
import "./Navbar.scss"
import menu from "../../images/menu.png"

const Navbar = () => {
    return (
        <div className="Navbar">
            <Brand/>
            <img className="menu-icon" src={menu} alt="Open Menu"/>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#process">Our Process</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    );
};

export default Navbar;