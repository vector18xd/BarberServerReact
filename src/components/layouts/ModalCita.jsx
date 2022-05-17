import React, { Fragment } from 'react'
import { Calendario } from '../IU/Calendario'
import Swal from 'sweetalert2';


export const ModalCita = ({estadoCita, cambiarEstadoCita, children}) => {
  function agendar(){
    Swal.fire({
      title: '¡¡¡CITA AGENDADA!!!',
      text: 'Tu Cita a Sido Agendada',
      icon: 'success',
      confirmButtonText: 'Cool'
    })
    cambiarEstadoCita(!estadoCita)
  }
  return (
    <Fragment>
      {estadoCita && 
        <section className="fondo">
            <article className="contenedorModalCita">
                <section className="btn-cerrar" onClick={() => cambiarEstadoCita(false)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </section>
                <section className="contenedor-modal">
                  <div className="info_Cita">
                    <form action="#" className='formlr' id="form_Cita">
                      <h1 className='h1form'>Contactenos</h1>
                      <input type="username" placeholder="Nombre" id='firstname' className='inputform'/>
                      <input type="text" placeholder="Apellidos" id='firstname' className='inputform'/>
                      <input typem="tel" id="phone" placeholder="Numero Celular" className='inputform'/>
                      <input type="email" placeholder="E-mail" id='Email' className='inputform'/>
                      <textarea name="text" placeholder='Describe el servicio que quieres' cols="30" rows="10" className='inputform'></textarea>
                      <button className='buttonform' id="agendar" onClick={agendar}>Contactar</button>
                    </form>
                    <article className="contenedor_calendario">
                      <Calendario className="calendario" />
                    </article>
                  </div>
                  <article className=""></article>
                </section>
                {children}
                {/* <button onClick={() => cambiarEstadoCita(false)} className="btn-cita">Pedir Cita</button> */}
            </article>
        </section>
      }
    </Fragment>
  )
}