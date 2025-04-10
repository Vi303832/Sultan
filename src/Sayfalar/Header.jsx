import React, { useState } from 'react';
import Logo from "../assets/Logo1.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router";

function Header() {
    const [bar, setBar] = useState(false);
    const navigate = useNavigate();

    const handleNav = (path) => {
        navigate(path);
        setBar(false);
    };

    return (
        <div className='font-arial w-full'>
            {/* Header */}
            <div className='w-full h-[100px] flex justify-between items-center z-50 absolute top-0 left-0 right-0 bg-transparent'>
                {/* Logo */}
                <div className='h-full px-10 max-xs:w-[150px] max-[340px]:!right-3 relative max-xs:px-2'>
                    <img
                        onClick={() => handleNav("/")}
                        className="cursor-pointer h-[100px] max-xs:h-full max-xs:w-full max-w-screen object-cover p-1 transition-transform hover:scale-105"
                        src={Logo}
                        alt='Sultan Logo'
                    />
                </div>

                {/* Desktop Navigation */}
                <div className='px-20 w-[45%] max-xl:w-[55%] max-lg:w-[65%] flex gap-12 justify-center items-center text-lg max-[860px]:hidden'>
                    {[
                        { path: "/Salonlar", label: "Salonlarımız" },
                        { path: "/Galeri", label: "Galeri" },
                        { path: "/Hizmetlerimiz", label: "Hizmetlerimiz" },
                        { path: "/Teklif", label: "Teklif al" },
                        { path: "/İletişim", label: "İletişim" }
                    ].map((item) => (
                        <div
                            key={item.path}
                            onClick={() => handleNav(item.path)}
                            className='hover:text-sertaltin cursor-pointer transition-colors duration-300 relative group whitespace-nowrap'
                        >
                            {item.label}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sertaltin transition-all duration-300 group-hover:w-full"></span>
                        </div>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className='hidden max-[860px]:block'>
                    <div
                        onClick={() => setBar(!bar)}
                        className='cursor-pointer text-2xl px-20 max-xs:px-10 text-sertaltin'
                    >
                        {bar ? <FaTimes /> : <FaBars />}
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`absolute top-[15vh] right-0 w-full transition-all duration-500 min-[860px]:hidden ease-in-out z-40 ${bar ? "h-[65vh] opacity-100" : "h-0 opacity-0"
                    }`}
            >
                <div className='bg-white bg-opacity-85 w-full h-full flex flex-col gap-8 items-center justify-center text-lg shadow-lg'>
                    {[
                        { path: "/Salonlar", label: "Salonlarımız" },
                        { path: "/Galeri", label: "Galeri" },
                        { path: "/Hizmetlerimiz", label: "Hizmetlerimiz" },
                        { path: "/Teklif", label: "Teklif al" },
                        { path: "/İletişim", label: "İletişim" }
                    ].map((item) => (
                        <div
                            key={item.path}
                            onClick={() => handleNav(item.path)}
                            className={`hover:text-sertaltin cursor-pointer transition-colors duration-300 whitespace-nowrap ${bar ? "opacity-100" : "opacity-0"
                                }`}
                        >
                            {item.label}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Header;