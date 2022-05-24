import React from 'react'
import { Header } from '../../layouts/header'
import { Footer } from '../../layouts/footer'
import { Perfiles } from '../../layouts/perfiles'

export const Perfil = () => {
  return (
      <div>
        <Header/>
        <div className="containerNegro">
          <Perfiles/>
        </div>
        <Footer/>
      </div>
  )
}
