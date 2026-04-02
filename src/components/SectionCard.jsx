import { useState, useEffect } from "react";
import Carousel from "./Carousel";
import ServiceCard from "./ServiceCard";
import "../App.css";


export default function SectionCard({ title, description, images=[], links = [] }) {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto w-full">
      <div className="grid md:grid-cols-2 gap-10 items-start">

        {/* Left Content */}
        <div>
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-gray-700 mb-6">{description}</p>

          <div className="flex flex-col gap-3">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="inline-flex items-center justify-between
                           bg-[#7a4a17] text-white px-5 py-3 rounded-xl
                           hover:bg-[#683e14] transition"
              >
                {link.title}
                <span>→</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right Image Area */}
        {images.length > 0 && (
        <div className="grid grid-cols-2 gap-4">
            
            <ServiceCard
            title={title}
            description={""}
            images={images}
            fullWidth={false}
            />
            
            
            {/* {images.map((src, i) => (
            <div
                key={i}
                className="bg-gray-200 rounded-xl h-40 overflow-hidden"
            >
                <img
                src={src}
                alt={`${title} reference ${i + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
                />
            </div>
            ))} */}
        </div>
        )}
      </div>
    </section>
  );
}