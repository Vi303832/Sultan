import React from 'react'
import Logo from "../assets/Logo.png"
import { useNavigate } from "react-router";
import { FaInstagram, FaFacebook, FaPhone, FaEnvelope } from "react-icons/fa";

function Footer() {
    let navigate = useNavigate()

    return (
        <footer className="bg-kalin text-beyaz pt-16 pb-8">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center lg:text-left">

                    {/* Logo ve Açıklama */}
                    <div className="flex flex-col items-center lg:items-start">
                        <h2 className="sr-only">Sultan Düğün Salonları</h2>
                        <img src={Logo} alt="Sultan Düğün Salonları" className="h-28 mb-6 cursor-pointer hover:opacity-80 transition-all" />
                        <p className="font-cormorant text-lg opacity-90 cursor-pointer hover:text-altin transition-all">
                            En özel anınıza en şık şekilde eşlik ediyoruz.
                        </p>
                    </div>

                    {/* İletişim Bilgileri */}
                    <div className="flex flex-col items-center lg:items-start">
                        <h2 className="text-2xl font-cormorant mb-8 text-beyaz">İletişim</h2>
                        <div className="flex flex-col gap-5">
                            <div className="flex items-center gap-3 hover:text-altin transition-all cursor-pointer">
                                <FaEnvelope className="text-lg" />
                                <span className="text-sm">bursasultandugunsalonlari@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-3 hover:text-altin transition-all cursor-pointer">
                                <FaPhone className="text-lg" />
                                <span>0542 202 5781</span>
                            </div>
                            <div className="flex items-center gap-3 hover:text-altin transition-all cursor-pointer">
                                <FaPhone className="text-lg" />
                                <span>0224 532 0 532</span>
                            </div>
                        </div>
                    </div>

                    {/* Salonlarımız */}
                    <div className="flex flex-col items-center lg:items-start">
                        <h2 className="text-2xl font-cormorant mb-8 text-beyaz">Salonlarımız</h2>
                        <ul className="flex flex-col gap-4">
                            {[
                                { path: "/Mihrimah", name: "Mihrimah Sultan" },
                                { path: "/Kösem", name: "Kösem Sultan" },
                                { path: "/Nurbanu", name: "Nurbanu Sultan" },
                                { path: "/Hürrem", name: "Hürrem Sultan" },
                                { path: "/Valide", name: "Valide Sultan" }
                            ].map((salon) => (
                                <li key={salon.path}>
                                    <button
                                        onClick={() => navigate(salon.path)}
                                        className="hover:text-altin transition-all duration-300 cursor-pointer"
                                    >
                                        {salon.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Sosyal Medya ve Hakkımızda */}
                    <div className="flex flex-col items-center lg:items-start">
                        <h2 className="text-2xl font-cormorant mb-8 text-beyaz">Sosyal Medya</h2>
                        <div className="flex flex-col gap-6">
                            <div className="flex gap-6">
                                <a href="https://www.instagram.com/sultandugunsalonlaribursa/?hl=en"
                                    className="text-3xl hover:text-altin transition-all duration-300 cursor-pointer"
                                    aria-label="Instagram sayfamızı ziyaret edin">
                                    <FaInstagram />
                                    <span className="sr-only">Instagram</span>
                                </a>
                                <a href="https://www.facebook.com/sultandugunsalonlaribursa/?locale=tr_TR"
                                    className="text-3xl hover:text-altin transition-all duration-300 cursor-pointer"
                                    aria-label="Facebook sayfamızı ziyaret edin">
                                    <FaFacebook />
                                    <span className="sr-only">Facebook</span>
                                </a>
                            </div>
                            <button
                                onClick={() => navigate("/Hakkımızda")}
                                className="hover:text-altin transition-all duration-300 cursor-pointer text-lg"
                            >
                                Hakkımızda
                            </button>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-beyaz border-opacity-40 mt-16 pt-8 text-center">
                    <p className="text-sm opacity-80 hover:text-altin cursor-pointer transition-all">&copy; {new Date().getFullYear()} Sultan Düğün Salonları. Tüm hakları saklıdır.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer