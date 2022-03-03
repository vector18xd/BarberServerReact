import React from "react";
import { Button } from "../IU/buttons"
import { NavLink, useLocation } from "react-router-dom";
import { Switch } from "../IU/Switch";

 export const Header = () =>{
    const location = useLocation();
    console.log(location.pathname);
    if(location.pathname = '/'){
        document.getElementById('0').style.background = "red";
    }else if(location.pathname = '/Contact'){
        document.getElementById('0').style.background = "green";
    }
     return(
        <header className="header">
            <nav className="NavLink">
                <NavLink to="/"><Button name="Home" text="Home"/></NavLink>
                <NavLink to="/Contact"><Button name="Contact" text="Contact"/></NavLink>
                {/* <NavLink><Button name =  "About" text="About"/></NavLink>  */}
            </nav>
            <nav className="Switch">
                <Switch name="OnOff"  number='0'/>
                <Switch name="OnOff"  number='1'/>
            </nav>
        </header>
     )
 }