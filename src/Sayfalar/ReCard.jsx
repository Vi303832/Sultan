import React from 'react'
import { useNavigate } from "react-router";
import { FaArrowRightLong } from "react-icons/fa6";

function Card({ yazı, başlık, foto, url }) {


    let navigate = useNavigate()


    return (
        <div className='min-h-[50vh] w-[80%]  max-xs:w-[95%]'>
            <div className='flex h-full w-full  max-lg:flex-col justify-center items-center '>

                <div className='h-full w-full bg-amber-800  justify-center hidden max-lg:flex '>
                    <img src={foto} className='h-full object-cover w-[100%]' />
                </div>

                <div className='w-[50%] h-full p-12 flex flex-col max-sm:items-center gap-8 text-start max-lg:w-full max-xs:pb-10 max-xs:p-0'>
                    <div className='text-5xl text-sertaltin  text-start max-sm:text-4xl  max-xs:text-3xl   max-xs:pt-5 max-xs:text-center max-xs:w-full'>{başlık}</div>
                    <div className='max-xs:text-[16px]  max-xs:text-center'>{yazı}</div>
                    <button onClick={() => navigate(`/${url}`)} className='flex gap-2 px-8 py-2 max-xs:hidden text-beyaz justify-center items-center font-arial text-md font-light bg-altin opacity-80 min-xl:w-[70%] max-lg:w-[60%] max-md:w-[70%] max-sm:w-[100%] max-xs:!w-[70%] '>
                        <div className='flex gap-1 items-center px-1  cursor-pointer max-xs:text-center max-xxs:text-[16px]  max-xs:flex-wrap'><span className='flex gap-1 '>{url} <div>Organizasyonlarını</div></span>inceleyin<FaArrowRightLong /> </div>
                    </button>
                    <button onClick={() => navigate(`/${url}`)} className=' hidden max-xs:flex  gap-2 px-8 py-2 text-beyaz justify-center items-center font-arial text-md font-light bg-altin opacity-80  '>
                        <div className='flex gap-1 items-center px-1  cursor-pointer max-xs:text-center max-xxs:text-[16px]  max-xs:flex-wrap'><span className='flex gap-1 '></span>İncele<FaArrowRightLong /> </div>
                    </button>
                </div>
                <div className='h-full w-[50%]  flex justify-center items-center max-lg:hidden  '>
                    <img src={foto} className='h-full object-cover w-[100%]' />
                </div>
            </div>



        </div>
    )
}

export default Card