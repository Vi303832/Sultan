import React, { useEffect } from 'react'
import backg from "../assets/Hakkımızda.jpg"
import Gl from "../assets/Gl.png"
import { MdEmail } from "react-icons/md";
import { RiMapPin2Fill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";


function İletişim() {

    /* useEffect(() => {
         // Sayfa her render olduğunda sayfanın başına gitmek için scrollTo kullanabiliriz
         window.scrollTo(0, 0);
     }, []);*/

    return (
        <div className='min-h-[100vh] bg-beyaz font-arial'>
            <div className="relative flex justify-center items-center">
                <img src={backg} alt="Background" className="w-full h-[70vh] max-md:h-[60vh]  object-cover opacity-80" />
                <div className="absolute top-0 left-0 w-full h-60  bg-gradient-to-b from-white to-transparent"></div>

            </div>
            <div className='mt-[15vh] flex justify-center items-center flex-col gap-3 '>

                <div className='text-5xl max-md:text-4xl max-md:px-10 text-center font-scheherazade'>
                    <div className='flex flex-col justify-center items-center gap-3'>
                        <div className='text-5xl'>İletişim</div>
                        <img src={Gl} className='h-[10vh]' />
                    </div>
                </div>
            </div>

            <div className='min-h-[100vh] '>
                <div className='flex justify-center px-20 pb-10 text-center'>
                    Salonlarımız, hizmetlerimiz ve daha fazlası hakkında bilgi almak için bizimle hemen iletişime geçin.
                </div>
                <div className='flex gap-5 max-md:flex-col'>
                    <div className='w-[50%] max-md:w-[90%] flex flex-col gap-10  items-start justfiy-center px-20'>
                        <div className='flex gap-5 justify-center items-center '>
                            <span> <RiMapPin2Fill className='text-4xl text-altin' /></span><div><div className='text-2xl'>ADRES</div><div>Selamet Mh. Ulubatlı Hasan Blv. No:81-97 Osmangazi/BURSA</div></div>
                        </div>
                        <div className='flex gap-5 justify-center items-center  '>
                            <span> <MdEmail className='text-4xl text-altin' /></span><div><div className='text-2xl'>E-POSTA</div><div>Sultadüğünsalonları@hotmail.com</div></div>
                        </div>
                        <div className='flex gap-5 justify-center items-center '>
                            <span> <FaPhoneAlt className='text-4xl text-altin' /></span><div><div className='text-2xl'>TELEFON</div><div>Selamet Mh. Ulubatlı Hasan Blv. No:81-97 Osmangazi/BURSA</div></div>
                        </div>
                    </div>

                    <div className='w-[50%]'>
                        şkfşzlkfaldş
                    </div>

                </div>

            </div>



        </div>
    )
}

export default İletişim