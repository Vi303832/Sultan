import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";

import yt from "../assets/yt.jpg"
const YouTubeVideo = () => {
    const [showVideo, setShowVideo] = useState(false);

    const handleButtonClick = () => {
        setShowVideo(true);
    };

    return (
        <div className="flex flex-col items-center justify-center px-20 max-md:p-5">
            <img src={yt} className='h-[100vh] w-[100%] object-cover' />
            <button
                onClick={handleButtonClick}
                className="px-4 py-2 bg-kalin text-black hover:text-beyaz cursor-pointer   rounded absolute hover:bg-sertaltin"
            >
                Videoyu Aç
            </button>

            {showVideo && (
                <>
                    <div className='absolute h-[2000vh] w-screen bg-black opacity-80'></div>
                    <div className=" absolute  w-full h-[100vh] flex justify-center items-center ">

                        <div className='w-[60%] h-[60%] max-md:w-[85%]   '>
                            <div className='z-20 text-5xl absolute text-beyaz max-md:w-[85%]  w-[60%]'>
                                <button onClick={() => setShowVideo(false)} className=' -right-12 absolute cursor-pointer -top-10 bg-[#00000066] hover:bg-[#000000b3] rounded-full  '><IoClose />
                                </button>

                            </div>+

                            <iframe
                                className='w-full h-full'
                                src="https://www.youtube.com/embed/MQU5-dX7OcI?si=UW1RJ9ecY98dBzSC"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>

                        </div>


                    </div>
                </>

            )}
        </div>
    );
};

export default YouTubeVideo;