import React, { Fragment, useState } from 'react'
import imgGustavo from '../img/Gustavo.jpg'
import imgLocal from '../img/local.jpg'
import { ModalCita } from './ModalCita'

export const ModalPerfil = ({estado, cambiarEstado}) => {
  const [estadoModalCita, cambiarEstadoModalCita]= useState(false);
  // const tin= document.getElementById("btn-cita")
  // tin.addEventListener('click', AbrirModal)

  // function AbrirModal(){
  //   cambiarEstadoModal2(!estadoModal2)
  // }
  
  return (
    <Fragment>
        {estado && 
          <section className="fondo">
              <article className="contenedorModal">
                  <section className="btn-cerrar" onClick={() => cambiarEstado(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                  </section>
                  <section className="informacion-modal">
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
              </article>
              <ModalCita estadoCita={estadoModalCita} cambiarEstadoCita={cambiarEstadoModalCita} />
          </section>
        }
    </Fragment>
  )
}

// import React, { Fragment, useState } from 'react'
// import imgGustavo from '../img/Gustavo.jpg'
// import imgLocal from '../img/local.jpg'
// import Calendar from 'react-calendar'
// import 'react-calendar/dist/Calendar.css';
// // import { Agendamientos } from "../layouts/agendamientos"

// export const Modal = ({estado, cambiarEstado}) => {
//   const [value, onChange] = useState(new Date());
