import React from 'react'
import { Search } from '../../IU/Search'
// import imgVanessa from '../../img/Vanessa.jpg'
import imgGustavo from '../../img/Gustavo.jpg'
// import imgPedro from '../../img/Pedro.jpg'
import "../css/card.css"

export const MainConsultBarber = () => {
  return (
    <main className="mainConsultBarber">
        <Search firstClass="busqueda" placeText="What are you looking for?" btnText="Search"/>
        <section id="main">
            <h2 className="nom-categoria">Barberos</h2>
            <div className="cards-barberos">
                <article className="cards card1">
                    <figure className="figura">
                        <img src={imgGustavo} alt="las vegas" className="img_cards"/>
                    </figure>
                    <div className="elBoton">
                        <button className="btn-VerMas">Ver Más</button>
                    </div>                    
                    <div className="infoBasica">
                        <h3 id="nombre">Gustavo Quintana</h3>
                        <h4 className='info'><b>Barrio:</b> Limonar</h4>
                        <h4 className='info'><b>Horarios:</b> 06:00 a 11:30 am y 02:00 a 8:00 pm</h4>
                        <h4 className='info'><b>Estado:</b> Activo</h4>
                    </div>
                </article>
                <article className="cards card1">
                    <figure className="figura">
                        <img src={imgGustavo} alt="las vegas" className="img_cards"/>
                    </figure>
                    <div className="infoBasica">
                        <h3 id="nombre">Gustavo Quintana</h3>
                        <h4 className='info'><b>Barrio:</b> Limonar</h4>
                        <h4 className='info'><b>Horarios:</b> 06:00 a 11:30 am y 02:00 a 8:00 pm</h4>
                        <h4 className='info'><b>Estado:</b> Activo</h4>
                    </div>
                </article>
                <article className="cards card1">
                    <figure className="figura">
                        <img src={imgGustavo} alt="las vegas" className="img_cards"/>
                    </figure>
                    <div className="infoBasica">
                        <h3 id="nombre">Gustavo Quintana</h3>
                        <h4 className='info'><b>Barrio:</b> Limonar</h4>
                        <h4 className='info'><b>Horarios:</b> 06:00 a 11:30 am y 02:00 a 8:00 pm</h4>
                        <h4 className='info'><b>Estado:</b> Activo</h4>
                    </div>
                </article>
                <article className="cards card1">
                    <figure className="figura">
                        <img src={imgGustavo} alt="las vegas" className="img_cards"/>
                    </figure>
                    <div className="infoBasica">
                        <h3 id="nombre">Gustavo Quintana</h3>
                        <h4 className='info'><b>Barrio:</b> Limonar</h4>
                        <h4 className='info'><b>Horarios:</b> 06:00 a 11:30 am y 02:00 a 8:00 pm</h4>
                        <h4 className='info'><b>Estado:</b> Activo</h4>
                    </div>
                </article>
            </div>
                
        </section>
    </main>
  )
}
