import { useState } from 'react'
import { Routes, Route } from "react-router"
import Header from "./Sayfalar/Header"
import Anasayfa from "./Sayfalar/Anasayfa"
import Footer from "./Sayfalar/Footer"
import Galeri from "./Sayfalar/Galeri"
import Hakkımızda from "./Sayfalar/Hakkımızda"
import İletişim from "./Sayfalar/İletişim"
import Salon from "./Sayfalar/Salon"
import Salonlarımız from "./Sayfalar/Salonlarımız"
import Teklif from "./Sayfalar/Teklif"
import Layout from './Sayfalar/Layout'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={

          <Layout >
            <Anasayfa />
          </Layout >

        } />

      </Routes>
    </>
  )
}

export default App
