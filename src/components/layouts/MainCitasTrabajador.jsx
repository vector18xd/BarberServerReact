import React from 'react'
import "./css/citas.css"

export const MainCitasTrabajador = () => {
  return (
    <main className="mainCitaTrabajador">
        <div className="ctrCitaTrabajador">
          <section className="citasIzq">
            <h2 className="tituloIzq">TUS CITAS</h2>
            <div className="cardsCitas">
              <article className="cardCita">
                <div className="infoCita">
                  <h3 className="titulo">¡Victor te ha pedido una cita!</h3>
                  <h4 className="txtCita"><b>Nombre completo:</b> Victor Ramirez</h4>
                  <h4 className="txtCita"><b>Fecha:</b> 29/02/2023</h4>
                  <h4 className="txtCita"><b>Hora:</b> 05:30 pm</h4>
                  <h4 className="txtCita"><b><i className="fa fa-whatsapp" aria-hidden="true"></i>:</b> 3213586909</h4>
                  <h4 className="txtCita"><b>Servicio:</b> corte de cabello</h4>
                </div>
                <div className="btnsCita">
                  <button id="btnAceptarCita"><i className="fa fa-check mx-1" id="chulo" aria-hidden="true"></i> Aceptar</button>
                  <button id="btnEditarCita">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-pencil-square" id="editar" viewBox="0 0 16 16">
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                      <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg>
                     Editar
                  </button>
                  <button id="btnRechazarCita">
                    <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-x-square" id="equis" viewBox="0 0 16 16">
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                    Rechazar
                  </button>
                </div>
              </article>
              {/*CARD 2*/}
              {/* <article className="cardCita">
                <div className="infoCita">
                  <h3 className="titulo">¡Victor te ha pedido una cita!</h3>
                  <h4 className="txtCita"><b>Nombre completo:</b> Victor Ramirez</h4>
                  <h4 className="txtCita"><b>Fecha:</b> 29/02/2023</h4>
                  <h4 className="txtCita"><b>Hora:</b> 05:30 pm</h4>
                  <h4 className="txtCita"><b><i className="fa fa-whatsapp" aria-hidden="true"></i>:</b> 3213586909</h4>
                  <h4 className="txtCita"><b>Servicio:</b> corte de cabello</h4>
                </div>
                <div className="btnsCita">
                  <button id="btnAceptarCita"><i className="fa fa-check mx-1" aria-hidden="true"></i> Aceptar</button>
                  <button id="btnEditarCita">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                      <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg>
                     Editar
                  </button>
                  <button id="btnRechazarCita">
                    <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-x-square" viewBox="0 0 16 16">
                      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                    Rechazar
                  </button>
                </div>
              </article> */}
            </div>
          </section>
          <section className="citasFiltro"></section>
        </div>
    </main>
  )
}
