import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Swiper stilleri
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Slider Resimleri
import slider1 from "../assets/Slider/slider1.jpg";
import slider2 from "../assets/Slider/slider2.jpg";
import slider3 from "../assets/Slider/slider3.jpg";
import slider4 from "../assets/Slider/slider4.jpg";
import slider5 from "../assets/Slider/slider5.jpg";
import slider6 from "../assets/Slider/slider6.jpg";
import slider7 from "../assets/Slider/slider7.jpg";

const slides = [slider1, slider2, slider3, slider4, slider5, slider6, slider7];

function SliderComponent() {
    return (
        <div className='w-full h-[500px] px-10'>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={5}
                slidesPerView={3}
                loop={true} // Sonsuz döngü için
                autoplay={{ delay: 2000, disableOnInteraction: false }} // Otomatik geçiş
                navigation
                pagination={{ clickable: true }}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <img src={slide} alt={`Slide ${index + 1}`} className="w-full h-[400px] object-cover rounded-lg shadow-lg" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default SliderComponent;
