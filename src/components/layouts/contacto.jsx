import React from 'react'
import { Inputs } from '../IU/inputs' 
import { TA } from '../IU/TA'
import { ButtonsC } from '../IU/buttonsC'
import "../IU/styleF.css"
export const Contacto = () => {
  return (
    <div className='contacto'>
        <div id="contact" className="section wb">
			<div className="containers">
				<div className="section-title row text-center">
					<div className="col-md-8 offset-md-2">
						<small className='smallC'>HAGAMOS UN CONTACTO PARA TU VIDA</small>
						<h3 className='h3C'>Contacto</h3>
					</div>
				</div>

				<div className="row">
					<div className="col-md-8 offset-md-2">
						<div className="contact_form">
							<div id="message"></div>
							<form id="contactform" className="row" action="contact.php" name="contactform" method="post">
								<fieldset className="row row-fluid">
									<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
										<Inputs types="text" idI="first_name" place="Nombre"/>
									</div>
									<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
										<Inputs types="text" idI="last_name" place="Apellido"/>
									</div>
									<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
										<Inputs types="email" idI="email" place="Correo"/>
									</div>
									<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
										<Inputs types="text" idI="phone" place="Numero Celular"/>
									</div>									
									<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
										<TA idI="comments" rowSC="6" place="Danos más detalles.."/>
									</div>
									<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
										<ButtonsC types="submit" idI="submit" text="Enviar"/>
									</div>
								</fieldset>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
    </div>
  )
}
