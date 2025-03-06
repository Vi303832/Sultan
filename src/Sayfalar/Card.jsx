import React from 'react'
import { useNavigate } from "react-router";
import { FaArrowRightLong } from "react-icons/fa6";


function Card({ yazı, başlık, foto, url }) {

    let navigate = useNavigate()


    return (
        <div className='min-h-[50vh] w-[80%] '>
            <div className='flex h-full w-full  max-lg:flex-col justify-center items-center  '>

                <div className='h-full w-[50%] max-lg:w-full  flex justify-center'>
                    <img src={foto} className='h-full object-cover w-[100%]' />
                </div>
                <div className='w-[50%] max-lg:w-full  p-12 flex flex-col gap-8 text-start '>
                    <div className='text-5xl text-sertaltin  text-start w-[50%]  max-sm:text-4xl max-sm:font-bold '>{başlık}</div>
                    <div>{yazı}</div>
                    <button onClick={() => navigate(`/${url}`)} className='flex gap-2 px-8 py-2 text-beyaz justify-center items-center font-arial text-md font-light bg-altin opacity-80 min-xl:w-[70%] max-lg:w-[60%] max-md:w-[70%] max-sm:w-[100%]'>
                        <div className='flex gap-1 items-center px-1  cursor-pointer'><span className='flex gap-1'>{url} <div>Organizasyonlarını</div></span>inceleyin<FaArrowRightLong /> </div>
                    </button>
                </div>

            </div>



        </div>
    )
}

export default Card