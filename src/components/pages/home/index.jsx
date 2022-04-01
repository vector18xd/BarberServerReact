import React from "react"
import '../../IU/style.css'
import { Header} from "../../layouts/header"
import { Slider} from "../../layouts/slider"
import { Footer } from "../../layouts/footer"

export const Home = () => {
    return(
        <div className="main">
            <Header/>
            <Slider classT="slider" text="EL SITIO WEB DE LAS BARBERIAS"/> 
            <Footer/>
        </div>
    )
}