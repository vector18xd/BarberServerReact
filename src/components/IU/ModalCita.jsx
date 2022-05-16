import React from 'react'

export const Modal_Cita = () => {
  return (
    <section className="fondo">
        <article className="contenedorModal">
            <section className="btn-cerrar" onClick={() => cambiarEstado(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </section>
            <section className="informacion-modal">
              <article>
                <h3>Agenda tu Cita</h3>
                <label htmlFor=""></label>
                <input type="text" placeholder=""/>
                <label htmlFor=""></label>
                <input type="text" placeholder=""/>
                <label htmlFor=""></label>
                <input type="text" placeholder=""/>
              </article>
              <article></article>
              <article></article>
            </section>
            <button onClick={() => cambiarEstado(false)} className="btn-cita">Pedir Cita</button>
        </article>
    </section>
  )
}
