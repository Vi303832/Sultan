import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import Heroicon from "../assets/Hero4.png";
import Hero2 from "../assets/Hero2.png";
import SliderComponent from './SliderComponent';
import MdSlider from "./mdSlider"
import SmSlider from './smSlider';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Slider Resimleri
import slider1 from "../assets/Slider/slider1.jpg";
import slider2 from "../assets/Slider/slider2.jpg";
import slider3 from "../assets/Slider/slider3.jpg";
import slider4 from "../assets/Slider/slider4.jpg";
import slider5 from "../assets/Slider/slider5.jpg";
import slider6 from "../assets/Slider/slider6.jpg";
import slider7 from "../assets/Slider/slider7.jpg";

function Anasayfa() {
    const slides = [slider1, slider2, slider3, slider4, slider5, slider6, slider7];

    return (
        <div className='w-[100%] overflow-hidden relative min-h-screen '>
            <img className='-rotate-45 -top-10 -left-16 absolute ' src={Heroicon} />

            <div className='mt-[15vh] flex justify-center items-center h-[70vh]'>
                <div className='flex flex-col gap-5 items-center'>
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
                    <button className='flex gap-2 px-8 py-2 text-beyaz justify-center items-center font-arial text-lg font-light bg-altin opacity-80'>
                        Teklif Alın <FaArrowRightLong />
                    </button>
                </div>
            </div>

            {/* Swiper Slider */}
            <div className='h-[80vh] flex slider-container max-lg:hidden px-10'>
                <SliderComponent />
            </div>
            <div className='h-[80vh] flex slider-container max-md:hidden  px-10'>
                <MdSlider />
            </div>

            <div className='h-[80vh] flex slider-container min-md:hidden px-10'>
                <SmSlider />
            </div>

        </div>
    );
}

export default Anasayfa;
