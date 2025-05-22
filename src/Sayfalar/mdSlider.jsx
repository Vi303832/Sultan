import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';



// Swiper stilleri
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Slider Resimleri
const slides = [
    "https://res.cloudinary.com/dwruhrrkm/image/upload/v1747918873/slider6_yp8zcz.jpg",
    "https://res.cloudinary.com/dwruhrrkm/image/upload/v1747918873/slider1_qposam.jpg",
    "https://res.cloudinary.com/dwruhrrkm/image/upload/v1747918873/slider5_ot8yl7.jpg",
    "https://res.cloudinary.com/dwruhrrkm/image/upload/v1747918874/slider2_wweezi.jpg",
    "https://res.cloudinary.com/dwruhrrkm/image/upload/v1747918874/slider7_qhtvvt.jpg",
    "https://res.cloudinary.com/dwruhrrkm/image/upload/v1747918874/slider3_dawxpv.jpg"
];

function MdSlider() {
    return (
        <div className='w-full h-[500px] px-10'>
            <Swiper
                modules={[EffectCoverflow, Pagination, Autoplay]}
                effect={'coverflow'}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                loop={true}
                spaceBetween={10}
                slidesPerView={2}
                pagination={{
                    clickable: true,
                }}
                centeredSlides={true}
                grabCursor={true}
                coverflowEffect={{
                    rotate: 0,
                    slideShadows: false,
                }}
                className="coverflow"
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

export default MdSlider;
