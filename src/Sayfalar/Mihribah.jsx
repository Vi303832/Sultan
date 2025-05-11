import React, { useEffect } from 'react'
import Heroicon from "../assets/Hero4.png";
import mihribah1 from "../assets/Salon/Mihriba.jpg"
import mihribah2 from "../assets/Salon/mihriba2.jpg"
import mihribah2left from "../assets/Salon/mihribah2left.jpg"
import mihribah2right from "../assets/Salon/mihribah2right.jpg"
import mihribah3 from "../assets/Salon/mihriba3.jpg"
import mihribah4 from "../assets/Salon/mihriba4.jpg"


import mihribah7 from "../assets/Salon/mihriba7.jpg"
import mihribah8 from "../assets/Salon/mihriba8.jpg"
import Galericard from "./Galericard.jsx"

import { LuCrown } from "react-icons/lu";
import SEOHelmet from './SEOHelmet';



function Mihribah() {

    const content = [

        { img: mihribah1 },
        { img: mihribah2 },
        { img: mihribah3 },
        { img: mihribah4 },


        { img: mihribah7 },
        { img: mihribah8 },

    ];


    useEffect(() => {
        // Sayfa her render olduğunda sayfanın başına gitmek için scrollTo kullanabiliriz
        window.scrollTo(0, 0);
    }, []);






    return (
        <>
            <SEOHelmet
                title="Mihrimah Sultan Düğün Salonu"
                description="Mihrimah Sultan Düğün Salonu, şık ve lüks tasarımıyla Bursa'da unutulmaz düğün, nişan ve özel davetler için mükemmel bir atmosfer sunar."
                keywords="mihrimah sultan, düğün salonu, bursa düğün, lüks düğün salonu, nişan, özel davet, sultan düğün salonları"
                ogImage={mihribah1}
            />
            <div className='bg-beyaz  min-h-screen w-full overflow-hidden   '>
                <img className='-rotate-45 -top-10 -left-16 absolute max-[360px]:-left-20 max-[520px]:-left-27 ' src={Heroicon} />
                <div className='pt-[25vh] max-xs:pt-[40vh] pb-20 max-lg:px-0    px-20'>
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
                                <div className='text-5xl font-scheherazade text-center  '>Mihrimah Sultan</div>

                                <div className='w-[90%] text-center pt-5 max-lg:w-full '>
                                    Mihribah Salonu, şık ve lüks tasarımıyla göz kamaştıran bir etkinlik alanıdır. Altın detaylar, zarif şamdanlar ve gösterişli avizeler ile süslenmiş salon, düğün, nişan, kına ve özel davetler için mükemmel bir atmosfer sunar. Özel ışıklandırma sistemleriyle sıcak ve samimi bir ambiyans sağlanırken, geniş oturma düzeni ile konforlu bir organizasyon deneyimi sunar.

                                </div>


                            </div>
                        </div>


                        <div className='w-[50%] h-[80vh]  gap-5 justify-center items-center mb-10 flex max-lg:hidden   '>
                            <img src={mihribah2left} className='h-full object-cover  w-[40%]  rounded-tl-full' />
                            <img src={mihribah2right} className='h-full object-cover   w-[40%]  rounded-tr-full' />
                        </div>


                    </div>
                    <div>
                        <div className='px-20 text-5xl text-center text-altin font-cormorant max-lg:px-5 font-bold max-lg:py-10 py-30 '>

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
                                            Mihrimah Sultan Kaç Kişilik Kapasiteye Sahiptir?
                                        </div>
                                        <div className='w-[50%] text-center max-xs:w-[75%]'>
                                            Mihrimah Sultan Düğün Salonu, 450 kişilik kapasitesiyle geniş ve ferah bir ortamda, tüm davetli listeniz için rahat bir alan sunmaktadır. Şık dekorasyonu ve üstün hizmet kalitesiyle, her tür organizasyona ev sahipliği yapabilecek donanıma sahiptir.
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-5 items-center'>
                                        <div className='text-3xl text-center'>
                                            Mihrimah Sultan Hizmetler Nelerdir ?
                                        </div>
                                        <div className='w-[70%] text-center '>
                                            Mihrimah Sultan Düğün Salonu, gösterişli dekorasyonu ve lüks detaylarıyla özel günlerinizi unutulmaz kılar. Çocuklar için düşünülmüş oyun alanı, minik misafirlerinizin eğlenceli vakit geçirmesini sağlarken, geniş dans pisti özgürce eğlenmek isteyen misafirleriniz için mükemmel bir alan sunar. Özenle tasarlanmış ışıklandırma ve ses sistemleri, her anınızı kusursuz hale getirirken, rahat oturma düzeniyle konuklarınıza keyifli bir deneyim sunar.
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {/*SS2*/}

                            <div className='flex flex-col  gap-10 w-[50%]  max-lg:w-full items-center  '>

                                <div className='text-3xl text-center'>
                                    Neden Mihrimah Sultan?
                                </div>
                                <div className='flex flex-col  gap-10 w-[50%] items-center'>
                                    <div className='flex items-center justify-center gap-1  w-full'>
                                        <hr className=' w-[40%] text-altin'></hr>
                                        <div className='text-center w-[90%]'>450-500 Arası Kapasite</div>
                                        <hr className=' w-[40%] text-altin'></hr>

                                    </div>
                                    <div className='flex items-center justify-center gap-1 w-full'>
                                        <hr className=' w-[40%] text-altin'></hr>
                                        <div className='text-center w-[90%]'>Göz alıcı mimarisiyle zarif bir atmosfer</div>
                                        <hr className=' w-[40%] text-altin'></hr>

                                    </div>
                                    <div className='flex items-center justify-center gap-1 w-full'>
                                        <hr className=' w-[40%] text-altin'></hr>
                                        <div className='text-center w-[90%]'>Ferah ve geniş dans pisti</div>
                                        <hr className=' w-[40%] text-altin'></hr>

                                    </div>

                                    <div className='flex items-center justify-center gap-1 w-full'>
                                        <hr className=' w-[40%] text-altin'></hr>
                                        <div className='text-center w-[90%]'>Çocuklara özel oyun alanı</div>
                                        <hr className=' w-[40%] text-altin'></hr>

                                    </div>
                                    <div className='flex items-center justify-center gap-1 w-full'>
                                        <hr className=' w-[40%] text-altin'></hr>
                                        <div className='text-center w-[90%]'>Gelişmiş ses ve ışık teknolojileri</div>
                                        <hr className=' w-[40%] text-altin'></hr>

                                    </div>
                                    <div className='flex items-center justify-center gap-1 w-full'>
                                        <hr className=' w-[40%] text-altin'></hr>
                                        <div className='text-center w-[90%]'>Davetliler için konforlu oturma düzeni</div>
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
                <div className=' max-md:text-4xl max-md:px-10 text-center text-altin font-cormorant font-bold mt-30 '>
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

export default Mihribah