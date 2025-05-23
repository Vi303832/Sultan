import React, { useEffect } from 'react'
import Heroicon from "../assets/Hero4.png";
import mihribah1 from "../assets/Salon/Mihriba.jpg"


import n2 from "../assets/Salon/nurbanu2.jpg"
import n3 from "../assets/Salon/nurbanu3.jpg"


import mihribah2left from "../assets/Salon/Nurbanuleft.jpg"
import mihribah2right from "../assets/Salon/Nurbanuright.jpg"

import Galericard from "./Galericard.jsx"

import { LuCrown } from "react-icons/lu";
import SEOHelmet from './SEOHelmet';



function Nurbanu() {

    const content = [


        { img: n3 },
        { img: n2 },



    ];

    useEffect(() => {
        // Sayfa her render olduğunda sayfanın başına gitmek için scrollTo kullanabiliriz
        window.scrollTo(0, 0);
    }, []);







    return (
        <>
            <SEOHelmet
                title="Nurbanu Sultan Düğün Salonu | Sultan Düğün Salonları Bursa"
                description="Nurbanu Sultan Düğün Salonu Bursa'da modern ve zarif organizasyonlar için Sultan Düğün Salonları'nın en beğenilen salonlarından biridir. Sultan Düğün Salonu Bursa, beyaz ve modern tasarımıyla öne çıkar."
                keywords="Sultan Düğün Salonları, Sultan Düğün Salonu, Sultan Düğün Salonu Bursa, Sultan Düğün Salonları Bursa, nurbanu sultan, düğün salonu, bursa düğün, modern düğün salonu, beyaz düğün salonu"
                ogImage={n3}
            />
            <div className='bg-beyaz  min-h-screen'>
                <img className='-rotate-45 -top-10 -left-16 absolute max-[360px]:-left-20 max-[520px]:-left-27 ' src={Heroicon} alt="Nurbanu Sultan Hero Görseli" />
                <div className='pt-[25vh] pb-20 max-lg:px-0 max-xs:pt-[40vh]   px-20'>
                    <div className='w-full h-[40vh]  gap-5 justify-center items-center mb-10 hidden max-lg:flex  '>
                        <img src={mihribah2left} className='h-full object-cover hidden max-lg:flex  w-[30%]  rounded-tl-full' alt="Nurbanu Sultan Sol Görsel" />
                        <img src={mihribah2right} className='h-full object-cover  hidden max-lg:flex  w-[30%]  rounded-tr-full' alt="Nurbanu Sultan Sağ Görsel" />
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
                                <div className='text-5xl font-scheherazade text-center '>Nurbanu Sultan</div>

                                <div className='w-[90%] text-center pt-5 max-lg:w-full'>
                                    Nurbanu Salonu, beyazın asaleti ve modern tasarım anlayışıyla buluşturulmuştur. Beyaz kapitone sandalyeler, gümüş suplalar ve gri tonlarındaki halılar ile ferah ve zarif bir ambiyans yaratılmıştır. Kristal avizeler ve şık aydınlatmalar, salonun ışık dengesini tamamlayarak göz alıcı bir ortam sunmaktadır. Aynalar ve dekoratif duvar kağıtları ile derinlik hissi kazandırılan bu alan, davetleriniz için şık ve sofistike bir atmosfer sağlar.

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
                                            Nurbanu Sultan Kaç Kişilik Kapasiteye Sahiptir?
                                        </div>
                                        <div className='w-[50%] text-center max-xs:w-[75%]'>
                                            Nurbanu Sultan Düğün Salonu, 550 kişilik kapasitesiyle geniş ve ferah bir ortamda, tüm davetli listeniz için rahat bir alan sunmaktadır. Şık dekorasyonu ve üstün hizmet kalitesiyle, her tür organizasyona ev sahipliği yapabilecek donanıma sahiptir.
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-5 items-center'>
                                        <div className='text-3xl text-center'>
                                            Nurbanu Sultan Hizmetler Nelerdir ?
                                        </div>
                                        <div className='w-[70%] text-center '>
                                            Zarif detaylarla süslenmiş, modern ve klasik dokunuşların harmanlandığı Nurbanu Salonu, özel günleriniz için büyüleyici bir atmosfer sunar. Göz alıcı avizeleri, şık duvar desenleri ve ferah oturma düzeniyle misafirlerinize konforlu bir deneyim vadeder. Beyaz ve krem tonlarının ağırlıkta olduğu bu salon, zarafeti ve sadeliği ön planda tutarak unutulmaz davetleriniz için kusursuz bir ortam oluşturur.
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {/*SS2*/}

                            <div className='flex flex-col  gap-10 w-[50%]  max-lg:w-full items-center '>

                                <div className='text-3xl text-center'>
                                    Neden Nurbanu Sultan?
                                </div>
                                <div className='flex flex-col  gap-10 w-[50%] items-center'>
                                    <div className='flex items-center justify-center gap-1 w-full'>
                                        <hr className=' w-[40%] text-altin'></hr>
                                        <div className='text-center w-[90%]'>550-600 Arası Kapasite</div>
                                        <hr className=' w-[40%] text-altin'></hr>

                                    </div>
                                    <div className='flex items-center justify-center gap-1 w-full'>
                                        <hr className=' w-[40%] text-altin'></hr>
                                        <div className='text-center w-[90%]'>
                                            Şık ve modern tasarımıyla zarif bir atmosfer
                                        </div>
                                        <hr className=' w-[40%] text-altin'></hr>

                                    </div>
                                    <div className='flex items-center justify-center gap-1 w-full'>
                                        <hr className=' w-[40%] text-altin'></hr>
                                        <div className='text-center w-[90%]'>Geniş ve konforlu oturma düzeni</div>
                                        <hr className=' w-[40%] text-altin'></hr>

                                    </div>

                                    <div className='flex items-center justify-center gap-1 w-full'>
                                        <hr className=' w-[40%] text-altin'></hr>
                                        <div className='text-center w-[90%]'>Özel tasarlanmış lüks iç mimari</div>
                                        <hr className=' w-[40%] text-altin'></hr>

                                    </div>
                                    <div className='flex items-center justify-center gap-1 w-full'>
                                        <hr className=' w-[40%] text-altin'></hr>
                                        <div className='text-center w-[90%]'>Üstün ses ve ışık sistemi ile kusursuz deneyim</div>
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

export default Nurbanu