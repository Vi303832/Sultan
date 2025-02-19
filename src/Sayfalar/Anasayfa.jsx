import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import Heroicon from "../assets/Hero4.png";
import HeroHakkında from "../assets/HeroHakkında.jpg";
import { useNavigate } from "react-router";
import Card from './Card';
import ReCard from './ReCard';
import SliderComponent from './SliderComponent';
import MdSlider from "./mdSlider"
import SmSlider from './smSlider';
import s11 from "../assets/s11.jpg"
import s10 from "../assets/s10.jpg"
import kına from "../assets/kına.jpg"
import YouTubeVideo from './YoutubeVideo';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';








function Anasayfa() {

    let navigate = useNavigate()

    return (
        <div className='w-[100%] overflow-hidden relative min-h-screen '>
            <img className='-rotate-45 -top-10 -left-16 absolute ' src={Heroicon} />

            <div className='mt-[15vh] flex justify-center items-center h-[80vh]'>
                <div className='flex flex-col gap-5 items-center '>
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
                    <div className='text-5xl max-md:text-4xl max-md:px-10 text-center'>
                        Sultan Düğün & Davet & Organizasyon
                    </div>
                    <div className='font-arial text-lg font-light opacity-70'>
                        En özel anınıza en şık şekilde eşlik ediyoruz
                    </div>
                    <button onClick={() => navigate("/Teklif")} className='flex gap-2 px-8 py-2 text-beyaz justify-center items-center font-arial text-lg font-light bg-altin opacity-80'>
                        Teklif Alın <FaArrowRightLong />
                    </button>
                </div>
            </div>

            {/* Swiper Slider */}
            <div className='py-20'>
                <div className='h-[80vh] flex slider-container max-lg:hidden px-10'>
                    <SliderComponent />
                </div>
                <div className='h-[80vh]  slider-container hidden max-lg:flex max-md:hidden   px-10'>
                    <MdSlider />
                </div>

                <div className='h-[80vh] flex slider-container min-md:hidden px-10'>
                    <SmSlider />
                </div>
            </div>
            <div className='flex justify-center items-center gap-10 w-full max-lg:flex-col max-lg:px-5 font-arial px-20 mt-30 mb-60'>
                <div className=' w-[50%] h-full max-lg:w-[80%] '>
                    <img src={HeroHakkında} className='object-contain  ' />
                </div>
                <div className='flex flex-col justify-start max-lg:w-[80%] items-start gap-10 w-[50%] '>
                    <div className='text-5xl text-sertaltin'>
                        Sultan Düğün Salonu Bursa
                    </div>
                    <div className=' opacity-80'>
                        Şehir merkezinde bulunan Sultan Düğün Salonları Osmangazi/Bursa 2015’ten beri çiftlerimizin düğün, nişan, kına gibi en özel günlerine ev sahipliği yapıyor. İçerisinde bulunan 5 düğün salonu seçeneği ve terasıyla konukların ilgisini çekiyor. Uzman aynı zamanda dinamik çalışan kadromuzla davetlilerimizi memnun etmek ve salonumuzdan gülümseyerek ayrılmalarını sağlamak için özen gösteriyoruz. Merkezi bir konumda yer alıyor olmamız ulaşım konusunda büyük bir kolaylığı beraberinde getiriyor..
                    </div>
                    <div>
                        <button onClick={() => navigate("/Salonlar")} className='flex gap-2 px-8 py-2 text-beyaz justify-center items-center font-arial text-lg font-light bg-altin opacity-80'>
                            Salonları İnceleyin <FaArrowRightLong />
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center py-20 '>
                <Card yazı="Sultan Düğün Salonları olarak çiftlerimizin en özel günlerinde yanlarında oluyoruz. Şık ve konforlu salonlarımızda unutulmaz düğün organizasyonları düzenleyerek, hayatınızın en önemli anlarını kusursuz hale getiriyoruz.
                 " başlık="Düğün Organizasyonları" foto={s11} />
                <ReCard yazı="Nişan, çiftlerin evliliğe adım attıkları özel bir tören olarak büyük bir anlam taşır. Sultan Düğün Salonları olarak, şık dekorasyonumuz ve profesyonel ekibimizle nişan organizasyonlarınızı en güzel şekilde planlıyor ve hayata geçiriyoruz." başlık="Nişan Organizasyonları" foto={s10} />
                <Card yazı="Sünnet düğünleri, çocuklarımız için önemli bir dönüm noktasıdır. Geniş ve konforlu salonlarımızda, ailelerimizin tüm ihtiyaçlarını karşılayarak eğlenceli ve unutulmaz sünnet organizasyonları düzenliyoruz." başlık="Sünnet Organizasyonları" foto={"https://cagridugunsalonu.com/wp-content/uploads/2023/08/sunnet.jpg"} />
                <ReCard yazı="Kına gecesi, düğün öncesinde unutulmaz anılar biriktirmenizi sağlayan en özel geleneklerimizden biridir. Sultan Düğün Salonları olarak, bu özel gecenizi en iyi şekilde organize ediyor, şık dekorasyonumuz, profesyonel ekibimiz ve geleneksel dokunuşlarımızla hayallerinizdeki kına gecesini gerçeğe dönüştürüyoruz." başlık="Kına Gecesi Organizasyonları" foto={kına} />
            </div>
            <div className='py-20 h-[150vh] overflow-hidden'>
                <YouTubeVideo />
            </div>


        </div>
    );
}

export default Anasayfa;
