import React, { useEffect } from 'react'
import Hkkfoto from "../assets/Hakkımızda.jpg"
import Gl from "../assets/Gl.png"
import HeroHakkında from "../assets/HeroHakkında.jpg";

function Hakkımızda() {


    useEffect(() => {
        // Sayfa her render olduğunda sayfanın başına gitmek için scrollTo kullanabiliriz
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='min-h-[100vh] bg-beyaz'>
            <div className="relative flex justify-center items-center">
                <img src={Hkkfoto} alt="Background" className="w-full h-[70vh] max-md:h-[60vh]  object-cover opacity-80" />
                <div className="absolute top-0 left-0 w-full h-60  bg-gradient-to-b from-white to-transparent"></div>

            </div>
            <div className='mt-[15vh] flex justify-center items-center flex-col gap-3 '>

                <div className='text-5xl max-md:text-4xl max-md:px-10 text-center font-scheherazade'>
                    <div className='flex flex-col justify-center items-center gap-3'>
                        <div className='text-5xl'>Hakkımızda</div>
                        <img src={Gl} className='h-[10vh]' />
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className=' w-[80vh] text-center flex flex-col gap-10'>
                    Şehir merkezinde bulunan Sultan Düğün Salonları Osmangazi/Bursa 2015’ten beri çiftlerimizin düğün, nişan, kına gibi en özel günlerine ev sahipliği yapıyor. İçerisinde bulunan 5 düğün salonu seçeneği ve terasıyla konukların ilgisini çekiyor. Uzman aynı zamanda dinamik çalışan kadromuzla davetlilerimizi memnun etmek ve salonumuzdan gülümseyerek ayrılmalarını sağlamak için özen gösteriyoruz. Merkezi bir konumda yer alıyor olmamız ulaşım konusunda büyük bir kolaylığı beraberinde getiriyor.

                    <div>
                        Özel günlerinizi, özel yaşamanız için sizin yerinize tüm detayları düşünerek her tür organizasyonunuza ev sahipliği yapmaktayız.
                    </div>

                    <div>
                        "Düğün Salonumuzda Sizi ve Misafirlerinizi Ağırlamaktan Onur Duyarız."
                    </div>
                </div>
            </div>
            <div className='min-h-[100vh] '>
                <div className='flex justify-center items-center gap-10 w-full max-lg:flex-col max-lg:px-5 font-arial px-20 mt-30 mb-60'>
                    <div className=' w-[50%] h-full max-lg:w-[80%] '>
                        <img src={HeroHakkında} className='object-contain  ' />
                    </div>
                    <div className='flex flex-col justify-start max-lg:w-[80%] items-start gap-10 w-[50%] '>
                        <div className='text-5xl text-sertaltin'>
                            Sultan Düğün Salonu Bursa
                        </div>
                        <div className=' opacity-80'>
                            Şehir merkezinde bulunan Sultan Düğün Salonları Osmangazi/Bursa 2015’ten beri çiftlerimizin düğün, nişan, kına gibi en özel günlerine ev sahipliği yapıyor. İçerisinde bulunan 5 düğün salonu seçeneği ve terasıyla konukların ilgisini çekiyor. Uzman aynı zamanda dinamik çalışan kadromuzla davetlilerimizi memnun etmek ve salonumuzdan gülümseyerek ayrılmalarını sağlamak için özen gösteriyoruz. Merkezi bir konumda yer alıyor olmamız ulaşım konusunda büyük bir kolaylığı beraberinde getiriyor..
                        </div>
                        <div>

                        </div>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default Hakkımızda