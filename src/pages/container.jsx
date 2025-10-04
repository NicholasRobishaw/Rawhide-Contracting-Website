// src/pages/ContainerPage.jsx
import { useState, useEffect } from "react";
import Carousel from "../components/Carousel";
import "../App.css";

export default function ContainerPage() {
  // Military carousel images (place files in /public)
  
  const civImages = ["/container1.jpg", "/container2.jpg"];
  const militaryImages = ["/container1.jpg", "/container2.jpg"];
  const blackOpsImages = ["/container1.jpg", "/container2.jpg"];

  return (
    <div className="flex flex-col scroll-smooth">
      {/* CIVILIAN */}
      <section
        id="civilian"
        className="min-h-screen bg-[#efcf8f] text-[#2F1D0F] flex flex-col items-center justify-center px-8 py-16"
      >
        <div className="w-full max-w-6xl bg-[#f2d7a2] rounded-2xl px-6 sm:px-10 lg:px-20 py-12 space-y-8">
          <h1 className="text-4xl sm:text-5xl font-bold">Standard Line – Simple. Comfortable. Built for Your Needs.</h1>
          
          <Carousel 
            images = {civImages} objectFit = {"cover"}
          />
            
          <p className="text-lg sm:text-xl ">
            When you just need a space that works, our Standard product line delivers.
            These container-based builds are straightforward, cost-efficient, and ready to serve—whether you’re planning a mobile office, bathroom facility, 
            secure storage unit, pop-up entertainment center, or even a weather-ready shelter.
          </p>
          
          <div className="text-lg sm:text-xl ">
            <p className="font-bold underline text-2xl">
              Comfort Comes Standard <br />
            </p>
            <p className="text-left pl-16">
              Every unit is engineered for easy living and smooth operation:<br />
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    - Quick utility hook-ups for water and power—no complex infrastructure required.
                  </li>
                  
                  <li>
                    - Clean, functional finishes that keep maintenance low and usability high.
                  </li>
                </ul>
            </p>
          </div>

          <p className="text-lg sm:text-xl">
            Your Vision, Our Modular System
            Need something unique? We design and build custom modular configurations to fit any purpose—from multi-room layouts to expandable systems that grow with your project.

            Whether you need a single turnkey space or a full modular complex, the Civilian line gives you fast deployment, lasting comfort, 
            and a build tailored to exactly what you need—nothing more, nothing less.
          </p>
          <div className="text-lg sm:text-xl">
            {/* <a
              href="#military" 
              className="inline-block rounded-xl px-6 py-2 bg-[#7a4a17] text-white font-medium hover:bg-[#683e14] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7a4a17]"
            >
              Next
            </a> */}
              <p className="font-bold underline text-2xl">
                Upgrades
              </p>

              <ul className=" text-left pl-16 list-disc list-inside space-y-1">
                <li>
                    - Reinforced doors and siding.
                </li>

                <li>
                    - Reinforced windows and protective bars.
                </li>
                
                <li>
                    - Temperature-acclimated interiors that stay comfortable in every season.
                </li>

                <li>
                    - Security systems. 
                </li>
              </ul>

          </div>
        </div>
      </section>

      

    </div>
  );
}
