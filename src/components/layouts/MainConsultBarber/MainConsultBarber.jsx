import React from 'react'
import { Button } from '../../IU/buttons'
import { Search } from '../../IU/seacrh'
import imgVanessa from '../../img/Vanessa.jpg'
import imgGustavo from '../../img/Gustavo.jpg'
import imgPedro from '../../img/Pedro.jpg'
import "../css/card.css"

export const MainConsultBarber = () => {
  return (
    <main className="mainConsultBarber">
        <Search firstClass="webdesigntuts-workshop" placeText="What are you looking for?" btnText="Search"/>
        {/* <div id="cuadroCard">
            <section className="sec-cardBarberos">
                <article className="cardBarberos">
                    <img src={imgVanessa} alt="imagen de fondo de barberos" className="img-Barbero" />
                    <div className="datos">
                        <h2 className='nameB'>Vannesa Perez</h2>
                        <strong className='nameR'>Rol</strong>
                        <h3>ESTILISTA</h3>
                        <Button text="PERFIL" name="btn-barbero"/>
                    </div>
                </article>
            </section>
        </div> */}
        <div class="cards">
            <div class="card card1">
                <div class="containerB">
                    <button className='btnShowB'>Mostrar Boton</button> 
                    <img src={imgVanessa} alt="las vegas"/>
                </div>
                <div class="details">
                    <h3>Vannesa Perez</h3>
                    <p>Rol: Estilista </p>
                </div>
            </div>
            <div class="card card2">
                <div class="containerB">
                    <img src="newyork.jpg" alt="New York"/>
                </div>
                <div class="details">
                    <h3>New York</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.</p>
                </div>
            </div>
            <div class="card card3">
                <div class="containerB">
                    <img src="singapore.jpg" alt="Singapore"/>
                </div>
                <div class="details">
                    <h3>Singapore</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.</p>
                </div>
            </div>
        </div>
    </main>
  )
}
