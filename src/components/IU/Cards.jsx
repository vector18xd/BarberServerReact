import React from 'react'
import imgGustavo from '../img/Gustavo.jpg'
import './css/card.css'

export const Cards = () => {
  return (
    <article className="cards card1">
        <div className="modal"></div>
        <div className="blur">
            <button className="btn-VerMas">Ver Más</button>
        </div>
        <figure className="figura">
            <img src={imgGustavo} alt="las vegas" className="img_cards"/>
        </figure>
        <div className="infoBasica">
            <h3 id="nombre">Gustavo Quintana</h3>
            <h4 className='info'><b>Barrio:</b> Limonar</h4>
            <h4 className='info'><b>Horarios:</b> 06:00 a 11:30 am y 02:00 a 8:00 pm</h4>
            <h4 className='info'><b>Estado:</b> Activo</h4>
        </div>
    </article>
  )
}
