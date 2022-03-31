import React from "react";
import { Header} from "../../layouts/header"
import { Slider} from "../../layouts/slider"
import { Footer } from "../../layouts/footer";
export const Home = () => {
    return(
        <div className="main">
            <Header/>
            <Slider/>
            <Footer/>
        </div>
    )
}