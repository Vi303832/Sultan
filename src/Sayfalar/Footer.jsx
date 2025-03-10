import React from 'react'
import Logo from "../assets/Logo.png"
import { useNavigate } from "react-router";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Footer() {

    let navigate = useNavigate()

    return (
        <div className='bg-kalin min-h-[50vh]  w-full overflow-hidden  '>
            <div className='flex gap-40 pt-12 mx-30 max-lg:gap-20  justify-around flex-wrap  items-start text-beyaz max-xs:mx-0'>

                <div className='flex flex-col items-center justify-start gap-5 min-w-[30vh] h-[50vh] max-sm:h-[25vh] max-lg:h-[35vh] '>

                    <div className=''>
                        <img src={Logo} className='h-[20vh]    ' />
                    </div>
                    <div className='text-center font-cormorant'>En özel anınıza en şık şekilde eşlik ediyoruz.</div>

                </div>

                <div className='flex flex-col gap-10 items-center h-[50vh]  justify-start max-sm:h-[25vh] '>
                    <div className='text-3xl relative top-5 font-cormorant'>Sosyal</div>
                    <div className='flex flex-col gap-5 font-arial items-center'>
                        <a href='https://www.instagram.com/sultandugunsalonlaribursa/?hl=en'><FaInstagram className='text-3xl hover:text-altin cursor-pointer' /></a>
                        <a href='https://www.facebook.com/sultandugunsalonlaribursa/?locale=tr_TR'><FaFacebook className='text-3xl hover:text-altin cursor-pointer' /></a>
                        <div className='cursor-pointer hover:text-altin' onClick={() => navigate("/Hakkımızda")}>Hakkımızda</div>
                    </div>
                </div>

                <div className='flex flex-col gap-10 h-[50vh] items-center text-center max-sm:h-[25vh]'>
                    <div className='text-3xl relative top-5 font-cormorant'>İletişim</div>
                    <div className='flex flex-col gap-5 font-arial items-center'>
                        <div>bursasultandugunsalonlari@gmail.com</div>
                        <div>0542 202 5781</div>
                        <div>0224 532 0 532</div>
                    </div>
                </div>



                <div className='flex flex-col gap-10 mb-10 h-[50vh]  items-center text-center'>
                    <div className='text-3xl relative top-5 font-cormorant'>Salonlarımız</div>
                    <div className='flex flex-col gap-5 font-arial'>

                        <div className='cursor-pointer hover:text-altin' onClick={() => navigate("/Mihrimah")}>Mihrimah Sultan</div>
                        <div className='cursor-pointer hover:text-altin' onClick={() => navigate("/Kösem")}>Kösem Sultan</div>
                        <div className='cursor-pointer hover:text-altin' onClick={() => navigate("/Nurbanu")}>Nurbanu Sultan</div>
                        <div className='cursor-pointer hover:text-altin' onClick={() => navigate("/Hürrem")}>Hürrem Sultan</div>
                        <div className='cursor-pointer hover:text-altin' onClick={() => navigate("/Valide")}>Valide Sultan</div>




                    </div>
                </div>

            </div>


        </div>
    )
}

export default Footer