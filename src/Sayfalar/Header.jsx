import React, { useState } from 'react';
import Logo from "../assets/Logo1.png";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router";

function Header() {
    const [bar, setbar] = useState(false);

    let navigate = useNavigate();


    let handlenav = (path) => {

        navigate(path);
        setbar(false);



    }

    let handlenav1 = (path) => {

        if (bar) {
            navigate(path);
            setbar(false);


        }
        else {

            return
        }


    }



    return (
        <div className='font-arial w-[100vw] overflow-hidden '>
            {/* Absolute Header */}
            <div className=' w-full h-[100px] flex justify-between items-center z-50 absolute top-0 left-0 right-0 bg-transparent overflow-hidden'>
                {/* Logo */}
                <div className='h-[100%] px-10 max-xs:w-[150px]  max-[340px]:!right-3 relative  max-xs:px-2 max-xs:h-[100%] '>
                    <img onClick={() => handlenav("/")} className=" cursor-pointer h-[100px] max-xs:h-full max-xs:w-full  max-w-screen object-cover p-1" src={Logo} alt='Sultan Logo' />
                </div>
                {/* Navigation Links */}
                <div className='px-20 w-[45%] max-xl:w-[55%] max-lg:w-[65%] overflow-hidden flex gap-12 justify-center items-center text-lg cursor-pointer max-[860px]:!hidden '>
                    <div onClick={() => navigate("/Salonlar")} className='hover:text-sertaltin cursor-pointer'>Salonlarımız</div>
                    <div onClick={() => navigate("/Galeri")} className='hover:text-sertaltin cursor-pointer'>Galeri</div>
                    <div onClick={() => navigate("/Hizmetlerimiz")} className='hover:text-sertaltin cursor-pointer'>Hizmetlerimiz</div>
                    <div onClick={() => navigate("/Teklif")} className='hover:text-sertaltin cursor-pointer flex flex-row gap-2'><span>Teklif</span> al</div>
                    <div onClick={() => navigate("/İletişim")} className='hover:text-sertaltin cursor-pointer'>İletişim</div>

                </div>
                {/* Mobile Menu */}
                <div className='hidden max-[860px]:!block'>
                    <div onClick={() => setbar(!bar)} className='cursor-pointer text-2xl px-20 max-xs:px-10 '>
                        <FaBars />
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`absolute top-[15vh] right-0 w-full transition-all duration-500 min-[860px]:!hidden   ease-in-out z-40 ${bar ? " h-[65vh] opacity-100" : "h-0 opacity-0"
                    }`}
            >
                <div className='  bg-white opacity-85 z-0 w-full  h-full flex flex-col gap-6 items-center justify-center text-lg'>
                    <div onClick={() => handlenav1("/Salonlar")} className={`hover:text-sertaltin  ${bar ? "cursor-pointer" : "cursor-default"}`}>Salonlarımız</div>
                    <div onClick={() => handlenav1("/Galeri")} className={`hover:text-sertaltin  ${bar ? "cursor-pointer" : "cursor-default"}`}>Galeri</div>
                    <div onClick={() => handlenav1("/Teklif")} className={`hover:text-sertaltin  ${bar ? "cursor-pointer" : "cursor-default"}`}>Teklif al</div>
                    <div onClick={() => handlenav1("/İletişim")} className={`hover:text-sertaltin  ${bar ? "cursor-pointer" : "cursor-default"}`}>İletişim</div>
                    <div onClick={() => handlenav1("/Hizmetlerimiz")} className={`hover:text-sertaltin  ${bar ? "cursor-pointer" : "cursor-default"}`}>Hizmetlerimiz</div>
                </div>
            </div>
        </div>
    );
}

export default Header;