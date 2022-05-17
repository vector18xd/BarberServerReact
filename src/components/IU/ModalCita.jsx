import React, { Fragment } from 'react'

export const ModalCita = ({estadoCita, cambiarEstadoCita}) => {
  return (
    <Fragment>
      {estadoCita && 
        <section className="fondo">
            <article className="contenedorModal">
                <section className="btn-cerrar" onClick={() => cambiarEstadoCita(false)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </section>
                <section className="informacion-modal">
                  <form className='form_Cita'>
                    <div>  
                      <label>Nombre:</label>
                      <input type="text" name='user_name' />
                    </div>
                    <div>
                      <label>Apellidos:</label>
                      <input type="text" name='user_email' />
                    </div>
                    <div>
                      <label>Telefono: </label>
                      <input type="tel" name='user_email' />
                    </div>
                    <div>
                      <label>Correo: </label>
                      <input type="email" name='user_email' />
                    </div>
                    <div>
                      <label>Descripción del servicio:</label>
                      <textarea name="user_message" id="" cols="30" rows="10"></textarea>
                    </div>
                  </form>
                  <article></article>
                  <article></article>
                </section>
                <button onClick={() => cambiarEstadoCita(false)} className="btn-cita">Pedir Cita</button>
            </article>
        </section>
      }
    </Fragment>
  )
}