import React, { useEffect } from 'react'
import backg from "../assets/Slider/slider2.jpg"
import SalonCard from './SalonCard'
import n1 from "../assets/Salon/nurbanu1.jpg"

import SEOHelmet from './SEOHelmet'


function Salonlarımız() {

    useEffect(() => {
        // Sayfa her render olduğunda sayfanın başına gitmek için scrollTo kullanabiliriz
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='min-h-[100vh] bg-beyaz'>
            <SEOHelmet
                title="Salonlarımız | Sultan Düğün Salonları Bursa"
                description="Sultan Düğün Salonları Bursa'da farklı boyut ve kapasitede 5 ayrı salon. Sultan Düğün Salonu Bursa, Nurbanu, Mihrimah, Kösem, Hürrem ve Valide salonlarıyla her organizasyona özel seçenekler sunar."
                keywords="Sultan Düğün Salonları, Sultan Düğün Salonu, Sultan Düğün Salonu Bursa, Sultan Düğün Salonları Bursa, düğün salonları, nişan salonları, kına salonları, toplantı salonları, bursa salonlar, nurbanu salon, mihrimah salon, kösem salon, hürrem salon, valide salon"
                ogImage={n1}
            />
            <div className="relative flex justify-center items-center overflow-hidden">
                <img src={backg} alt="Background" className="w-full h-[70vh] max-md:h-[60vh]  object-cover opacity-60" />
                <div className="absolute top-0 left-0 w-full h-60  bg-gradient-to-b from-white to-transparent"></div>
                <div className='text-7xl max-md:text-5xl max-md:px-10 text-center absolute   mt-30 font-scheherazade '>
                    <div>Salonlarımız</div>
                </div>
            </div>
            <div className='mt-[15vh] flex justify-center items-center flex-col gap-3 pb-30'>
                <div className='text-sertaltin text-5xl font-scheherazade flex flex-col items-center font-bold'>
                    <div className='font-bold'>
                        <span className='text-7xl'>S</span>ULTA
                        <span className='text-7xl'>N</span>
                    </div>
                    <div className='w-full flex flex-col items-center  '>
                        <hr className='text-center w-[150%] max-xs:!w-[120%]  ' />
                        <hr className='text-center w-[150%] max-xs:!w-[120%] ' />
                        <hr className='text-center w-[150%] max-xs:!w-[120%] ' />
                        <hr className='text-center w-[150%] max-xs:!w-[120%] ' />
                    </div>
                </div>
                <div className='text-5xl max-md:text-4xl max-md:px-10 text-center font-cormorant'>
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