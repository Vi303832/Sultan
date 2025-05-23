import React, { useState, useEffect } from 'react'
import backg from "../assets/Slider/slider2.jpg"
import SalonCard from './SalonCard'
import s11 from "../assets/s11.jpg"
import s10 from "../assets/s10.jpg"
import kına from "../assets/kına.jpg"
import Card from './Card'
import { useNavigate } from "react-router-dom";
import ReCard from './ReCard'
import { FaArrowRightLong } from "react-icons/fa6";
import galeri8 from "../assets/Galeri/galeri9.jpg";
import galeri14 from "../assets/Galeri/dgn4.jpg";
import galeri7 from "../assets/Galeri/galeri8.jpg";
import nurbanu1 from "../assets/Salon/nurbanu1.jpg"
import SEOHelmet from './SEOHelmet';

function Hizmetlerimiz() {
    let navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Sayfa her render olduğunda sayfanın başına gitmek için scrollTo kullanabiliriz
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='min-h-[100vh] bg-beyaz'>
            <SEOHelmet
                title="Hizmetlerimiz | Sultan Düğün Salonları Bursa"
                description="Sultan Düğün Salonları Bursa'da profesyonel düğün, nişan, kına, sünnet ve toplantı organizasyonu hizmetleri. Sultan Düğün Salonu Bursa, en şık ve konforlu salonlarda unutulmaz organizasyonlar sunar."
                keywords="Sultan Düğün Salonları, Sultan Düğün Salonu, Sultan Düğün Salonu Bursa, Sultan Düğün Salonları Bursa, düğün organizasyonu, nişan organizasyonu, kına gecesi, sünnet düğünü, toplantı salonu, hizmetlerimiz, bursa organizasyon"
                ogImage={s11}
            />
            <div className="relative flex justify-center items-center overflow-hidden">
                <img src={backg} alt="Background" className="w-full h-[70vh] max-md:h-[60vh]  object-cover opacity-60" />
                <div className="absolute top-0 left-0 w-full h-60  bg-gradient-to-b from-white to-transparent"></div>
                <div className='text-7xl max-md:text-5xl max-md:px-10 text-center absolute    mt-30 font-scheherazade  '>
                    <div>Hizmetlerimiz</div>
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
                <div className='flex flex-col justify-center items-center pb-20 gap-20  '>
                    <Card yazı="Sultan Düğün Salonları olarak çiftlerimizin en özel günlerinde yanlarında oluyoruz. Şık ve konforlu salonlarımızda unutulmaz düğün organizasyonları düzenleyerek, hayatınızın en önemli anlarını kusursuz hale getiriyoruz.
                 " başlık="Düğün Organizasyonları" foto={s11} url={"Düğün"} />
                    <Card yazı="Nişan, çiftlerin evliliğe adım attıkları özel bir tören olarak büyük bir anlam taşır. Sultan Düğün Salonları olarak, şık dekorasyonumuz ve profesyonel ekibimizle nişan organizasyonlarınızı en güzel şekilde planlıyor ve hayata geçiriyoruz." başlık="Nişan Organizasyonları" foto={s10} url={"Nişan"} />
                    <Card yazı="Sünnet düğünleri, çocuklarımız için önemli bir dönüm noktasıdır. Geniş ve konforlu salonlarımızda, ailelerimizin tüm ihtiyaçlarını karşılayarak eğlenceli ve unutulmaz sünnet organizasyonları düzenliyoruz." başlık="Sünnet Organizasyonları" foto={galeri8} url={"Sünnet"} />
                    <Card yazı="Kına gecesi, düğün öncesinde unutulmaz anılar biriktirmenizi sağlayan en özel geleneklerimizden biridir. Sultan Düğün Salonları olarak, bu özel gecenizi en iyi şekilde organize ediyor, şık dekorasyonumuz, profesyonel ekibimiz ve geleneksel dokunuşlarımızla hayallerinizdeki kına gecesini gerçeğe dönüştürüyoruz." başlık="Kına Gecesi Organizasyonları" foto={kına} url={"Kına"} />
                    <Card yazı="Sultan Düğün Salonları olarak, kurumsal etkinlikler ve toplantılar için şık ve konforlu salonlarımızda profesyonel hizmet sunuyoruz. İhtiyaçlarınıza özel düzenlemelerle, toplantılarınızın verimli ve etkileyici geçmesini sağlıyoruz." başlık="Toplantı Organizasyonları" foto={nurbanu1} url={"Toplantı"} />
                </div>
            </div>
            <div className=' flex justify-center items-center h-[60vh] pb-20 '>
                <div className='flex flex-col gap-5 items-center '>
                    <div className='text-sertaltin text-5xl font-scheherazade flex flex-col items-center'>
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
                        Sultan Düğün & Davet & Organizasyon
                    </div>

                    <div className='flex gap-5 max-md:flex-col justify-center items-center '>
                        <button onClick={() => navigate("/Teklif")} className=' z-10 flex gap-2 px-8 py-2 text-beyaz justify-center items-center font-arial text-lg font-light bg-altin   opacity-80 cursor-pointer '>
                            Teklif Al <FaArrowRightLong />
                        </button>
                        <button onClick={() => navigate("/BeniAra")} className="flex gap-2 px-8 py-2 text-beyaz justify-center items-center font-arial text-lg font-light bg-altin opacity-80 cursor-pointer">
                            Biz Sizi Arayalım <FaArrowRightLong />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hizmetlerimiz