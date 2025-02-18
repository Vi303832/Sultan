import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import Heroicon from "../assets/Hero4.png"
import Hero2 from "../assets/Hero2.png"
function Anasayfa() {
    return (
        <div className='w-[100%] overflow-hidden relative min-h-screen '>
            <img className='-rotate-45  -top-10 -left-16 absolute' src={Heroicon} />

            {/*<img className=' rotate-[40deg] -right-35 top-35 max-lg:-right-60 max-md:hidden  rotate-y-180 absolute' src={Hero2} />*/}


            <div className='mt-[15vh] flex justify-center items-center h-[70vh] '>
                <div className='flex flex-col gap-5 items-center    '>
                    <div className='text-sertaltin text-5xl font-scheherazade  flex flex-col items-center'>
                        <div className='font-bold '>
                            <span className='text-7xl'>
                                S
                            </span>
                            ULTA
                            <span className='text-7xl'>
                                N
                            </span>
                        </div>
                        <div className='w-full flex flex-col items-center'>
                            <hr className=' text-center w-[150%] ' />
                            <hr className=' text-center w-[150%] ' />
                            <hr className=' text-center w-[150%] ' />
                            <hr className=' text-center w-[150%] ' />

                        </div>
                    </div>
                    <div className='text-5xl max-md:text-4xl max-md:px-10 text-center  '>
                        Sultan Düğün & Davet & Organizasyon
                    </div>
                    <div className='font-arial text-lg font-light opacity-70'>
                        En özel anınıza en şık şekilde eşlik ediyoruz
                    </div>
                    <button className=' flex gap-2 px-8 py-2  text-beyaz   justify-center items-center font-arial text-lg font-light bg-altin opacity-80'>Teklif Alın<FaArrowRightLong /> </button>
                </div>


            </div>

            <div></div>





        </div>
    )
}

export default Anasayfa