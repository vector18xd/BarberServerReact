import React, {useEffect} from "react";
import { Button } from "../IU/buttons"
import { NavLink, useLocation } from "react-router-dom";

 export const Header = () =>{
    // const location = useLocation();
    // console.log(location.pathname);
    // useEffect(()=>{
    //     color();
    // })
    // const color = () =>{
    //     document.getElementById('cero').style.background = "green";
    // }
     return(
        <header className="header">
            <nav className="NavLink">
                <NavLink to="/"><a className="link">HOME</a></NavLink>
                <NavLink to="/Contact"><a className="link">CONTACT</a></NavLink>
                <NavLink to="/About"><a className="link">ABOUT</a></NavLink>  
                <NavLink to="/Login"><a className="link">LOGIN</a></NavLink>  
            </nav>
        </header>
     )
 }