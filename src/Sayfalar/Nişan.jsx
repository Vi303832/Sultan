import React, { useEffect } from 'react';
import backg from "../assets/Slider/slider2.jpg";
import SalonCard from './SalonCard';
import s11 from "../assets/s11.jpg";
import s10 from "../assets/s10.jpg"
import {
    FaUsers,
    FaUmbrellaBeach,
    FaDoorOpen,
    FaPrayingHands,
    FaChild,
    FaBirthdayCake,
    FaCamera,
    FaSmile,
    FaParking,
    FaSnowflake,
    FaMusic
} from "react-icons/fa";
import Galericard from "./Galericard.jsx"
import f1 from "../assets/Hizmet/1.jpg"
import f2 from "../assets/Hizmet/2.png"
import f3 from "../assets/Hizmet/3.png"
import f4 from "../assets/Hizmet/Düğün1.jpg"
import f5 from "../assets/Hizmet/Nişan1.jpg"

function Nişan() {
    let content = [
        { img: f1 },
        { img: f2 },
        { img: f3 },
        { img: f4 },
        { img: f5 },
        { img: s11 },
    ]

    const services = [
        { icon: <FaUsers className="text-3xl" />, text: "1200 kişiye kadar kapasite" },
        { icon: <FaUmbrellaBeach className="text-3xl" />, text: "Bursa manzaralı teras" },
        { icon: <FaDoorOpen className="text-3xl" />, text: "Gelin odası" },
        { icon: <FaPrayingHands className="text-3xl" />, text: "Bay/Bayan mescit" },
        { icon: <FaChild className="text-3xl" />, text: "Çocuk Oyun Salonu" },
        { icon: <FaBirthdayCake className="text-3xl" />, text: "Tek kişilik pasta servisi" },
        { icon: <FaCamera className="text-3xl" />, text: "Sınırsız video & Fotoğraf çekimi" },
        { icon: <FaSmile className="text-3xl" />, text: "Palyaço, Hostes" },
        { icon: <FaParking className="text-3xl" />, text: "Sorunsuz otopark" },
        { icon: <FaSnowflake className="text-3xl" />, text: "Havalandırma, klima ve jeneratör" },
        { icon: <FaMusic className="text-3xl" />, text: "Son sistem ses ve ışık donanımı" }
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='min-h-[100vh] bg-beyaz'>
            {/* Hero Section */}
            <div className="relative flex justify-center items-center w-full overflow-hidden">
                <img src={backg} alt="Background" className="w-full h-[70vh] max-md:h-[60vh] object-cover opacity-60" />
                <div className="absolute top-0 left-0 w-full h-60 bg-gradient-to-b from-white to-transparent"></div>
                <div className='text-7xl max-md:text-5xl max-md:px-10 text-center absolute mt-30 font-cormorant text-shadow'>
                    <div>Nişan Organizasyonu</div>
                </div>
            </div>

            {/* Title Section */}
            <div className='mt-[15vh] flex justify-center items-center flex-col gap-3 pb-30'>
                <div className='text-sertaltin text-5xl font-scheherazade flex flex-col items-center font-bold'>
                    <div className='font-bold'>
                        <span className='text-7xl'>S</span>ULTA
                        <span className='text-7xl'>N</span>
                    </div>
                    <div className='w-full flex flex-col items-center'>
                        <hr className='text-center w-[150%] border-sertaltin opacity-30' />
                        <hr className='text-center w-[150%] border-sertaltin opacity-30' />
                        <hr className='text-center w-[150%] border-sertaltin opacity-30' />
                        <hr className='text-center w-[150%] border-sertaltin opacity-30' />
                    </div>
                </div>
                <div className='text-5xl max-md:text-4xl max-md:px-10 text-center font-cormorant'>
                    Sultan Düğün & Toplantı Salonları
                </div>
            </div>

            {/* Content Section */}
            <div className='min-h-[70vh] w-full px-20 max-lg:px-10'>
                {/* Text and Image Row */}
                <div className='flex flex-col lg:flex-row items-start gap-10 mb-10'>
                    {/* Text Content */}
                    <div className='w-full lg:w-1/2'>
                        <div className='flex flex-col gap-5'>
                            <div className='text-5xl pb-5 max-xs:text-center font-cormorant font-bold text-sertaltin'>Nişan Organizasyonu</div>
                            <div className='max-xs:text-center text-lg leading-relaxed'>
                                Nişan, çiftlerin birbirlerine duyduğu sevgiyi, saygıyı ve bağlılığı tüm sevdikleriyle paylaşmalarının anlamlı bir adımıdır. Sultan Düğün Salonları'nda, nişanınızı özel ve unutulmaz kılacak tüm detaylar sizin için özenle hazırlanır. Aileniz ve dostlarınızla birlikte bu mutlu günü kutlamak, şık ve modern bir atmosferde gerçekleşir.
                            </div>
                        </div>
                    </div>

                    {/* Image */}
                    <div className='w-full lg:w-1/2'>
                        <img
                            src={s10}
                            alt="Nişan"
                            className='w-full h-auto rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300'
                        />
                    </div>
                </div>

                {/* Services Section */}
                <div className='w-full'>
                    <div className='text-4xl mb-8 max-sm:text-center font-cormorant font-bold text-sertaltin'>Hizmetlerimiz</div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className='flex items-center gap-4 p-4 rounded-lg hover:bg-sertaltin/10 transition-all duration-300 group'
                            >
                                <div className='text-sertaltin group-hover:scale-110 transition-transform duration-300'>
                                    {service.icon}
                                </div>
                                <div className='text-lg'>{service.text}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Gallery Section */}
            <div className='pt-20'>
                <Galericard cont={content} />
            </div>
        </div>
    )
}

export default Nişan;