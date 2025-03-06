import React, { useEffect } from 'react';
import backg from "../assets/Slider/slider2.jpg";
import SalonCard from './SalonCard';
import s11 from "../assets/s11.jpg";
import s10 from "../assets/s10.jpg";
import yt from "../assets/yt.jpg";
import { PiFlowerDuotone } from "react-icons/pi";
import Galericard from "./Galericard.jsx"
import f1 from "../assets/Hizmet/1.jpg"
import f2 from "../assets/Hizmet/2.png"
import f3 from "../assets/Hizmet/3.png"
import f4 from "../assets/Hizmet/Düğün1.jpg"
import f5 from "../assets/Hizmet/Nişan1.jpg"




function Düğün() {
    let content = [

        { img: f1 },
        { img: f2 },
        { img: f3 },
        { img: f4 },
        { img: f5 },
        { img: s11 },

        { img: s10 },
        { img: yt },

    ]


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
                    <div>Düğün Organizasyonu</div>
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

            <div className='min-h-[70vh]  max-lg:flex-col flex px-20 max-lg:gap-10 items-center justify-center  '>
                <div className='w-[50%] max-lg:w-full max-lg:flex hidden'>
                    <img src={s11} />
                </div>
                <div className='w-[50%] max-lg:w-full'>
                    <div className='flex flex-col max-lg:w-full gap-5 max-lg:justify-center items-center  '>
                        <div className='text-4xl pb-5'>Düğün Organizasyonu</div>
                        <div>
                            Hayatınızın en özel anını, şık ve ferah salonlarımızda sevdiklerinizle birlikte unutulmaz kılın. Her çiftin hayalini gerçeğe dönüştürmek için uzman ekibimizle birlikte, düğün gününüzde her detay özenle planlanır. Düğün salonlarımızda, sıcak bir atmosferde, konuklarınıza en iyi hizmeti sunarak, siz ve misafirlerinizin mutlu bir şekilde ayrılmasını sağlıyoruz.
                        </div>
                        <div className='text-3xl'>Hizmetlerimiz:</div>
                    </div>
                    <div className='py-2 flex flex-row max-lg:flex-col max-lg:gap-2 items-center justify-center'>
                        <div className='w-[50%] max-lg:w-[90%] flex flex-col gap-2'>
                            <div className='flex gap-2 items-center justify-start w-full  '>
                                <PiFlowerDuotone className='text-2xl w-[10%] h-[5vh]' />
                                <div className='w-[90%]'>1200 kişiye kadar kapasite </div>
                            </div>
                            <div className='flex gap-2 items-center justify-start w-full  '>
                                <PiFlowerDuotone className='text-2xl w-[10%] h-[5vh]' />
                                <div className='w-[90%]'>Bursa manzaralı teras</div>
                            </div>
                            <div className='w-full flex gap-2 items-center '>
                                <PiFlowerDuotone className='text-2xl w-[10%] h-[5vh]' />
                                <div className='w-[90%]'>Gelin odası</div>
                            </div>
                            <div className='flex w-full gap-2 items-center '>
                                <PiFlowerDuotone className='text-2xl w-[10%] h-[5vh]' />
                                <div className='w-[90%]'>Bay/Bayan mescit</div>
                            </div>
                            <div className='flex gap-2 w-full items-center '>
                                <PiFlowerDuotone className='text-2xl w-[10%] h-[5vh]' />
                                <div className='w-[90%]'>Çocuk Oyun Salonu</div>
                            </div>
                        </div>
                        <div className='w-[50%] max-lg:w-[90%] flex flex-col gap-2 '>
                            <div className='flex gap-2 items-center  w-full '>
                                <PiFlowerDuotone className='text-2xl w-[10%] h-[5vh]' />
                                <div className='w-[90%]'>Tek kişilik pasta servisi</div>
                            </div>
                            <div className='flex gap-2 items-center w-full'>
                                <PiFlowerDuotone className='text-2xl w-[10%] h-[5vh]' />
                                <div className='w-[90%]'>Sınırsız video & Fotoğraf çekimi</div>
                            </div>
                            <div className='flex gap-2 items-center '>
                                <PiFlowerDuotone className='text-2xl w-[10%] h-[5vh]' />
                                <div className='w-[90%]'>Palyaço, Hostes</div>
                            </div>
                            <div className='flex gap-2 items-center '>
                                <PiFlowerDuotone className='text-2xl w-[10%] h-[5vh]' />
                                <div className='w-[90%]'>Sorunsuz otopark</div>
                            </div>
                            <div className='flex gap-2 items-center '>
                                <PiFlowerDuotone className='text-2xl w-[10%] h-[5vh]' />
                                <div className='w-[90%]'>Havalandırma, klima ve jeneratör</div>
                            </div>
                            <div className='flex gap-2 items-center '>
                                <PiFlowerDuotone className='text-2xl w-[10%] h-[5vh]' />
                                <div className='w-[90%]'>Son sistem ses ve ışık donanımı</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[50%] max-lg:hidden'>
                    <img src={s11} />
                </div>
            </div>
            <div className='pt-20'>
                <Galericard cont={content} />
            </div>

        </div>
    )
}

export default Düğün;