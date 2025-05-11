import React, { useEffect } from 'react'
import Heroicon from "../assets/Hero4.png";
import mihribah1 from "../assets/Salon/Mihriba.jpg"


import n1 from "../assets/Salon/nurbanu1.jpg"
import n2 from "../assets/Salon/nurbanu2.jpg"
import n3 from "../assets/Salon/nurbanu3.jpg"


import mihribah2left from "../assets/Salon/Valideleft.jpg"
import mihribah2right from "../assets/Salon/Valideright.jpg"

import f2 from "../assets/Hizmet/2.png"
import Galericard from "./Galericard.jsx"

import { LuCrown } from "react-icons/lu";
import SEOHelmet from './SEOHelmet';



function Valide() {

    const content = [



    ];



    useEffect(() => {
        // Sayfa her render olduğunda sayfanın başına gitmek için scrollTo kullanabiliriz
        window.scrollTo(0, 0);
    }, []);





    return (
        <>
            <SEOHelmet
                title="Valide Sultan Düğün Salonu"
                description="Valide Sultan Düğün Salonu, teras katında ferah ve aydınlık ortamı, açılır tavanı ve lüks dekorasyonu ile Bursa'da unutulmaz organizasyonlar için ideal bir mekandır."
                keywords="valide sultan, düğün salonu, bursa düğün, teras düğün salonu, açılır tavan, lüks düğün salonu, sultan düğün salonları"
                ogImage={n1}
            />
            <div className='bg-beyaz  min-h-screen'>
                <img className='-rotate-45 -top-10 -left-16 absolute max-[360px]:-left-20 max-[520px]:-left-27 ' src={Heroicon} />
                <div className='pt-[25vh]  max-xs:pt-[40vh] pb-20 max-lg:px-0    px-20'>
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
                                <div className='text-5xl font-scheherazade text-center '>Valide Sultan</div>

                                <div className='w-[90%] text-center pt-5 max-lg:w-full '>
                                    Valide Salonu, ferah ve aydınlık yapısıyla özel etkinlikler için mükemmel bir mekandır. Teras katta yer alması sayesinde geniş bir manzara sunar ve doğal ışık alır. Üstü açılır tavanı sayesinde açık hava keyfi yaşamak mümkündür. Altın detaylı sandalyeler, zarif çiçek süslemeleri ve büyük şamdanlarla dekore edilen salon, hem gündüz hem de gece organizasyonları için uygundur. Büyük ve geniş yapısıyla konuklarınıza rahat ve nezih bir ortam sunar.

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
                                            Valide Sultan Kaç Kişilik Kapasiteye Sahiptir?
                                        </div>
                                        <div className='w-[50%] text-center max-xs:w-[75%]'>
                                            Valide Sultan Düğün Salonu, 1200 kişilik kapasitesiyle geniş ve ferah bir ortamda, tüm davetli listeniz için rahat bir alan sunmaktadır. Şık dekorasyonu ve üstün hizmet kalitesiyle, her tür organizasyona ev sahipliği yapabilecek donanıma sahiptir.
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-5 items-center'>
                                        <div className='text-3xl text-center'>
                                            Valide Sultan Hizmetler Nelerdir ?
                                        </div>
                                        <div className='w-[70%] text-center'>
                                            Valide Sultan Düğün Salonu, büyüleyici atmosferi ve benzersiz teknolojik donanımları ile öne çıkıyor. Açılır kapanır tavanı sayesinde farklı hava koşullarında bile konforlu bir ortam sunarken, salona araç çıkarma imkanı ile özel organizasyonlarınıza ayrıcalık katıyor. Geniş ve kolonsuz dans pisti, konuklarınıza ferah bir alan sunarken, en son teknolojiye sahip ses ve ışık sistemleri her anınızı daha özel hale getiriyor.
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {/*SS2*/}

                            <div className='flex flex-col  gap-10 w-[50%]  max-lg:w-full items-center '>

                                <div className='text-3xl text-center'>
                                    Neden Valide Sultan?
                                </div>
                                <div className='flex flex-col  gap-10 w-[50%] items-center'>
                                    <div className='flex items-center justify-center gap-1 w-full'>
                                        <hr className=' w-[40%] text-altin'></hr>
                                        <div className='text-center w-[90%]'>1000-1200 Arası Kapasite</div>
                                        <hr className=' w-[40%] text-altin'></hr>

                                    </div>
                                    <div className='flex items-center justify-center gap-1 w-full'>
                                        <hr className=' w-[40%] text-altin'></hr>
                                        <div className='text-center w-[90%]'>Açılır kapanır tavan sistemi ile eşsiz bir atmosfer</div>
                                        <hr className=' w-[40%] text-altin'></hr>

                                    </div>
                                    <div className='flex items-center justify-center gap-1 w-full'>
                                        <hr className=' w-[40%] text-altin'></hr>
                                        <div className='text-center w-[90%]'>Salon içerisine araç çıkarma imkanı sunan asansör sistemi</div>
                                        <hr className=' w-[40%] text-altin'></hr>

                                    </div>

                                    <div className='flex items-center justify-center gap-1 w-full'>
                                        <hr className=' w-[40%] text-altin'></hr>
                                        <div className='text-center w-[90%]'>Büyük ve geniş dans pisti</div>
                                        <hr className=' w-[40%] text-altin'></hr>

                                    </div>
                                    <div className='flex items-center justify-center gap-1 w-full'>
                                        <hr className=' w-[40%] text-altin'></hr>
                                        <div className='text-center w-[90%]'>Özel tasarlanmış lüks iç mimari</div>
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
        </>





    )
}

export default Valide