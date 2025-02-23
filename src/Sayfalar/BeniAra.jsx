import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import axios from 'axios';



export default function BeniAra() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',

    });
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("https://formspree.io/f/mgvoqpzp", formData, {
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (response.status === 200) {
                setSuccess("Form başarıyla gönderildi!");
                setFormData({ name: '', email: '', phone: '', });
            } else {
                setSuccess("Form gönderilirken hata oluştu.");
            }
        } catch (error) {
            setSuccess("Bağlantı hatası! Lütfen tekrar deneyin.");
        }
    };

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
                <form onSubmit={handleSubmit} className='bg-white w-[70%] mx-auto flex rounded-lg shadow-2xl justify-center items-center flex-col gap-10 p-12 max-md:w-full max-md:mx-5'>
                    <div className='flex flex-col justify-center items-center gap-5'>
                        <div className='text-4xl text-altin text-center flex gap-5'>BİZ SİZİ ARAYALIM<FaPhoneAlt /> </div>
                        <div className='text-center'>En kısa sürede dönüş yapılacaktır.

                        </div>
                    </div>
                    <div className='flex flex-col gap-5 w-full items-center '>
                        <div className='w-[50%] max-md:w-[70%]  h-10 flex justify-center items-center '><FaUser className='border-2 text-beyaz border-altin  bg-altin rounded-l-4xl h-10 w-[15%] p-2' />

                            <input
                                type='text'
                                name="name"
                                placeholder='Ad, Soyad'
                                value={formData.name}
                                onChange={handleChange}
                                required className=' outline-0  w-full h-full border-b-2 pl-2 border-altin  border-t-2 border-r-2 rounded-r-4xl' />

                        </div>
                        <div className='w-[50%] max-md:w-[70%] h-10 flex justify-center items-center '><IoMdMail className=' outline-0  border-2 text-beyaz border-altin  bg-altin rounded-l-4xl h-10 w-[15%] p-2' />

                            <input
                                type="email"
                                name="email"
                                placeholder='Email'
                                value={formData.email}
                                onChange={handleChange}
                                required className=' pl-2 w-full h-full border-b-2 border-altin  border-t-2 border-r-2 rounded-r-4xl outline-0' />

                        </div>
                        <div className='w-[50%] max-md:w-[70%] h-10 flex justify-center items-center '><FaPhoneAlt className='border-2 outline-0  text-beyaz border-altin  bg-altin rounded-l-4xl h-10 w-[15%] p-2' />

                            <input
                                type="tel"
                                name="phone"
                                placeholder='Telefon Numarası'
                                value={formData.phone}
                                onChange={handleChange}
                                required className='w-full h-full border-b-2 pl-2 border-altin  border-t-2 border-r-2 rounded-r-4xl outline-0' />

                        </div>


                    </div>


                    <button
                        type="submit"
                        className='flex gap-2 px-8 py-2 text-beyaz justify-center items-center rounded-2xl cursor-pointer font-arial text-lg font-light bg-altin opacity-80'>
                        Gönder
                    </button>


                    {success && <p className="text-green-600 mt-2">{success}</p>}

                </form>
            </div>



        </div>
    )
}