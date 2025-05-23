import React, { useState, useEffect } from 'react';
import backg from "../assets/Galeri/Galeripp.jpg";
import Galericard from "./Galericard.jsx";
import SEOHelmet from './SEOHelmet';
import galeri1 from "../assets/Galeri/nurbanu3.jpg";
import galeri2 from "../assets/Galeri/galeri1.jpg";
import galeri3 from "../assets/Galeri/galeri3.jpg";
import galeri4 from "../assets/Galeri/galeri4.jpg";
import galeri5 from "../assets/Galeri/galeri6.jpg";
import galeri6 from "../assets/Galeri/galeri7.jpg";
import galeri7 from "../assets/Galeri/galeri8.jpg";
import galeri8 from "../assets/Galeri/galeri9.jpg";
import galeri9 from "../assets/Galeri/galeri10.jpg";
import galeri10 from "../assets/Galeri/galeri11.jpg";
import galeri11 from "../assets/Galeri/dgn1.jpg";
import galeri12 from "../assets/Galeri/dgn2.jpg";
import galeri13 from "../assets/Galeri/dgn3.jpg";
import galeri14 from "../assets/Galeri/dgn4.jpg";
import galeri15 from "../assets/Galeri/dgn5.jpg";
import f1 from "../assets/Hizmet/1.jpg";
import f2 from "../assets/Hizmet/2.png";
import f3 from "../assets/Hizmet/3.png";
import f4 from "../assets/Hizmet/Düğün1.jpg";
import f5 from "../assets/Hizmet/Nişan1.jpg";
import n1 from "../assets/Salon/nurbanu1.jpg";
import n2 from "../assets/Salon/nurbanu2.jpg";
import h1 from "../assets/Salon/hürrem1.jpg";
import h2 from "../assets/Salon/hürrem2.jpg";
import h3 from "../assets/Salon/hürrem3.jpg";

function Galeri() {
    const [isLoading, setIsLoading] = useState(true); // State to track loading

    const content = [
        { img: galeri12 },
        { img: galeri11 },
        { img: f1 },
        { img: f2 },
        { img: f3 },
        { img: f4 },
        { img: f5 },
        { img: galeri4 },
        { img: galeri14 },
        { img: galeri5 },
        { img: n1 },
        { img: n2 },
        { img: galeri10 },
        { img: galeri1 },
        { img: galeri15 },
        { img: h1 },
        { img: galeri6 },
        { img: galeri7 },
        { img: galeri8 },
        { img: galeri3 },
        { img: h2 },
        { img: galeri2 },
        { img: galeri13 },
        { img: galeri9 },
        { img: h3 },
    ];

    const handleImageLoad = () => {

        const images = document.querySelectorAll("img");
        const loadedImages = Array.from(images).filter(img => img.complete);
        if (loadedImages.length === images.length) {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        // Attach load event to all images
        const images = document.querySelectorAll("img");
        images.forEach((image) => {
            image.addEventListener('load', handleImageLoad);
        });


        return () => {
            images.forEach((image) => {
                image.removeEventListener('load', handleImageLoad);
            });
        };
    }, [content]); // Re-run effect when the content changes

    return (
        <div>
            <SEOHelmet
                title="Galeri | Sultan Düğün Salonları Bursa"
                description="Sultan Düğün Salonları Bursa'da gerçekleştirilen düğün, nişan, kına ve sünnet organizasyonlarından kareler. Sultan Düğün Salonu Bursa, şık dekorasyon ve profesyonel hizmet ile unutulmaz anlar sunar."
                keywords="Sultan Düğün Salonları, Sultan Düğün Salonu, Sultan Düğün Salonu Bursa, Sultan Düğün Salonları Bursa, düğün salonları fotoğrafları, düğün galeri, nişan fotoğrafları, kına gecesi fotoğrafları, salon galeri"
                ogImage={galeri1}
            />
            <div className='min-h-[100vh] bg-beyaz'>
                <div className="relative flex justify-center items-center">
                    <img src={backg} alt="Galeri Arka Planı" className="w-full h-[70vh] max-md:h-[60vh] object-cover opacity-60" />
                    <div className="absolute top-0 left-0 w-full h-60 bg-gradient-to-b from-white to-transparent"></div>
                    <div className='text-7xl max-md:text-5xl max-md:px-10 text-center absolute mt-30 font-scheherazade'>
                        <div>Galeri</div>
                    </div>
                </div>
                <div className='mt-[15vh] flex justify-center items-center flex-col gap-3 pb-30'>
                    <div className='text-sertaltin text-5xl font-scheherazade flex flex-col items-center font-bold'>
                        <div className='font-bold'>
                            <span className='text-7xl'>S</span>ULTA
                            <span className='text-7xl'>N</span>
                        </div>
                        <div className='w-full flex flex-col items-center'>
                            <hr className='text-center w-[150%] max-xs:!w-[120%]' />
                            <hr className='text-center w-[150%] max-xs:!w-[120%]' />
                            <hr className='text-center w-[150%] max-xs:!w-[120%]' />
                            <hr className='text-center w-[150%] max-xs:!w-[120%]' />
                        </div>
                    </div>
                </div>
                <div className='min-h-[100vh]'>

                    {isLoading ? (
                        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-beyaz">
                            <div className="relative">
                                <div className="w-32 h-32 border-4 border-altin/20 rounded-full animate-spin"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-24 h-24 border-4 border-t-4 border-t-altin border-r-amber-200 border-b-white border-l-amber-200 rounded-full animate-spin"></div>
                                </div>
                            </div>
                            <div className="mt-8 text-2xl font-cormorant text-sertaltin animate-pulse">Yükleniyor...</div>
                        </div>
                    ) : (
                        <Galericard cont={content} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Galeri;
