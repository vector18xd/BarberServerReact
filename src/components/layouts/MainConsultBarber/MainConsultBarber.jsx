import React from 'react'
// import { ButtonsC } from '../../IU/ButtonsC'
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
        <Search firstClass="busqueda" placeText="What are you looking for?" btnText="Search"/>
        <section className="cards-barberos">
            <article className="cards card1">
                <figure className="figura">
                    <img src={imgGustavo} alt="las vegas" className="img_cards"/>
                </figure>
                <div className="infoBasica">
                    <h3 id="nombre">Gustavo Quintana</h3>
                    <h4 className='info'>Barrio: Limonar</h4>
                    <h4 className='info'>Horario Mañana: 06:00 a 11:30 am</h4>
                    <h4 className='info'>Horario Tarde: 02:00 a 8:00 pm</h4>
                    <h4 className='info'>Estado: Activo</h4>
                </div>
            </article>
            {/* <div class="card card2">
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
            </div> */}
        </section>
    </main>
  )
}
