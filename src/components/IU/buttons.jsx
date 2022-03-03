import  React from "react";
import "./style.css";

export const Button = ({name, text}) =>{
    return (
        <button className={name} >{text}</button>
    );
}