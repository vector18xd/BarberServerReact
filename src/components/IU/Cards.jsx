import React, {useState} from 'react'
import imgGustavo from '../img/Gustavo.jpg'
import './css/card.css'
import "../layouts/css/modal.css"
// import { ModalPerfil } from '../layouts/ModalPerfil'
import { Modal } from "../layouts/Modal"
import imgLocal from "../img/local.jpg"
// import { Calendario } from '../IU/Calendario'
import { ModalCita } from '../layouts/ModalCita'

export const Cards = () => {
  const [estadoModal, cambiarEstadoModal]= useState(false);
  const [estadoModalCita, cambiarEstadoModalCita]= useState(false);

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
        {/* <ModalPerfil estado={estadoModal} cambiarEstado={cambiarEstadoModal} titulo="Perfil"></ModalPerfil> */}
        <Modal estado={estadoModal} cambiarEstado={cambiarEstadoModal}>
          <section className="contenedor-modal">
            <figure className="campoimg-modal">
              <img src={imgGustavo} alt="El barbero Gustavo" className="img-vtn"/>
            </figure>
            <article className="infoBasica-modal">
              <section className="texto">
                <h3 id="nombre-modal">Gustavo Quintana</h3>
                <h4 className="info-modal"><b>Especialización:</b> Barbero</h4>
                <h4 className="info-modal"><b>Horarios:</b> 06:00 a 11:30 am y 02:00 a 8:00 pm</h4>
                <h4 className="info-modal"><b>Estado:</b> Activo</h4>
                <h4 className="info-modal"><b>Descripción:</b> Activo Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, rerum fugiat! Temporibus officiis magni molestias repellat reprehenderit. Aperiam recusandae labore aspernatur distinctio consectetur aut placeat laudantium. Ex quod fugit eligendi.</h4>
              </section>
              <section className="local">
                <h4 className="info-modal"><b>Dirección:</b> B/Limonar 3era etapa manzana 6 casa #3</h4>
                <img src={imgLocal} alt="imagen Del local" className="imgLocal"/>
              </section>
            </article>
          </section>
          <button onClick={() => cambiarEstadoModalCita(!estadoModalCita)} className="btn-cita">Pedir Cita</button>
        </Modal>
        <ModalCita estadoCita={estadoModalCita} cambiarEstadoCita={cambiarEstadoModalCita} /> 
    </article>
  )
}
