import React from 'react'
import { Header } from '../../layouts/header'
import { Footer } from '../../layouts/footer'
import { MainConsultBarber } from '../../layouts/MainConsultBarber/MainConsultBarber'

export const ConsultBarber = () => {
  return (
    <div>
        <Header />
        <MainConsultBarber />
        <Footer />
    </div>
  )
}
