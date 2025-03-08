import React from 'react'
import hürrempp from "../assets/Salonlarımız/hürrempp.jpg"
import kösempp from "../assets/Salonlarımız/kösempp.jpg"
import mihribapp from "../assets/Salonlarımız/mihriba3.jpg"
import nurbanupp from "../assets/Salonlarımız/nurbanupp.jpg"
import Heroicon from "../assets/Hero4.png";
import validepp from "../assets/Salonlarımız/Valide1.jpg"
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom'

function SalonCard() {

    let navigate = useNavigate()

    const content = [
        {
            header: 'Mihrimah Sultan',
            img: mihribapp,
            url: "Mihrimah"
        },
        {
            header: 'Kösem Sultan',
            img: kösempp,
            url: "Kösem"
        },
        {
            header: 'Nurbanu Sultan',
            img: nurbanupp,
            url: "Nurbanu"
        },
        {
            header: 'Hürrem Sultan ',
            img: hürrempp,
            url: "Hürrem"
        },
        {
            header: 'Valide Sultan',
            img: validepp,
            url: "Valide"
        },

    ]


    return (
        <div className='flex px-20 flex-wrap justify-center min-h-full max-sm:px-5  items-center gap-x-10 gap-y-20'>
            {content.map((m) =>
                <div className='w-[25rem]    h-[90%] flex flex-col gap-3 justfiy-center items-center font-cormorant '>
                    <img className='rounded-t-full h-[460px] max-xxs:!h-[300px]  object-cover w-[95%]' src={m.img} />
                    <div className='text-3xl text-sertaltin'>{m.header}</div>
                    <div className='font-arial w-[70%] text-center'>{m.header} salonumuz hakkında bilgi için tıklayın.</div>
                    <button onClick={() => navigate(`/${m.url}`)} className='font-arial text-altin opacity-80 cursor-pointer flex gap-2 justify-center items-center'>Detaylı incele<FaArrowRightLong /></button>

                </div>



            )}

            <div className='w-[100%] overflow-hidden relative pt-30 pb-50 '>


                <div className=' flex justify-center items-center h-[30vh]'>
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
                        <div className='text-5xl max-md:text-4xl max-md:px-10 text-center font-scheherazade'>
                            Sultan Düğün & Davet & Organizasyon
                        </div>

                        <div className='flex gap-5 max-md:flex-col justify-center items-center'>
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




        </div>

    )
}

export default SalonCard