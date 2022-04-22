import React from 'react'
import { Header } from '../../layouts/header'
import { Footer } from '../../layouts/footer'
import { MainConsultBarber } from '../../layouts/MainConsultBarber/MainConsultBarber'
import './estilosBarber.css'
import "./search.css"

export const ConsultBarber = () => {
  return (
    <div id="consultBarber">
        <Header />
        <MainConsultBarber />
        <Footer />
    </div>
  )
}
