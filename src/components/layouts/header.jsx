import React from "react"
import { NavLink} from "react-router-dom"
import logo from "../../../src/components/img/logo/logo-LetrasBlancas.png"


 export const Header = () =>{
     return(
        <header className="header">
            <div className="imgSlider">
                <img className="imagenLogo" src={logo} alt="Logo"/>
            </div>
            <nav className="NavLink">
                <NavLink to="/"><a className="link">HOME</a></NavLink>
                <NavLink to="/Contact"><a className="link">CONTACT</a></NavLink>
                <NavLink to="/About"><a className="link">ABOUT</a></NavLink>  
                <NavLink to="/Loginregister"><a className="link">LOGIN/REGISTER</a></NavLink> 
            </nav>
        </header>
     )
 }