import React from "react";
export const Search = ({firstClass, placeText, btnText}) =>{
    return(
        <section className={firstClass}>
            <form action="" method="" className="form-busqueda">		    
                <input type="search" placeholder={placeText}/>		   	
                <button>{btnText}</button>
                <select name="opciones" id="seleciona">
                    <option value="tin">Tin</option>
                    <option value="tan">TAN</option>
                </select>
            </form>

            <section className="prueba-section">
                <article className="prueba-article">
                    <input type="search" placeholder={placeText}/>		   	
                    <button>{btnText}</button>
                    <select name="opciones" id="seleciona">
                        <option value="tin">Tin</option>
                        <option value="tan">TAN</option>
                    </select>
                </article>
            </section>
        </section>
    )
}