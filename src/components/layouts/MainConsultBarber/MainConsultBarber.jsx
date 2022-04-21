import React from 'react'
import { Button } from '../../IU/buttons'
import imgVanessa from '../../img/Vanessa.jpg'
import imgGustavo from '../../img/Gustavo.jpg'
import imgPedro from '../../img/Pedro.jpg'

export const MainConsultBarber = () => {
  return (
    <main className="mainConsultBarber">
        <section class="webdesigntuts-workshop">
            <form action="" method="">		    
                <input type="search" placeholder="What are you looking for?"/>		    	
                <button>Search</button>
            </form>
        </section>
        <div id="cuadroCard">
            <section className="sec-cardBarberos">
                <article className="cardBarberos">
                    <img src={imgVanessa} alt="imagen de fondo de barberos" className="img-Barbero" />
                    <div className="datos">
                        <h2>Vannesa Perez</h2>
                        <h3>ESTILISTA</h3>
                        <Button text="PERFIL" name="btn-barbero"/>
                    </div>
                </article>
                <article className="cardBarberos">
                    <img src={imgGustavo} alt="imagen de fondo de barberos" className="img-Barbero" />
                    <div className="datos">
                        <h2>Gustavo</h2>
                        <h3>BARBERO</h3>
                        <Button text="PERFIL" name="btn-barbero"/>
                    </div>
                </article>
                <article className="cardBarberos">
                    <img src={imgPedro} alt="imagen de fondo de barberos" className="img-Barbero" />
                    <div className="datos">
                        <h2>Vannesa Perez</h2>
                        <h3>ESTILISTA</h3>
                        <Button text="PERFIL" name="btn-barbero"/>
                    </div>
                </article>
            </section>
        </div>
    </main>
  )
}
