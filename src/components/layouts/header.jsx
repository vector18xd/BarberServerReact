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
                <NavLink to="/"><a className="link">INICIO</a></NavLink>
                <NavLink to="/Loginregister"><a className="link">ENTRAR</a></NavLink>
                <NavLink to="/About"><a className="link">SOBRE NOSOTROS</a></NavLink>
                <NavLink to="/ConsultBarber"><a className="link">BARBEROS</a></NavLink>
                <NavLink to="/Contact"><a className="link">CONTACTENOS</a></NavLink>
                <NavLink className="imgP" to="/Perfil"><img className="linkPerfil" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin"/></NavLink>
            </nav>
        </header>
     )
 }