import React from "react";
export const Search = ({firstClass, placeText, btnText}) =>{
    return(
        <section className={firstClass}>
            <form action="" method="">		    
                <input type="search" placeholder={placeText}/>		    	
                <button>{btnText}</button>
            </form>
        </section>
    )
}