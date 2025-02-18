import React, { useState } from 'react'
import Logo from "../assets/Logo.jpg"
import { FaBars } from "react-icons/fa";

function Header() {
    let [bar, setbar] = useState(false)


    return (
        <div className='font-arial relative max-h-screen '>
            <div className='shadow-2xl w-[100%] h-[15vh] flex justify-between items-center relative z-20  bg-white '>
                <div className='h-[100%] px-10'>
                    <img className="h-[90%] max-w-screen object-cover p-1" src={Logo} alt='Sultan Logo' />
                </div>
                <div className='px-20 flex gap-12 justify-center items-center text-lg cursor-pointer max-md:hidden'>
                    <div className='hover:text-sertaltin  '>Salonlarımız</div>
                    <div className='hover:text-sertaltin  '>Galeri</div>
                    <div className='hover:text-sertaltin  '>Teklif al</div>
                    <div className='hover:text-sertaltin  ' >İletişim</div>
                    <div className='hover:text-sertaltin  '>Hakkımızda</div>
                </div>
                <div className='hidden max-md:block'>
                    <div onClick={() => setbar(!bar)} className='cursor-pointer text-2xl px-20 '><FaBars /></div>
                </div>

            </div>

            <div className={`flex justify-end transition-all duration-1000 ease-linear w-full absolute min-md:hidden  overflow-hidden ${bar ? "h-[100vh]" : "h-0"} `}>
                <div className={`h-[50vh] gap-12  text-lg w-[20%]  `}>
                    <div className={` flex-col gap-12 justify-center items-center text-lg cursor-pointer h-[100%] flex mr-48 mt-10 `}>
                        <div className='h-[70%] absolute bg-beyaz opacity-75 w-[40%]  '></div>
                        <div className='hover:text-sertaltin z-10  '>Salonlarımız</div>
                        <div className='hover:text-sertaltin z-10  '>Galeri</div>
                        <div className='hover:text-sertaltin  z-10 '>Teklif al</div>
                        <div className='hover:text-sertaltin z-10  ' >İletişim</div>
                        <div className='hover:text-sertaltin z-10  '>Hakkımızda</div>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default Header