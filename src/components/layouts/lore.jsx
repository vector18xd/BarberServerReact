import React, {useEffect, useState} from 'react'
import "./css/lore.css"
import axios from 'axios'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
export const Lore = ({authenticate}) => {
    useEffect(()=>{
        const loggedUserJSON = window.localStorage.getItem("loggedNoteAppUser")
        if(loggedUserJSON){
            authenticate()
        }
    },[])
    const navigate = useNavigate()
    const change1 = () =>{
        const container = document.getElementById('container');
        container.classList.remove("right-panel-active");
    }
    const change2 = ()=>{
        const container = document.getElementById('container');
        container.classList.add("right-panel-active");
    }
    const [datasL, setDataL]=useState({
        "Email":"",
        "Password":""
    })
    const changeLogin = ({target})=>{
        const {name , value} = target
        setDataL({
            ...datasL, 
            [name]:value
        })
        console.log("->", datasL);
    }
    const login = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:3000/api/login',datasL )
        .then(function (response) {
            console.log(response);
            window.localStorage.setItem(
                "loggedNoteAppUser", JSON.stringify(response.data.data)
            )
            postL()
        })
        .catch(function (error) {
            console.log(error);
            Swal.fire({
                title: '¡¡¡Los datos son erroneos!!!',
                text: '¡Email o Contraseña son incorrectos !',
                icon: 'error',
                confirmButtonColor: '#333',
                background: '#292929',
                color: '#fff',
                confirmButtonAriaLabel: 'Ok',
              })
        });
    }
    const postL = () => {
        authenticate()
        navigate("Loginregister")
    }
    
    const [datasRC, setDataR]=useState({
            "Nombres":"",
            "Apellidos":"",
            "Telefono":"",
            "Email":"",
            "Password":""
    })
    const RegisterCliente = (e) =>{
        
        e.preventDefault()
        const user = document.getElementById("rname").value
        const password = document.getElementById("rpassword").value
        const telefono = document.getElementById("ruser").value
        const apellido = document.getElementById("rapellido").value
        const email = document.getElementById("remail").value
        setDataR(
            datasRC.Nombres=user,
            datasRC.Password=password,
            datasRC.Telefono=telefono,
            datasRC.Apellidos=apellido,
            datasRC.Email=email
        )
        postRC()
    }
    
    const postRC = () =>{
        axios.post('http://localhost:3000/api/register',datasRC)
        .then(function (response) {
            console.log(response);
            Swal.fire({
                title: '¡¡¡Usuario Creado!!!',
                text: '¡Tu cuenta ha sido creada con exito!',
                icon: 'success',
                confirmButtonColor: '#333',
                background: '#292929',
                color: '#fff',
                confirmButtonAriaLabel: 'Ok',
              })
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    function Mover(){
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
                        <label htmlFor="trabajador" className="labelRadio">Trabajador</label>
                        <input type="radio" name='decision' value="cliente" id='cliente' onChange={Regresar} />
                        <label htmlFor="cliente" className="labelRadio">Cliente</label>
                    </div>
                    <button className='buttonform' onClick={RegisterCliente}>Crear Cuenta</button>
                </form>
            </div>
            <div className="form-container sign-in-container">
                <form action="#" className='formlr'>
                    <h1 className='h1form'>Iniciar Sesion</h1>
                    <input type="text" placeholder="Email" id='usname' className='inputform' value={datasL.Email} onChange={changeLogin} name="Email"/>
                    <input type="password" placeholder="Contraseña" id='uspassword' className='inputform'  value={datasL.Password} onChange={changeLogin} name="Password"/>
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
