import '../App.css'
import { useEffect, useRef, useState } from 'react';

const ServiceCard = ({ title, description, images }) => {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const nextImage = () => setCurrent((current + 1) % total);
  const prevImage = () => setCurrent((current -1 + total) % total);

  return (
    <div className="bg-[#f2d7a2] max-w-sm rounded-2xl 
                    overflow-hidden shadow-lg 
                    mx-auto flex flex-col h-full
                    transform transition duration-300 hover:scale-105 hover:shadow-2xl">
        <div className="px-6 py-4">

            {/* Image Carousel */}
            <div className="relative h-64 overflow-hidden">
                {images.map((img, index) => (
                    <picture
                        key={index}
                        className={`absolute top-0 left-0 w-full h-full transition-opacity rounded-2xl
                        duration-500 ${index === current ? "opacity-100" : "opacity-0"}`}
                    >
                        <source srcSet={img.webp} media="(max-width: 600px)" type="image/webp" />
                        <source srcSet={img.jpg} media="(max-width: 600px)" type="image/jpeg" />
                        <img
                        src={img.jpg}
                        alt={`Slide ${index}`}
                        className="w-full h-full object-cover"
                        />
                    </picture>
                    ))}

                {/* Carousel Controls */}
                <button
                onClick={prevImage}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/75 text-white px-2 py-1 cursor-pointer rounded-xl hover:scale-110 hover:shadow-2xl hover:bg-black/90"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                    </svg>
                </button>
                <button
                onClick={nextImage}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/75 text-white px-2 py-1 cursor-pointer rounded-xl hover:scale-110 hover:shadow-2xl hover:bg-black/90"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                    </svg>
                </button>
            </div>

            <div className="flex flex-col flex-grow px-6 py-4">
                {/* Title */}
                <h2 className="font-bold text-base mb-2">{title}</h2>
                
                {/* Description */}
                <p className="text-gray-700 text-base">{description}</p>

            </div>
        </div>
    </div>
  );
};

export default ServiceCard;