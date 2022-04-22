import  React from "react";
import "./styleB.css";

export const Button = ({text, event, types}) =>{
    return (
        <button className="lineas" type={types} onClick={event} >{text}</button>
    );
}