import React, {useState} from 'react'
import "./css/lore.css"
import axios from 'axios'
export const Lore = () => {

    const change1 = () =>{
        const container = document.getElementById('container');
        container.classList.remove("right-panel-active");
    }
    const change2 = ()=>{
        const container = document.getElementById('container');
        container.classList.add("right-panel-active");
    }
    const [datasL, setDataL]=useState({
        form:{
            "Email":"",
            "Password":""
        },
        error:false,
        errorMsg:""
    })
    
    const login = (e) =>{
        e.preventDefault()
        const email = document.getElementById("usname").value
        const password = document.getElementById("uspassword").value
        setDataL(
            datasL.form.Password=password,
            datasL.form.Email=email
        )
        console.log(datasL.form)
        postL()
    }
    const postL = () =>{
        axios.post('http://localhost:3000/api/login',datasL.form )
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    const [datasRC, setDataR]=useState({
        form:{
            "Nombres":"",
            "Apellidos":"",
            "Telefono":"",
            "Email":"",
            "Password":""
        },
        error:false,
        errorMsg:""
    })
    const RegisterCliente = (e) =>{
        e.preventDefault()
        const user = document.getElementById("rname").value
        const password = document.getElementById("rpassword").value
        const telefono = document.getElementById("ruser").value
        const apellido = document.getElementById("rapellido").value
        const email = document.getElementById("remail").value
        setDataR(
            datasRC.form.Nombres=user,
            datasRC.form.Password=password,
            datasRC.form.Telefono=telefono,
            datasRC.form.Apellidos=apellido,
            datasRC.form.Email=email
        )
        console.log(datasRC.form)
        postRC()
    }
    
    const postRC = () =>{
        axios.post('http://localhost:3000/api/register',datasRC.form )
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    function Mover(){
        // const containerForm=document.querySelector(".containerform")
        // containerForm.style.left= "-10em"
        const nuevoForm= document.querySelector(".nuevoForm")
        nuevoForm.classList.add("mostrarFormulario");
        nuevoForm.classList.remove("regresarFormulario");
    }

    function Regresar(){
        const nuevoForm= document.querySelector(".nuevoForm")
        nuevoForm.classList.remove("mostrarFormulario");
        nuevoForm.classList.add("regresarFormulario");
    }
    
  return (
    <div className='sliderlore'>
        <div className="containerform" id="container">
            <div className="form-container sign-up-container">
                <form action="#" className='formlr'>
                    <h1 className='h1form'>Crear Cuenta</h1>
                    <input type="email" placeholder="Gmail" id='remail' className='inputform'/>
                    <input type="text" placeholder="Nombres" id='rname' className='inputform'/>
                    <input type="text" placeholder="Apellidos" id='rapellido' className='inputform'/>
                    <input type="text" placeholder="Telefono" id='ruser' className='inputform'/>
                    <input type="password" placeholder="Contraseña" id='rpassword' className='inputform'/>
                    <div className="radiusB">
                        <input type="radio" name='decision' value="trabajador" id='trabajador' onChange={Mover}/>
                        <label for="trabajador" className="labelRadio">Trabajador</label>
                        <input type="radio" name='decision' value="cliente" id='cliente' onChange={Regresar} />
                        <label for="cliente" className="labelRadio">Cliente</label>
                    </div>
                    <button className='buttonform' onClick={RegisterCliente}>Crear Cuenta</button>
                </form>
            </div>
            <div className="form-container sign-in-container">
                <form action="#" className='formlr'>
                    <h1 className='h1form'>Iniciar Sesion</h1>
                    <input type="text" placeholder="Email" id='usname' className='inputform'/>
                    <input type="password" placeholder="Contraseña" id='uspassword' className='inputform'/>
                    <a href="#" className='aform'>¿Olvidaste tu contraseña?</a>
                    <button className='buttonform' onClick={login}>Iniciar Sesion</button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1 className='h1form'>¡Bienvenido de nuevo!</h1>
                        <p className='pform'>Para mantenerse conectado con nosotros, inicie sesión con su información personal</p>
                        <button className="ghost buttonform" onClick={change1}>Iniciar Sesion</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1 className='h1form'>¡Hola amig@!</h1>
                        <p className='pform'>Ingresa tus datos personales y comienza tu viaje con nosotros</p>
                        <button className="ghost buttonform" onClick={change2}>Crear Cuenta</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="nuevoForm formlr">
            <h1 className='h1form'>Datos Adicionales</h1>
            <input type="text" placeholder="Nombre del local" id='nomLocal' className='inputform'/>
            <input type="text" placeholder="Dirección del Local" id='direccionLocal' className='inputform'/>
            <input type="text" placeholder="Categoria" id='categoria' className='inputform'/>
        </div>
    </div>
  )
}
