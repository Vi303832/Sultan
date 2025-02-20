import React from 'react'
import Logo from "../assets/black.png"

function Footer() {
    return (
        <div className='bg-altin min-h-[70vh] hidden '>
            <div className='flex gap-50 p-20 justify-center max-md:flex-col max-md:items-center'>
                <div className='flex flex-col items-start gap-5'>
                    <div className=''>
                        <img src={Logo} className='h-[20vh]  z-10 text-black ' />

                    </div>
                    <div>En özel anınıza en şık şekilde eşlik ediyoruz.</div>
                    <div className='flex  gap-10    '>
                        <div>insta</div>
                        <div>Yutubu</div>
                        <div>Face</div>

                    </div>
                </div>
                <div className='flex flex-col gap-10'>
                    <div className='text-2xl'>İletişim</div>
                    <div className='flex flex-col gap-5'>
                        <div>email</div>
                        <div>email</div>
                        <div>email</div>
                        <div className='flex gap-5'>
                            <div>tel1</div>
                            <div>tel2</div>
                        </div>

                    </div>
                </div>
                <div className='flex flex-col gap-10'>
                    <div className='text-2xl'>Salonlarımız</div>
                    <div className='flex flex-col gap-5'>
                        <div>Zaarrt</div>
                        <div>zuurt</div>
                        <div>email</div>


                    </div>
                </div>

            </div>


        </div>
    )
}

export default Footer