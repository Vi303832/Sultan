import { useState } from 'react'
import { Routes, Route } from "react-router"
import Header from "./Sayfalar/Header"
import Anasayfa from "./Sayfalar/Anasayfa"
import Footer from "./Sayfalar/Footer"
import Galeri from "./Sayfalar/Galeri"
import Mihribah from './Sayfalar/Mihribah'
import Kösem from './Sayfalar/Kösem'
import Valide from './Sayfalar/Valide'
import Hürrem from './Sayfalar/Hürrem'
import Nurbanu from './Sayfalar/Nurbanu'
import BeniAra from './Sayfalar/BeniAra'
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

        <Route path="/BeniAra" element={

          <Layout >
            <BeniAra />
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
        <Route path="/Mihribah" element={

          <Layout >
            <Mihribah />
          </Layout >

        } />
        <Route path="/Kösem" element={

          <Layout >
            <Kösem />
          </Layout >

        } />
        <Route path="/Valide" element={

          <Layout >
            <Valide />
          </Layout >

        } />

        <Route path="/Hürrem" element={

          <Layout >
            <Hürrem />
          </Layout >

        } />

        <Route path="/Nurbanu" element={

          <Layout >
            <Nurbanu />
          </Layout >

        } />


      </Routes>
    </>
  )
}

export default App
