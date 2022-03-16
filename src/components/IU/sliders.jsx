import  React from "react";
import { Button } from "./buttons";
export const Sliders =({classMain, url})=>{
    return (
        <div class="cont">
            <div class="slider"></div>
                <ul class="nav"></ul>
                <div data-target='right' class="side-nav side-nav--right"></div>
                <div data-target='left' class="side-nav side-nav--left"></div>
        </div>
    )
}