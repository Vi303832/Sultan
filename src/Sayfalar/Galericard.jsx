import React, { useState } from "react";

import galeri1 from "../assets/Galeri/nurbanu3.jpg";
import galeri2 from "../assets/Galeri/galeri1.jpg";
import galeri3 from "../assets/Galeri/galeri3.jpg";
import galeri4 from "../assets/Galeri/galeri4.jpg";
import galeri5 from "../assets/Galeri/galeri6.jpg";
import galeri6 from "../assets/Galeri/galeri7.jpg";
import galeri7 from "../assets/Galeri/galeri8.jpg";
import galeri8 from "../assets/Galeri/galeri9.jpg";
import galeri9 from "../assets/Galeri/galeri10.jpg";
import galeri10 from "../assets/Galeri/galeri11.jpg";
import galeri11 from "../assets/Galeri/dgn1.jpg";
import galeri12 from "../assets/Galeri/dgn2.jpg";
import galeri13 from "../assets/Galeri/dgn3.jpg";
import galeri14 from "../assets/Galeri/dgn4.jpg";
import galeri15 from "../assets/Galeri/dgn5.jpg";





import { FaArrowRightLong } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa"; // Import close icon

function SalonCard() {
    const [imgg, setimgg] = useState("");
    const [display, setdisplay] = useState(false);
    const [imagePosition, setImagePosition] = useState({});

    const content = [

        { img: galeri1 },

        { img: galeri12 },
        { img: galeri11 },

        { img: galeri4 },
        { img: galeri14 },
        { img: galeri5 },
        { img: galeri15 },
        { img: galeri6 },
        { img: galeri7 },
        { img: galeri8 },
        { img: galeri3 },
        { img: galeri2 },
        { img: galeri13 },
        { img: galeri9 },
        { img: galeri10 },


    ];

    const handleClick = (e, img) => {
        const rect = e.target.getBoundingClientRect();
        setImagePosition({
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height
        });
        setimgg(img);
        setdisplay(true);
    };

    const closeModal = () => {
        setdisplay(false);
    };

    return (
        <div className="px-20 max-sm:px-5 max-lg:px-10">
            {/* Masonry Layout */}
            <div className="columns-3 gap-5 space-y-5 max-lg:columns-2 max-sm:columns-1">
                {content.map((m, index) => (
                    <div key={index}>
                        <img
                            className="w-full rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                            src={m.img}
                            alt={`Salon ${index}`}
                            onClick={(e) => handleClick(e, m.img)}
                        />
                    </div>
                ))}
            </div>

            {/* Modal for large image */}
            {display && (
                <div
                    className="fixed inset-0 flex justify-center items-center z-50"
                    style={{
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                    }}
                >
                    {/* Black background (overlay) */}
                    <div
                        className="fixed inset-0 bg-black  opacity-80"
                        style={{
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                        }}
                    />

                    {/* Close Button */}
                    <button
                        onClick={closeModal}
                        className="absolute top-5 right-5 text-white text-4xl bg-black rounded-full p-2 shadow-lg z-60"
                    >
                        <FaTimes />
                    </button>

                    {/* Image */}
                    <img
                        src={imgg}
                        alt="Selected Salon"
                        className="transition-all duration-500 ease-in-out"
                        style={{
                            position: "fixed",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            maxWidth: "90%",
                            maxHeight: "90%",
                            objectFit: "contain",
                            transition: "all 0.5s ease-in-out",
                        }}
                        onClick={(e) => e.stopPropagation()}
                        onLoad={() => {
                            setImagePosition({
                                top: 0,
                                left: 0,
                                width: "100vw",
                                height: "100vh",
                            });
                        }}
                    />
                </div>
            )}

            {/* Alt Kısım */}
            <div className="w-full overflow-hidden relative pt-30 pb-50">
                <div className="flex justify-center items-center h-[30vh]">
                    <div className="flex flex-col gap-5 items-center">
                        <div className="text-sertaltin text-5xl font-scheherazade flex flex-col items-center">
                            <div className="font-bold">
                                <span className="text-7xl">S</span>ULTA
                                <span className="text-7xl">N</span>
                            </div>
                            <div className="w-full flex flex-col items-center">
                                <hr className="text-center w-[150%]" />
                                <hr className="text-center w-[150%]" />
                                <hr className="text-center w-[150%]" />
                                <hr className="text-center w-[150%]" />
                            </div>
                        </div>
                        <div className="text-5xl max-md:text-4xl max-md:px-10 text-center font-scheherazade">
                            Sultan Düğün & Davet & Organizasyon
                        </div>
                        <button className="flex gap-2 px-8 py-2 text-beyaz justify-center items-center font-arial text-lg font-light bg-altin opacity-80 cursor-pointer">
                            Teklif Alın <FaArrowRightLong />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SalonCard;