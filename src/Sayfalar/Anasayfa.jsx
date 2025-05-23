import React, { Suspense, lazy } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";


import HeroHakkında from "../assets/HeroHakkında.jpg";
import { useNavigate } from "react-router";
import Card from './Card';
import ReCard from './ReCard';

import s11 from "../assets/s11.jpg"
import s10 from "../assets/s10.jpg"
import sünnet1 from "../assets/sünnet1.jpg"
import nurbanu1 from "../assets/Salon/nurbanu1.jpg"
import cont2 from "../assets/contpic2.png"
import kına from "../assets/kına.jpg"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import SEOHelmet from './SEOHelmet';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Lazy imports
const SliderComponent = lazy(() => import('./SliderComponent'));
const MdSlider = lazy(() => import('./mdSlider'));
const SmSlider = lazy(() => import('./smSlider'));
const YorumSlider = lazy(() => import('./YorumSlider'));
const YouTubeVideo = lazy(() => import('./YoutubeVideo'));

function Anasayfa() {

    let navigate = useNavigate()

    return (
        <div className='w-[100%] overflow-hidden relative min-h-screen bg-beyaz '>
            <SEOHelmet
                title="Sultan Düğün Salonları | Bursa'nın En Şık Düğün, Nişan, Kına ve Toplantı Salonları"
                description="Sultan Düğün Salonları Bursa'da düğün, nişan, kına gecesi, sünnet ve toplantı organizasyonları için modern, şık ve uygun fiyatlı salonlar. Profesyonel ekip, merkezi konum, yüksek müşteri memnuniyeti. Bursa'nın en çok tercih edilen düğün salonu."
                keywords="Sultan Düğün Salonları, Bursa düğün salonu, düğün salonları, nişan salonu, kına gecesi, sünnet düğünü, toplantı salonu, organizasyon, uygun fiyat, modern salon, profesyonel hizmet, Bursa organizasyon, en iyi düğün salonu, merkezi konum, müşteri memnuniyeti"
                ogImage={s11}
            />
            <img className='-rotate-45 -top-10 -left-16 absolute max-[360px]:-left-20 max-[520px]:-left-27 ' src="https://res.cloudinary.com/dwruhrrkm/image/upload/v1747918739/Hero4_nrh84a.png" alt="Sultan Düğün Salonları Hero Görseli" loading="eager" fetchPriority='high' />

            <div className='mt-[15vh] max-xs:mt-[20vh] flex justify-center items-center h-[35vw] max-xl:h-[40vw] max-lg:h-[50vw] m  max-md:h-[60vw] max-sm:h-[70vw]  
              max-xs:!h-[80vw]  max-xxs:!h-[105vw] max-[350px]:!h-[130vw]   '>
                <div className='flex flex-col gap-5 items-center '>
                    <div className='text-sertaltin  text-8xl max-lg:!text-5xl font-scheherazade  flex flex-col items-center'>
                        <h1 className=' '>
                            <span className='text-9xl max-lg:text-7xl'>S</span>
                            ULTA
                            <span className='text-9xl max-lg:text-7xl'>N</span>
                        </h1>
                        <div className='w-full flex flex-col items-center  '>
                            <hr className='text-center w-[150%] max-xs:w-[120%]' />
                            <hr className='text-center w-[150%] max-xs:w-[120%]' />
                            <hr className='text-center w-[150%] max-xs:w-[120%]' />
                            <hr className='text-center w-[150%] max-xs:w-[120%]' />
                        </div>
                    </div>
                    <h2 className='text-5xl max-lg:text-4xl max-md:px-10 text-center font-cormorant'>
                        Sultan Düğün & Toplantı Salonları
                    </h2>
                    <div className='font-arial text-lg font-light opacity-70 text-center   max-md:text-[16px]'>
                        En özel anlarınıza  en şık şekilde  eşlik ediyoruz
                    </div>
                    <button onClick={() => navigate("/Teklif")} className=' cursor-pointer  flex gap-2 px-8 py-2 text-beyaz justify-center items-center font-arial text-lg font-light bg-altin opacity-80'>
                        Teklif Alın <FaArrowRightLong />
                    </button>

                </div>
            </div>

            {/* Swiper Slider 400px*/}
            <div className='py-20   '>
                <div className='h-[80vh] flex slider-container max-lg:hidden px-10'>
                    <Suspense fallback={<div>Yükleniyor...</div>}>
                        <SliderComponent />
                    </Suspense>
                </div>
                <div className='h-[50vw]  slider-container hidden max-lg:flex  max-md:hidden   px-10'>
                    <Suspense fallback={<div>Yükleniyor...</div>}>
                        <MdSlider />
                    </Suspense>
                </div>

                <div className='h-[70vw] max-xxs:h-[130vw] max-xs:h-[100vw]  flex slider-container min-md:hidden px-10 max-xs:px-5 max-xxs:px-2 '>
                    <Suspense fallback={<div>Yükleniyor...</div>}>
                        <SmSlider />
                    </Suspense>
                </div>
            </div>

            <div className='flex justify-center items-center gap-10 w-full  max-lg:flex-col max-lg:px-5 font-arial max-lg:!mt-0 px-20  max-xxs:px-0   max-xs:gap-2  mt-30   max-xxs:!h-[700px]    mb-60 max-sm:!mb-20  '>

                <div className=' w-[50%] h-full max-xs:h-[40vh]      max-lg:w-[80%] flex items-center justify-center overflow-hidden max-xxs:w-full      '>
                    <img src={HeroHakkında} className=' max-xxs:hidden object-contain max-xs:h-full  max-xs:object-cover' alt="Sultan Düğün Salonları Hakkında" loading="lazy" width="600" height="400" />
                </div>

                <div className='max-xxs:block hidden' >
                    <img src={HeroHakkında} alt="Sultan Düğün Salonları Hakkında Mobil" loading="lazy" width="300" height="200" />
                </div>


                <div className='flex flex-col justify-start max-lg:w-[80%]   items-start max-xs:items-center gap-10 max-xs:gap-5 w-[50%] '>
                    <div className='text-5xl text-sertaltin text-center max-xs:text-3xl '>
                        Sultan Düğün Salonları Bursa
                    </div>
                    <div className=' opacity-80 max-xs:text-[16px] max-xs:text-center   max-xs:w-[80vw] max-xxs:w-[95vw]'>
                        Şehir merkezinde bulunan Sultan Düğün Salonları Osmangazi/Bursa 2015'ten beri çiftlerimizin düğün, nişan, kına gibi en özel günlerine ev sahipliği yapıyor. İçerisinde bulunan 5 düğün salonu seçeneği ve terasıyla konukların ilgisini çekiyor. Uzman aynı zamanda dinamik çalışan kadromuzla d    avetlilerimizi memnun etmek ve salonumuzdan gülümseyerek ayrılmalarını sağlamak için özen gösteriyoruz. Merkezi bir konumda yer alıyor olmamız ulaşım konusunda büyük bir kolaylığı beraberinde getiriyor..
                    </div>
                    <div className='max-xs:flex max-xs:w-full max-xs:justify-center'>
                        <button onClick={() => navigate("/Salonlar")} className=' cursor-pointer  max-xxs:px-4 max-xxs:py-2  flex gap-2 px-8 py-2 text-beyaz justify-center items-center font-arial text-lg font-light bg-altin opacity-80  max-xs:text-xl'>
                            Salonları İnceleyin <FaArrowRightLong />
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center pb-20  text-center   '>
                <Card yazı="Sultan Düğün Salonları olarak çiftlerimizin en özel günlerinde yanlarında oluyoruz. Şık ve konforlu salonlarımızda unutulmaz düğün organizasyonları düzenleyerek, hayatınızın en önemli anlarını kusursuz hale getiriyoruz.
                    " başlık="Düğün Organizasyonları" foto={s11} url={"Düğün"} />
                <ReCard yazı="Nişan, çiftlerin evliliğe adım attıkları özel bir tören olarak büyük bir anlam taşır. Sultan Düğün Salonları olarak, şık dekorasyonumuz ve profesyonel ekibimizle nişan organizasyonlarınızı en güzel şekilde planlıyor ve hayata geçiriyoruz." başlık="Nişan Organizasyonları" foto={s10} url={"Nişan"} />
                <Card yazı="Sünnet düğünleri, çocuklarımız için önemli bir dönüm noktasıdır. Geniş ve konforlu salonlarımızda, ailelerimizin tüm ihtiyaçlarını karşılayarak eğlenceli ve unutulmaz sünnet organizasyonları düzenliyoruz." başlık="Sünnet Organizasyonları" foto={sünnet1} url={"Sünnet"} />
                <ReCard yazı="Kına gecesi, düğün öncesinde unutulmaz anılar biriktirmenizi sağlayan en özel geleneklerimizden biridir. Sultan Düğün Salonları olarak, bu özel gecenizi en iyi şekilde organize ediyor, şık dekorasyonumuz, profesyonel ekibimiz ve geleneksel dokunuşlarımızla hayallerinizdeki kına gecesini gerçeğe dönüştürüyoruz." başlık="Kına Gecesi Organizasyonları" foto={kına} url={"Kına"} />
                <Card yazı="Sultan Düğün Salonları olarak, kurumsal etkinlikler ve toplantılar için şık ve konforlu salonlarımızda profesyonel hizmet sunuyoruz. İhtiyaçlarınıza özel düzenlemelerle, toplantılarınızın verimli ve etkileyici geçmesini sağlıyoruz." başlık="Toplantı Organizasyonları" foto={nurbanu1} url={"Toplantı"} />
            </div>
            <div className='pt-10 h-[130vh] max-xs:h-[70vh]  max-xs:pt-0  max-xs:w-full overflow-hidden'>
                <Suspense fallback={<div>Yükleniyor...</div>}>
                    <YouTubeVideo />
                </Suspense>
            </div>

            <div className='flex justify-center items-center   '>
                <div className='px-20  w-[80%] max-lg:w-[100%] max-md:px-0 max-md:h-[110vh] ' >
                    <Suspense fallback={<div>Yükleniyor...</div>}>
                        <YorumSlider />
                    </Suspense>
                </div>
            </div>

            <div className=' hidden max-xxs:!block  max-xxs:h-[10px]'>

            </div>

            <div className='py-20 max-lg:py-10 px-20 w-full max-xxs:py-30 max-md:px-5  flex justify-center items-center  max-xs:px-2' >

                <img src={cont2} className='w-full  max-xs:h-[50vh] max-xxs:h-[60vh] h-[80vh]    object-cover  opacity-90  ' alt="Sultan Düğün Salonları İletişim Banner" loading="lazy" width="1200" height="800" />

                <div className='absolute max-sm:gap-10 flex flex-col max-sm:h-[70vh] max-sm:w-[70%]  max-xs:!h-[40vh]  gap-3 items-center p-10  max-xs:p-0 justify-center max-xs:!w-[80%]   '>

                    <div className='bg-black h-full max-xs:h-[50vh] max-xxs:h-[60vh]   w-full absolute opacity-60  '></div>

                    <div className='text-4xl text-altin z-10 max-xs:text-xl text-center '>En Özel Günlerinizde Yanınızdayız.</div>
                    <div className='text-beyaz text-xl z-10 max-xs:text-[16px] text-center'>İstekleriniz ve teklifler için bize ulaşın.</div>

                    <div className='flex gap-5  max-md:flex-col justify-center items-center'>
                        <button onClick={() => navigate("/Teklif")} className=' z-10 flex gap-2 px-8 py-2 text-beyaz justify-center items-center font-arial text-lg font-light bg-altin max-xs:px-3 max-xs:py-2  opacity-90 cursor-pointer max-xs:text-[16px]'>
                            Teklif Al <FaArrowRightLong />
                        </button>
                        <button onClick={() => navigate("/BeniAra")} className="flex gap-2 text-white px-8 py-2 max-xs:py-2 max-xs:px-3  max-xs:text-[16px]text-beyaz justify-center items-center font-arial text-lg font-light bg-altin opacity-90 cursor-pointer  ">
                            Biz Sizi Arayalım <FaArrowRightLong />
                        </button>
                    </div>

                </div>

            </div>



        </div>
    );
}

export default Anasayfa;
