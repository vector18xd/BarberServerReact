import  React from "react";
import "./style.css";

export const Button = ({text, event, types}) =>{
    return (
        <button className="lineas" type={types} onClick={event} >{text}</button>
    );
}