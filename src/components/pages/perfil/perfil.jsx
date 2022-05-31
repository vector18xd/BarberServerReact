import React,{useState} from 'react'
import { Header } from '../../layouts/header'
import { Footer } from '../../layouts/footer'
import { Perfiles } from '../../layouts/perfiles'

export const Perfil = ({logout}) => {
  const [user, setUser]=useState(null)
  if(user){
    logout()
    window.localStorage.removeItem("loggedNoteAppUser")
  }
  return (
      <div>
        <Header logout={()=>setUser(true)}/>
        <div className="containerNegro">
          <Perfiles/>
        </div>
        <Footer/>
      </div>
  )
}
