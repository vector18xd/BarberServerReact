import React,{useEffect, useState} from 'react'
import { Header } from '../../layouts/header'
import { Footer } from '../../layouts/footer'
import { Perfiles } from '../../layouts/PerfilCliente'
import { PerfilTrabajador } from '../../layouts/PerfilTrabajador'

export const Perfil = ({logout}) => {
  const [user, setUser]=useState(null)
  const [rolTF, setrolTF]=useState(null)
  useEffect(()=>{
    const loggedUserJSON = window.localStorage.getItem("loggedNoteAppUser")
    if(loggedUserJSON){
      const rolesD = JSON.parse(loggedUserJSON)
      console.log("->",rolesD);
      console.log("dentrar");
       Greating(rolesD)
      
    }else{
      console.log("Mal");
    }
  },[])
  if(user){
    logout()
    window.localStorage.removeItem("loggedNoteAppUser")
  }
  const Greating = (rolesD)=>{
    let rolT = rolesD.userTrabajador
    let rolC = rolesD.userCliente
    console.log(rolesD);
    if(typeof rolT === "undefined"){
      console.log("Firts");
      if(rolC.Rol === "usuario"){
        console.log("cliente");
        <Perfiles/>
      }else{
        <PerfilTrabajador/>
      }
    ;}else{
      <PerfilTrabajador/>
    };
  }
  
  console.log(rolTF);
  return (
      <div>
        <Header logout={()=>setUser(true)}/>
        <div className="containerNegro">
          {
            <Greating/>
            }
        </div>
        <Footer/>
      </div>
  )
}
