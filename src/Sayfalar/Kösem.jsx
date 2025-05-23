import React, { useEffect } from 'react'
import Heroicon from "../assets/Hero4.png";
import mihribah1 from "../assets/Salon/Mihriba.jpg"
import kösem1 from "../assets/Salon/Kösem1.jpg"
import kösem2 from "../assets/Salon/kösem2.jpg"
import kösem3 from "../assets/Salon/kösem3.jpg"
import kösem4 from "../assets/Salon/kösem4.jpg"

import mihribah2left from "../assets/Salon/Kösemleft.jpg"
import mihribah2right from "../assets/Salon/Kösemright.jpg"

import Galericard from "./Galericard.jsx"

import SEOHelmet from './SEOHelmet';

import { LuCrown } from "react-icons/lu";



function Kösem() {

    const content = [

        { img: kösem1 },
        { img: kösem2 },
        { img: kösem3 },
        { img: kösem4 },
    ];



    useEffect(() => {
        // Sayfa her render olduğunda sayfanın başına gitmek için scrollTo kullanabiliriz
        window.scrollTo(0, 0);
    }, []);





    return (
        <>
            <SEOHelmet
                title="Kösem Sultan Düğün Salonu | Sultan Düğün Salonları Bursa"
                description="Kösem Sultan Düğün Salonu Bursa'da klasik ve şık organizasyonlar için Sultan Düğün Salonları'nın en özel salonlarından biridir. Sultan Düğün Salonu Bursa, altın tonları ve zarafetiyle öne çıkar."
                keywords="Sultan Düğün Salonları, Sultan Düğün Salonu, Sultan Düğün Salonu Bursa, Sultan Düğün Salonları Bursa, kösem sultan, düğün salonu, bursa düğün, klasik düğün salonu, altın tonları"
                ogImage={kösem1}
            />
            <div className='bg-beyaz  min-h-screen'>
                <img className='-rotate-45 -top-10 -left-16 absolute max-[360px]:-left-20 max-[520px]:-left-27 ' src={Heroicon} alt="Kösem Sultan Hero Görseli" />
                <div className='pt-[25vh] max-xs:pt-[40vh] pb-20 max-lg:px-0    px-20'>
                    <div className='w-full h-[40vh]  gap-5 justify-center items-center mb-10 hidden max-lg:flex  '>
                        <img src={mihribah2left} className='h-full object-cover hidden max-lg:flex  w-[30%]  rounded-tl-full' alt="Kösem Sultan Sol Görsel" />
                        <img src={mihribah2right} className='h-full object-cover  hidden max-lg:flex  w-[30%]  rounded-tr-full' alt="Kösem Sultan Sağ Görsel" />
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
                                <div className='text-5xl font-scheherazade text-center '>Kösem Sultan</div>

                                <div className='w-[90%] text-center pt-5 max-lg:w-full'>
                                    Kösem Salonu, altın tonlarının sıcaklığını ve zarafetini yansıtan ihtişamlı bir atmosfere sahiptir. Kahverengi kapitone sandalyeler, altın suplalar ve sıcak tonlardaki dekorasyon unsurlarıyla klasik bir şıklık oluşturulmuştur. Kırmızı ve altın rengi halılar, aynalar ve duvar kaplamalarıyla uyum içerisindedir. Kristal avizeler, salonun ışıltısını artırırken, dökümlü şamdanlar ve çiçek detayları masalara zarafet katmaktadır.
                                </div>


                            </div>
                        </div>


                        <div className='w-[50%] h-[80vh]  gap-5 justify-center items-center mb-10 flex max-lg:hidden  '>
                            <img src={mihribah2left} className='h-full object-cover  w-[40%]  rounded-tl-full' alt="Kösem Sultan Sol Görsel" />
                            <img src={mihribah2right} className='h-full object-cover   w-[40%]  rounded-tr-full' alt="Kösem Sultan Sağ Görsel" />
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
                                            Kösem Sultan Düğün Salonu, 350 kişilik kapasitesiyle geniş ve ferah bir ortamda, tüm davetli listeniz için rahat bir alan sunmaktadır. Şık dekorasyonu ve üstün hizmet kalitesiyle, her tür organizasyona ev sahipliği yapabilecek donanıma sahiptir.
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-5 items-center'>
                                        <div className='text-3xl text-center'>
                                            Kösem Sultan Hizmetler Nelerdir ?
                                        </div>
                                        <div className='w-[70%] text-center'>
                                            Kösem Sultan Düğün Salonu, misafirlerinize hem konforlu hem de estetik açıdan tatmin edici bir ortam sunar. Özel olarak tasarlanmış oyun odası sayesinde çocuklar için eğlenceli bir alan sağlanırken, kolonsuz geniş alanıyla konuklarınıza özgürce dans etme imkanı sunar. Profesyonel ses ve ışık sistemleri, her organizasyonu unutulmaz bir hale getirirken, rahat oturma düzeni ile misafirlerinize konforlu bir deneyim yaşatır.
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
                                        <div className='text-center w-[90%]'>350-400 Arası Kapasite</div>
                                        <hr className=' w-[40%] text-altin'></hr>

                                    </div>
                                    <div className='flex items-center justify-center gap-1 w-full'>
                                        <hr className=' w-[40%] text-altin'></hr>
                                        <div className='text-center w-[90%]'>Zarif ve modern detaylarla tasarlanmış salon</div>
                                        <hr className=' w-[40%] text-altin'></hr>

                                    </div>
                                    <div className='flex items-center justify-center gap-1 w-full'>
                                        <hr className=' w-[40%] text-altin'></hr>
                                        <div className='text-center w-[90%]'>Kolonsuz geniş dans pisti</div>
                                        <hr className=' w-[40%] text-altin'></hr>

                                    </div>

                                    <div className='flex items-center justify-center gap-1 w-full'>
                                        <hr className=' w-[40%] text-altin'></hr>
                                        <div className='text-center w-[90%]'>Çocuklar için özel oyun odası</div>
                                        <hr className=' w-[40%] text-altin'></hr>

                                    </div>
                                    <div className='flex items-center justify-center gap-1 w-full'>
                                        <hr className=' w-[40%] text-altin'></hr>
                                        <div className='text-center w-[90%]'>Profesyonel ışık ve ses sistemi</div>
                                        <hr className=' w-[40%] text-altin'></hr>

                                    </div>
                                    <div className='flex items-center justify-center gap-1 w-full'>
                                        <hr className=' w-[40%] text-altin'></hr>
                                        <div className='text-center w-[90%]'>Konforlu ve şık oturma düzeni</div>
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

export default Kösem