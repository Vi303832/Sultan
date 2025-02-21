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
import Düğün from './Sayfalar/Düğün'
import Kına from './Sayfalar/Kına'
import Sünnet from './Sayfalar/Sünnet'
import Toplantı from './Sayfalar/Toplantı'

import Nişan from './Sayfalar/Nişan'
import Hizmetlerimiz from './Sayfalar/Hizmetlerimiz'
import "./style.css"

function App() {


  return (
    <>
      <Routes>


        <Route path="/" element={

          <Layout >
            <Anasayfa />
          </Layout >

        } />
        <Route path="/Salonlar" element={

          <Layout >
            <Salonlarımız />
          </Layout >

        } />
        <Route path="/Düğün" element={

          <Layout >
            <Düğün />
          </Layout >

        } />
        <Route path="/Kına" element={

          <Layout >
            <Kına />
          </Layout >

        } />
        <Route path="/Nişan" element={

          <Layout >
            <Nişan />
          </Layout >

        } />
        <Route path="/Sünnet" element={

          <Layout >
            <Sünnet />
          </Layout >

        } />
        <Route path="/Toplantı" element={

          <Layout >
            <Toplantı />
          </Layout >

        } />
        <Route path="/Galeri" element={

          <Layout >
            <Galeri />
          </Layout >

        } />
        <Route path="/Teklif" element={

          <Layout >
            <Teklif />
          </Layout >

        } />
        <Route path="/Hizmetlerimiz" element={

          <Layout >
            <Hizmetlerimiz />
          </Layout >

        } />
        <Route path="/İletişim" element={

          <Layout >
            <İletişim />
          </Layout >

        } />
        <Route path="/Hakkımızda" element={

          <Layout >
            <Hakkımızda />
          </Layout >

        } />




      </Routes>
    </>
  )
}

export default App
