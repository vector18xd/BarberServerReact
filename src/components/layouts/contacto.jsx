import React from 'react'
import "./css/contactof.css"
export const Contacto = () => {
	  
	  return (
		<div className='sliderlore'>
			<div className="containerContactform " id="container">
				<div className="form-container sign-in-contacto-container">
					<form action="#" className='formlr'>
						<h1 className='h1form'>Contactenos</h1>
						<input type="text" placeholder="Nombre" id='firstname' className='inputform'/>
						<input type="email" placeholder="E-mail" id='Email' className='inputform'/>
						<input typem="text" id="phone" placeholder="Numero Celular" className='inputform'/>
						<textarea name="text" id="phone" placeholder='Danos más detalles..' cols="30" rows="10" className='inputform'></textarea>
						<button className='buttonform'>Contactar</button>
					</form>
				</div>
			</div>
		</div>
  )
}
