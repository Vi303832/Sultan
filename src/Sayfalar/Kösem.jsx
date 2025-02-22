import React from 'react'
import Heroicon from "../assets/Hero4.png";
import mihribah1 from "../assets/Salon/Mihriba.jpg"

import mihribah2left from "../assets/Salon/Kösemleft.jpg"
import mihribah2right from "../assets/Salon/Kösemright.jpg"

import Galericard from "./Galericard.jsx"

import { LuCrown } from "react-icons/lu";



function Kösem() {

    const content = [

        { img: mihribah1 },


    ];







    return (

        <div className='bg-beyaz  min-h-screen'>
            <img className='-rotate-45 -top-10 -left-16 absolute ' src={Heroicon} />
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
                                <div className='w-full flex flex-col items-center'>
                                    <hr className='text-center w-[150%]' />
                                    <hr className='text-center w-[150%]' />
                                    <hr className='text-center w-[150%]' />
                                    <hr className='text-center w-[150%]' />
                                </div>
                            </div>
                            <div className='text-5xl font-scheherazade text-center '>Kösem Sultan</div>

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

                        Sultan Düğün & Toplantı Salonları
                    </div>
                    {/*SS*/}
                    <div className='flex max-lg:flex-col max-lg:gap-10 w-full px-20 max-lg:px-5 '>
                        {/*SS1*/}
                        <div className='w-[50%] justify-center items-center max-lg:w-full'>
                            <div className='flex flex-col gap-10     '>
                                <div className='flex flex-col gap-5 items-center'>
                                    <div className='text-3xl text-center '>
                                        Kösem Sultan Kaç Kişilik Kapasiteye Sahiptir?
                                    </div>
                                    <div className='w-[50%] text-center'>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi perspiciatis numquam voluptatum aliquid veritatis cumque illo optio consequuntur. Doloremque tenetur quas odit, debitis error nobis autem provident ab fugiat quod?
                                    </div>
                                </div>
                                <div className='flex flex-col gap-5 items-center'>
                                    <div className='text-3xl text-center'>
                                        Kösem Sultan Hizmetler Nelerdir ?
                                    </div>
                                    <div className='w-[50%] text-center'>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi perspiciatis numquam voluptatum aliquid veritatis cumque illo optio consequuntur. Doloremque tenetur quas odit, debitis error nobis autem provident ab fugiat quod?
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/*SS2*/}

                        <div className='flex flex-col  gap-10 w-[50%]  max-lg:w-full items-center '>

                            <div className='text-3xl'>
                                Neden Kösem Sultan?
                            </div>
                            <div className='flex flex-col  gap-10 w-[50%] items-center'>
                                <div className='flex items-center justify-center gap-1 w-full'>
                                    <hr className=' w-[40%] text-altin'></hr>
                                    <div className='text-center w-[90%]'>400 Arası Kapasite</div>
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

export default Kösem