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
                <NavLink to="/"><a className="link">CASA</a></NavLink>
                <NavLink to="/Contact"><a className="link">CONTACTO</a></NavLink>
                <NavLink to="/About"><a className="link">ACERCA DE NOSOTROS</a></NavLink>  
                <NavLink to="/Loginregister"><a className="link">INICIAR SESION</a></NavLink> 
            </nav>
        </header>
     )
 }