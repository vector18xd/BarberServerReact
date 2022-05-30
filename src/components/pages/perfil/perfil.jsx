import React from 'react'
import { Header } from '../../layouts/header'
import { Footer } from '../../layouts/footer'
import { PerfilTrabajador } from '../../layouts/PerfilTrabajador'

export const Perfil = () => {
  return (
      <div>
        <Header/>
        <main className="containerNegro">
          <PerfilTrabajador/>
        </main>
        <Footer/>
      </div>
  )
}
