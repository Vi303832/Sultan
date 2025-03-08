import React, { useEffect } from 'react'
import Heroicon from "../assets/Hero4.png";
import mihribah1 from "../assets/Salon/Mihriba.jpg"

import h1 from "../assets/Salon/hürrem1.jpg"
import h2 from "../assets/Salon/hürrem2.jpg"
import h3 from "../assets/Salon/hürrem3.jpg"


import mihribah2left from "../assets/Salon/Hürremleft.jpg"
import mihribah2right from "../assets/Salon/Hürremright.jpg"

import Galericard from "./Galericard.jsx"

import { LuCrown } from "react-icons/lu";



function Hürrem() {



    const content = [

        { img: h1 },
        { img: h2 },
        { img: h3 },


    ];



    useEffect(() => {
        // Sayfa her render olduğunda sayfanın başına gitmek için scrollTo kullanabiliriz
        window.scrollTo(0, 0);
    }, []);





    return (

        <div className='bg-beyaz  min-h-screen'>
            <img className='-rotate-45 -top-10 -left-16 absolute overflow-hidden w-[90%] ' src={Heroicon} />
            <div className='pt-[25vh] pb-20 max-lg:px-0    px-20'>
                <div className='w-full h-[40vh]  gap-5 justify-center items-center mb-10 hidden max-lg:flex  '>
                    <img src={mihribah2left} className='h-full object-cover hidden max-lg:flex  w-[30%]  rounded-tl-full' />
                    <img src={mihribah2right} className='h-full object-cover  hidden max-lg:flex  w-[30%]  rounded-tr-full' />
                </div>
                <div className='w-full flex max-lg:flex-col  justify-center items-center  min-h-[80vh]   '>

                    <div className='w-[50%] flex flex-col   max-lg:w-[70%]'>
                        <div className='flex flex-col gap-8 items-center '>
                            <div className='text-sertaltin text-5xl font-scheherazade flex flex-col items-center'>
                                <div className='font-bold'>
                                    <span className='text-7xl'>S</span>ULTA
                                    <span className='text-7xl'>N</span>
                                </div>
                                <div className='w-full flex flex-col items-center  '>
                                    <hr className='text-center w-[150%] max-xs:w-[120%]' />
                                    <hr className='text-center w-[150%] max-xs:w-[120%]' />
                                    <hr className='text-center w-[150%] max-xs:w-[120%]' />
                                    <hr className='text-center w-[150%] max-xs:w-[120%]' />
                                </div>
                            </div>
                            <div className='text-5xl font-scheherazade text-center '>Hürrem Sultan</div>

                            <div className='w-[90%] text-center pt-5 max-lg:w-full'>
                                Salonlarımızı sade ve şık bir tasarımla buluşturuyoruz. Beyaz örtülerin serili olduğu yuvarlak masalarımıza ağırlıklı olarak kapitone tarzdaki sandalyelerimiz eşlik ediyor. Sandalyelerimizin renkleri farklılık gösteriyor ve halılarımız, suplalarımızın renkleri de buna göre seçiliyor. Kahverengi sandalyelerimizin bulunduğu salonda kahve tonlarında suplalar, beyaz sandalyelerin yerleştirildiği alanımıza gümüş suplalar kullanmamız bu uyuma örnek gösterilebilir. Dökümlü şamdanlarımız masalarımızı süsleyen diğer aksesuar. Kristal avizelerimizse salonumuzun ışıltı kaynağı.

                            </div>


                        </div>
                    </div>


                    <div className='w-[50%] h-[80vh]  gap-5 justify-center items-center mb-10 flex max-lg:hidden  '>
                        <img src={mihribah2left} className='h-full object-cover  w-[40%]  rounded-tl-full' />
                        <img src={mihribah2right} className='h-full object-cover   w-[40%]  rounded-tr-full' />
                    </div>


                </div>
                <div>
                    <div className='px-20 text-5xl text-center text-altin font-cormorant max-lg:px-5 font-bold max-lg:py-10 py-30'>

                        Sultan Düğün <span className='max-xs:hidden'>&</span>
                        <div className='hidden max-xs:block'> & </div>
                        Toplantı Salonları
                    </div>
                    {/*SS*/}
                    <div className='flex max-lg:flex-col max-lg:gap-10 w-full px-20 max-lg:px-5 '>
                        {/*SS1*/}
                        <div className='w-[50%] justify-center items-center max-lg:w-full'>
                            <div className='flex flex-col gap-10     '>
                                <div className='flex flex-col gap-5 items-center'>
                                    <div className='text-3xl text-center '>
                                        Hürrem Sultan Kaç Kişilik Kapasiteye Sahiptir?
                                    </div>
                                    <div className='w-[50%] text-center max-xs:w-[75%]'>
                                        Hürrem Sultan Düğün Salonu, 750 kişilik kapasitesiyle geniş ve ferah bir ortamda, tüm davetli listeniz için rahat bir alan sunmaktadır. Şık dekorasyonu ve üstün hizmet kalitesiyle, her tür organizasyona ev sahipliği yapabilecek donanıma sahiptir.
                                    </div>
                                </div>
                                <div className='flex flex-col gap-5 items-center'>
                                    <div className='text-3xl text-center'>
                                        Hürrem Sultan Hizmetler Nelerdir ?
                                    </div>
                                    <div className='w-[50%] text-center max-xs:w-[75%]'>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi perspiciatis numquam voluptatum aliquid veritatis cumque illo optio consequuntur. Doloremque tenetur quas odit, debitis error nobis autem provident ab fugiat quod?
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/*SS2*/}

                        <div className='flex flex-col  gap-10 w-[50%]  max-lg:w-full items-center '>

                            <div className='text-3xl text-center'>
                                Neden Hürrem Sultan?
                            </div>
                            <div className='flex flex-col  gap-10 w-[50%] items-center'>
                                <div className='flex items-center justify-center gap-1 w-full'>
                                    <hr className=' w-[40%] text-altin'></hr>
                                    <div className='text-center w-[90%]'>750-800 Arası Kapasite</div>
                                    <hr className=' w-[40%] text-altin'></hr>

                                </div>
                                <div className='flex items-center justify-center gap-1 w-full'>
                                    <hr className=' w-[40%] text-altin'></hr>
                                    <div className='text-center w-[90%]'>Şık Ve Modern Tasarım</div>
                                    <hr className=' w-[40%] text-altin'></hr>

                                </div>
                                <div className='flex items-center justify-center gap-1 w-full'>
                                    <hr className=' w-[40%] text-altin'></hr>
                                    <div className='text-center w-[90%]'>Büyük Dans Pisti  Kolonsuz Salon</div>
                                    <hr className=' w-[40%] text-altin'></hr>

                                </div>

                                <div className='flex items-center justify-center gap-1 w-full'>
                                    <hr className=' w-[40%] text-altin'></hr>
                                    <div className='text-center w-[90%]'>Açılır Kapanır Tavan Sistemi</div>
                                    <hr className=' w-[40%] text-altin'></hr>

                                </div>
                                <div className='flex items-center justify-center gap-1 w-full'>
                                    <hr className=' w-[40%] text-altin'></hr>
                                    <div className='text-center w-[90%]'>Profesyonel Hizmetler</div>
                                    <hr className=' w-[40%] text-altin'></hr>

                                </div>
                                <div className='text-4xl text-altin'>
                                    <LuCrown />
                                </div>


                            </div>
                        </div>



                    </div>
                    {/*SS*/}

                </div>
                <div className=' max-md:text-4xl max-md:px-10 text-center text-altin font-cormorant font-bold mt-30'>
                    <div className='flex flex-col justify-center items-center gap-5'>
                        <div className='text-6xl text-b'>Galeri</div>
                    </div>
                </div>


                <div className='pt-30 '>
                    <Galericard cont={content} />
                </div>
            </div>
        </div>





    )
}

export default Hürrem