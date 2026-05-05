import React from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo_red.jpeg'

function Header() {

    return (
        <header className='header-container'>
            <NavLink  to="/">
                <img className='logo' src={logo} alt="logo kasa"/>
            </NavLink>
            <nav className="navbar">
                <div className="navlink">
                    <NavLink className="nav" to="/">Accueil</NavLink>
                </div>
                <div className="navlink">
                    <NavLink className="nav" to="About">À Propos</NavLink>
                </div>
            </nav>
        </header>
       ) 
}
export default Header;  