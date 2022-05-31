import React,{useEffect, useState} from 'react'
import { Header } from '../../layouts/header'
import { Footer } from '../../layouts/footer'
import { Perfiles } from '../../layouts/PerfilCliente'
import { PerfilTrabajador } from '../../layouts/PerfilTrabajador'

export const Perfil = ({logout}) => {
  const [user, setUser]=useState(null)
  const [roles, setRol]=useState(null)
  useEffect(()=>{
    const loggedUserJSON = window.localStorage.getItem("loggedNoteAppUser")
    if(loggedUserJSON){
      const rolesD = JSON.parse(loggedUserJSON)
      greating(rolesD)
    }else{
      console.log("Mal");
    }
  },[])
  if(user){
    logout()
    window.localStorage.removeItem("loggedNoteAppUser")
  }
  const greating = (rolesD)=>{
    let rol = rolesD.userTrabajador
    if(rol === undefined){
      setRol(true)
      console.log("cliente");
    ;}else{
      setRol(false)
      console.log("trabajador->", rol)
    }
      
    
  }
  
  return (
      <div>
        <Header logout={()=>setUser(true)}/>
        <div className="containerNegro">
          {
            !roles &&(<PerfilTrabajador/>)}
            {roles &&(
                  <Perfiles/>
                )}
        </div>
        <Footer/>
      </div>
  )
}
