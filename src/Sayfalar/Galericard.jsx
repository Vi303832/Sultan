import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";




import { FaArrowRightLong } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa"; // Import close icon

function SalonCard({ cont }) {

    let navigate = useNavigate();

    const [imgg, setimgg] = useState("");
    const [display, setdisplay] = useState(false);
    const [imagePosition, setImagePosition] = useState({});
    const [content, setcontent] = useState([])

    useEffect(() => {
        if (Array.isArray(cont)) {
            setcontent(cont);
        }

    }, [cont])



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
                {content && content.map((m, index) => (
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
                        <div className="text-5xl max-md:text-4xl max-md:px-10 text-center font-cormorant">
                            Sultan Düğün & Davet & Organizasyon
                        </div>
                        <div className="flex  gap-5 items-center max-sm:flex-col">
                            <button onClick={() => navigate("/Teklif")} className="flex gap-2 px-8 py-2 text-beyaz justify-center items-center font-arial text-lg font-light bg-altin opacity-80 cursor-pointer">
                                Teklif Alın <FaArrowRightLong />
                            </button>
                            <button onClick={() => navigate("/BeniAra")} className="flex gap-2 px-8 py-2 text-beyaz justify-center items-center font-arial text-lg font-light bg-altin opacity-80 cursor-pointer">
                                Biz Sizi Arayalım <FaArrowRightLong />
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default SalonCard;