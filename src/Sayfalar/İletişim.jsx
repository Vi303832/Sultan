import React, { useEffect } from 'react'
import backg from "../assets/Hakkımızda.jpg"
import Gl from "../assets/Gl.png"
import { MdEmail } from "react-icons/md";
import { RiMapPin2Fill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";


function İletişim() {

    useEffect(() => {
        // Sayfa her render olduğunda sayfanın başına gitmek için scrollTo kullanabiliriz
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='min-h-[100vh] bg-beyaz font-arial'>
            <div className="relative flex justify-center items-center">
                <img src={backg} alt="Background" className="w-full h-[70vh] max-md:h-[60vh]  object-cover opacity-80" />
                <div className="absolute top-0 left-0 w-full h-60  bg-gradient-to-b from-white to-transparent"></div>

            </div>
            <div className='mt-[15vh] flex justify-center items-center flex-col gap-3 '>

                <div className='text-5xl max-md:text-4xl max-md:px-10 text-center font-cormorant'>
                    <div className='flex flex-col justify-center items-center gap-3'>
                        <div className='text-5xl'>İletişim</div>
                        <img src={Gl} className='h-[10vh]' />
                    </div>
                </div>
            </div>

            <div className='min-h-[100vh] w-full overflow-hidden '>
                <div className='flex justify-center max-sm:px-5 px-20 pb-10 text-center'>
                    Salonlarımız, hizmetlerimiz ve daha fazlası hakkında bilgi almak için bizimle hemen iletişime geçin.
                </div>
                <div className='flex gap-5 max-md:flex-col w-full overflow-hidden '>
                    <div className='w-[50%] max-md:w-[90%] flex flex-col gap-10  items-start justfiy-center px-20 max-sm:px-5 pt-5 '>
                        <div className='flex gap-5 justify-center items-center  '>
                            <span> <RiMapPin2Fill className='text-4xl text-altin' /></span><div><div className='text-2xl'>ADRES</div><div className='max-[340px]:!text-sm' >Selamet Mh. Ulubatlı Hasan Blv. No:81-97 Osmangazi/BURSA</div></div>
                        </div>
                        <div className='flex gap-5 justify-center items-center  '>
                            <span> <MdEmail className='text-4xl text-altin' /></span><div><div className='text-2xl '>E-POSTA</div><div className='max-[340px]:!text-sm'>bursasultandugunsalonlari@gmail.com</div></div>
                        </div>
                        <div className='flex gap-5 justify-center items-center '>
                            <span> <FaPhoneAlt className='text-4xl text-altin' /></span><div><div className='text-2xl '>TELEFON</div><div className='max-[340px]:!text-sm'>
                                <div className='flex flex-col gap-2 pt-1'>

                                    <div>0542 202 5781</div>
                                    <div>0224 532 0 532</div>

                                </div>



                            </div></div>
                        </div>
                    </div>

                    <div className='w-[50%] max-md:w-[100%] max-md:pb-10 flex justify-center '>
                        <div className='w-[90%]'>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.6349415338154!2d29.070086!3d40.194936999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca3e6d598aae47%3A0xd2b9a613b16c5604!2sSultan%20Wedding%20Salons!5e0!3m2!1sen!2str!4v1746744737687!5m2!1sen!2str"
                                width="600"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-[400px]"
                            ></iframe>
                        </div>
                    </div>

                </div>

            </div>



        </div>
    )
}

export default İletişim