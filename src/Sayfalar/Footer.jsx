import React from 'react'
import Logo from "../assets/black.png"
import { useNavigate } from "react-router";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Footer() {

    let navigate = useNavigate()

    return (
        <div className='bg-kalin min-h-[50vh]  '>
            <div className='flex gap-40 pt-12 mx-30   justify-around max-md:flex-col max-md:items-center items-start text-beyaz font-scheherazade '>

                <div className='flex flex-col  gap-5 min-w-[30vh] '>

                    <div className=''>
                        <img src={Logo} className='h-[20vh]    ' />
                    </div>
                    <div className=''>En özel anınıza en şık şekilde eşlik ediyoruz.</div>

                </div>

                <div className='flex flex-col gap-10 items-center'>
                    <div className='text-3xl'>Sosyal</div>
                    <div className='flex flex-col gap-5 font-arial items-center'>
                        <a href='https://www.instagram.com/sultandugunsalonlaribursa/?hl=en'><FaInstagram className='text-3xl hover:text-altin cursor-pointer' /></a>
                        <a href='https://www.facebook.com/sultandugunsalonlaribursa/?locale=tr_TR'><FaFacebook className='text-3xl hover:text-altin cursor-pointer' /></a>
                        <div className='cursor-pointer hover:text-altin' onClick={() => navigate("/Hakkımızda")}>Hakkımızda</div>
                    </div>
                </div>

                <div className='flex flex-col gap-10'>
                    <div className='text-3xl'>İletişim</div>
                    <div className='flex flex-col gap-5 font-arial'>
                        <div>email@hotmail.com</div>
                        <div>email@hotmail.com</div>
                        <div className='flex gap-5'>
                            <div>532 795 54 95</div>
                            <div>532 795 54 95</div>
                        </div>

                    </div>
                </div>



                <div className='flex flex-col gap-10'>
                    <div className='text-3xl'>Salonlarımız</div>
                    <div className='flex flex-col gap-5 font-arial'>

                        <div className='cursor-pointer hover:text-altin' onClick={() => navigate("/Mihribah")}>Mihribah Sultan</div>
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