import React, { useEffect } from 'react'
import backg from "../assets/Slider/slider2.jpg"
import SalonCard from './SalonCard'


function Salonlarımız() {

    useEffect(() => {
        // Sayfa her render olduğunda sayfanın başına gitmek için scrollTo kullanabiliriz
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='min-h-[100vh] bg-beyaz'>
            <div className="relative flex justify-center items-center">
                <img src={backg} alt="Background" className="w-full h-[70vh] max-md:h-[60vh]  object-cover opacity-60" />
                <div className="absolute top-0 left-0 w-full h-60  bg-gradient-to-b from-white to-transparent"></div>
                <div className='text-7xl max-md:text-5xl max-md:px-10 text-center absolute   mt-30 font-scheherazade  '>
                    <div>Salonlarımız</div>
                </div>
            </div>
            <div className='mt-[15vh] flex justify-center items-center flex-col gap-3 pb-30'>
                <div className='text-sertaltin text-5xl font-scheherazade flex flex-col items-center font-bold'>
                    <div className='font-bold'>
                        <span className='text-7xl'>S</span>ULTA
                        <span className='text-7xl'>N</span>
                    </div>
                    <div className='w-full flex flex-col items-center'>
                        <hr className='text-center w-[150%]' />
                        <hr className='text-center w-[150%]' />
                        <hr className='text-center w-[150%]' />
                        <hr className='text-center w-[150%]' />
                    </div>
                </div>
                <div className='text-5xl max-md:text-4xl max-md:px-10 text-center font-scheherazade'>
                    Sultan Düğün & Toplantı Salonları
                </div>
            </div>
            <div className='min-h-[100vh] '>
                <SalonCard />
            </div>



        </div>
    )
}

export default Salonlarımız