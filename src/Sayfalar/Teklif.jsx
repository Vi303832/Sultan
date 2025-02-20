import React from 'react'
import { FaUser } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";


function Teklif() {
    return (
        <div className='min-h-[100vh] bg-beyaz'>

            <div className='pt-[15vh] flex justify-center items-center flex-col gap-3 pb-30'>
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
            <div className='min-h-[60vh] flex  justify-center items-center pb-20 font-arial '>
                <div className='bg-white w-[70%] mx-auto flex rounded-lg shadow-2xl justify-center items-center flex-col gap-10 p-12 max-md:w-full max-md:mx-5'>
                    <div className='flex flex-col justify-center items-center gap-5'>
                        <div className='text-4xl text-altin text-center'>TEKLİF AL</div>
                        <div className='text-center'>Salonumuz için merak ettiğiniz tüm soruları bize mesaj olarak gönderebilirsiniz. En kısa sürede size dönüş yapılacaktır.

                        </div>
                    </div>
                    <div className='flex flex-col gap-5 w-full items-center '>
                        <div className='w-[50%] max-md:w-[70%]  h-10 flex justify-center items-center '><FaUser className='border-2 text-beyaz border-altin  bg-altin rounded-l-4xl h-10 w-[15%] p-2' /><input type='text' placeholder='Ad, Soyad' className=' outline-0  w-full h-full border-b-2 pl-2 border-altin  border-t-2 border-r-2 rounded-r-4xl' /></div>
                        <div className='w-[50%] max-md:w-[70%] h-10 flex justify-center items-center '><IoMdMail className=' outline-0  border-2 text-beyaz border-altin  bg-altin rounded-l-4xl h-10 w-[15%] p-2' /><input placeholder='Email' type="email" className=' pl-2 w-full h-full border-b-2 border-altin  border-t-2 border-r-2 rounded-r-4xl outline-0' /></div>
                        <div className='w-[50%] max-md:w-[70%] h-10 flex justify-center items-center '><FaPhoneAlt className='border-2 outline-0  text-beyaz border-altin  bg-altin rounded-l-4xl h-10 w-[15%] p-2' /><input type="tel" placeholder='Telefon Numarası' className='w-full h-full border-b-2 pl-2 border-altin  border-t-2 border-r-2 rounded-r-4xl outline-0' /></div>
                        <div className='w-[30%] max-md:w-[50%] rounded-4xl h-10 flex justify-center items-center border-2 border-altin'>
                            <select className='w-full h-full border-0 outline-0'>
                                <option>
                                </option>
                                <option>
                                    Düğün Organizasyonu
                                </option>
                                <option>
                                    Sünnet Organizasyonu
                                </option>
                                <option>
                                    Nişan Organizasyonu
                                </option>
                                <option>
                                    Kına Organizasyonu
                                </option>
                                <option>
                                    Toplantı,Seminer,Konferans
                                </option>

                            </select>

                        </div>

                    </div>
                    <textarea className='w-[50%] h-[20vh] border-2 border-altin outline-0 rounded-2xl max-md:w-[70%]  py-1 px-2'></textarea>
                    <button className='flex gap-2 px-8 py-2 text-beyaz justify-center items-center rounded-2xl cursor-pointer font-arial text-lg font-light bg-altin opacity-80'>
                        Gönder
                    </button>




                </div>
            </div>



        </div>
    )
}

export default Teklif