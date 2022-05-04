import React, { Fragment } from 'react'

export const Modal = () => {
  return (
    <Fragment>
        <section className="fondo">
            <article className="contenedorModal">
                <div className='encabezadoModal'>
                    <h3>Titulo</h3>
                </div>
                <div className="btn-cerrar">X</div>
            </article>
        </section>
    </Fragment>
  )
}
