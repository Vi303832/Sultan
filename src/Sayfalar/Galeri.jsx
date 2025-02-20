import React from 'react'
import backg from "../assets/Galeri/Galeripp.jpg"
import Galericard from "./Galericard.jsx"

function Galeri() {
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
                        <div className='w-full flex flex-col items-center'>
                            <hr className='text-center w-[150%]' />
                            <hr className='text-center w-[150%]' />
                            <hr className='text-center w-[150%]' />
                            <hr className='text-center w-[150%]' />
                        </div>
                    </div>
                </div>
                <div className='min-h-[100vh] '>
                    <Galericard />
                </div>



            </div>



        </div>
    )
}

export default Galeri