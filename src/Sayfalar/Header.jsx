import React, { useState } from 'react';
import Logo from "../assets/Logo1.png";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router";

function Header() {
    const [bar, setbar] = useState(false);

    let navigate = useNavigate();

    return (
        <div className='font-arial'>
            {/* Absolute Header */}
            <div className=' w-full h-[15vh] flex justify-between items-center z-50 absolute top-0 left-0 right-0 bg-transparent '>
                {/* Logo */}
                <div className='h-[100%] px-10'>
                    <img onClick={() => navigate("/")} className=" cursor-pointer h-[90%] max-w-screen object-cover p-1" src={Logo} alt='Sultan Logo' />
                </div>
                {/* Navigation Links */}
                <div className='px-20 w-[100vh] overflow-hidden flex gap-12 justify-center items-center text-lg cursor-pointer max-md:hidden '>
                    <div onClick={() => navigate("/Salonlar")} className='hover:text-sertaltin cursor-pointer'>Salonlarımız</div>
                    <div onClick={() => navigate("/Galeri")} className='hover:text-sertaltin cursor-pointer'>Galeri</div>
                    <div onClick={() => navigate("/Teklif")} className='hover:text-sertaltin cursor-pointer flex flex-row gap-2'><span>Teklif</span> al</div>
                    <div onClick={() => navigate("/İletişim")} className='hover:text-sertaltin cursor-pointer'>İletişim</div>
                    <div onClick={() => navigate("/Hakkımızda")} className='hover:text-sertaltin cursor-pointer'>Hakkımızda</div>
                </div>
                {/* Mobile Menu */}
                <div className='hidden max-md:block'>
                    <div onClick={() => setbar(!bar)} className='cursor-pointer text-2xl px-20 '>
                        <FaBars />
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`absolute top-[15vh] right-0 w-full transition-all duration-500 min-md:hidden   ease-in-out z-40 ${bar ? " h-[65vh] opacity-100" : "h-0 opacity-0"
                    }`}
            >
                <div className='  bg-white opacity-85 z-0 w-full  h-full flex flex-col gap-6 items-center justify-center text-lg'>
                    <div onClick={() => navigate("/Salonlar")} className='hover:text-sertaltin cursor-pointer'>Salonlarımız</div>
                    <div onClick={() => navigate("/Galeri")} className='hover:text-sertaltin cursor-pointer'>Galeri</div>
                    <div onClick={() => navigate("/Teklif")} className='hover:text-sertaltin cursor-pointer  '>Teklif al</div>
                    <div onClick={() => navigate("/İletişim")} className='hover:text-sertaltin cursor-pointer'>İletişim</div>
                    <div onClick={() => navigate("/Hakkımızda")} className='hover:text-sertaltin cursor-pointer'>Hakkımızda</div>
                </div>
            </div>
        </div>
    );
}

export default Header;