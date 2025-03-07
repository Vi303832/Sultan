import React, { useEffect } from 'react'
import backg from "../assets/Galeri/Galeripp.jpg"
import Galericard from "./Galericard.jsx"
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
import f1 from "../assets/Hizmet/1.jpg"
import f2 from "../assets/Hizmet/2.png"
import f3 from "../assets/Hizmet/3.png"
import f4 from "../assets/Hizmet/Düğün1.jpg"
import f5 from "../assets/Hizmet/Nişan1.jpg"
import n1 from "../assets/Salon/nurbanu1.jpg"
import n2 from "../assets/Salon/nurbanu2.jpg"


import h1 from "../assets/Salon/hürrem1.jpg"
import h2 from "../assets/Salon/hürrem2.jpg"
import h3 from "../assets/Salon/hürrem3.jpg"







function Galeri() {

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


    return (
        <div>
            <div className='min-h-[100vh] bg-beyaz'>
                <div className="relative flex justify-center items-center">
                    <img src={backg} alt="Background" className="w-full h-[70vh] max-md:h-[60vh]  object-cover opacity-60" />
                    <div className="absolute top-0 left-0 w-full h-60  bg-gradient-to-b from-white to-transparent"></div>
                    <div className='text-7xl max-md:text-5xl max-md:px-10 text-center absolute   mt-30 font-scheherazade  '>
                        <div>Galeri</div>
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
                </div>
                <div className='min-h-[100vh] '>
                    <Galericard cont={content} />
                </div>



            </div>



        </div>
    )
}

export default Galeri