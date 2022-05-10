import React, {useState} from 'react'
import imgGustavo from '../img/Gustavo.jpg'
import './css/card.css'
import "./css/modal.css"
import { Modal } from './Modal'
import imgLocal from "../img/local.jpg"

export const Cards = () => {
  const [estadoModal, cambiarEstadoModal]= useState(true);

  return (
    <article className="cards card1">
        <div className="blur">
            <button className="btn-VerMas" onClick={() => cambiarEstadoModal(!estadoModal)}>Ver Más</button>
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
        <Modal estado={estadoModal} cambiarEstado={cambiarEstadoModal} titulo="Perfil">
            <div className="informacion-modal">
              <figure className="campoimg-modal">
                <img src={imgGustavo} alt="El barbero Gustavo" className="img-vtn"/>
              </figure>
              <div className="infoBasica-modal">
                <h3 id="nombre-modal">Gustavo Quintana</h3>
                <h4 className='info-modal'><b>Especialización:</b> Barbero, peluquero</h4>
                <h4 className='info-modal'><b>Dirección:</b> B/Limonar 3era etapa manzana 6 casa #3</h4>
                <h4 className='info-modal'><b>Horarios:</b> 06:00 a 11:30 am y 02:00 a 8:00 pm</h4>
                <h4 className='info-modal'><b>Estado:</b> Activo</h4>
                <p>Descripción</p>
              </div>
              <div className="calendario">
                
              </div>
            </div>
            {/* <div className="detalles">
              <h4 className='info-modal'><b>Dirección:</b> B/Limonar 3era etapa manzana 6 casa #3</h4>
              <h4 className='info-modal'><b>Horarios:</b> 06:00 a 11:30 am y 02:00 a 8:00 pm</h4>
              <h4 className='info-modal'><b>Estado:</b> Activo</h4>
              <img src={imgLocal} alt="local" className="imgLocal"/>
            </div> */}
            <button onClick={() => cambiarEstadoModal(!estadoModal)} className="btn-cita">Pedir Cita</button>
        </Modal>
    </article>
  )
}
