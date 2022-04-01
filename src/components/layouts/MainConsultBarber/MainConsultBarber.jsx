import React from 'react'
import { Button } from '../../IU/buttons'

export const MainConsultBarber = () => {
  return (
    <main className="mainConsultBarber">
        <div id="cuadroCard">
            <section className="sec-busqueda">
                <div id="divBusqueda">
                    <input></input>
                </div>
            </section>
            <section className="sec-cardBarberos">
                <article className="cardBarberos">
                    <img src="" alt="imagen de fondo de barberos" className="img-Barbero" />
                    <h2>Vannesa Perez</h2>
                    <h3>ESTILISTA</h3>
                    <Button text="PERFIL" name="btn-barbero"/>
                </article>
                <article className="cardBarberos">
                    <img src="" alt="imagen de fondo de barberos" className="img-Barbero" />
                    <h2>Vannesa Perez</h2>
                    <h3>ESTILISTA</h3>
                    <Button text="PERFIL" name="btn-barbero"/>
                </article>
                <article className="cardBarberos">
                    <img src="" alt="imagen de fondo de barberos" className="img-Barbero" />
                    <h2>Vannesa Perez</h2>
                    <h3>ESTILISTA</h3>
                    <Button text="PERFIL" name="btn-barbero"/>
                </article>
            </section>
        </div>
    </main>
  )
}
