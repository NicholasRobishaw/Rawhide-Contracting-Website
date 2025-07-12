import '../App.css'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

export default function GetStarted(){
    return(
        <div id="contact" className="bg-[#efcf8f] py-16 px-4 sm:px-6 lg:px-20 text-[#2F1D0F]">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-left mb-12">
                Want to Learn More?
                </h1>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center items-center">
                
                {/* Contact Button */}
                <div className="col-span-1 lg:col-span-1">
                    <a href="contact" className="bg-yellow-700 hover:bg-yellow-800 text-white px-6 py-4 rounded-md w-full h-full text-base sm:text-lg hover:scale-105 hover:shadow-2xl">
                    Contact Us Now
                    </a>
                </div>

                {/* Arrow Icon */}
                <div className="hidden lg:block">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="mx-auto w-12 h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </div>

                {/* Schedule Walkthrough */}
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mx-auto w-14 h-14 mb-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 
                        18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 
                        2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 
                        0 5.25 21h13.5A2.25 2.25 0 0 0 21 
                        18.75m-18 0v-7.5A2.25 2.25 0 0 1 
                        5.25 9h13.5A2.25 2.25 0 0 1 21 
                        11.25v7.5" />
                    </svg>
                    <h2 className="text-lg font-semibold">Schedule a Walkthrough</h2>
                </div>

                {/* Arrow Icon */}
                <div className="hidden lg:block">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="mx-auto w-12 h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </div>

                {/* Start Building */}
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="mx-auto w-14 h-14 mb-2">
                    <path d="M9.972 2.508a.5.5 0 0 0-.16-.556l-.178-.129a5 5 0 0 
                        0-2.076-.783C6.215.862 4.504 1.229 2.84 
                        3.133H1.786a.5.5 0 0 0-.354.147L.146 
                        4.567a.5.5 0 0 0 0 .706l2.571 
                        2.579a.5.5 0 0 0 .708 0l1.286-1.29a.5.5 
                        0 0 0 .146-.353V5.57l8.387 8.873A.5.5 
                        0 0 0 14 14.5l1.5-1.5a.5.5 0 0 0 
                        .017-.689l-9.129-8.63c.747-.456 
                        1.772-.839 3.112-.839a.5.5 0 0 0 .472-.334" />
                    </svg>
                    <h2 className="text-lg font-semibold">Start Building</h2>
                </div>
                </div>
            </div>
        </div>

    )
}