import '../App.css'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

export default function AboutUsServices(){
    return(
        <div id="about-us" className="bg-[#f2d7a2] py-16 px-4 sm:px-6 lg:px-20 text-[#2F1D0F]">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
                
                {/* About Us Column */}
                <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-left mb-6">
                    About Us
                </h1>
                <p className="text-base sm:text-lg md:text-xl mb-6 leading-relaxed text-left">
                    At Rawhide Contracting, we're a family-owned business proudly rooted in the local community. 
                    We’re committed to delivering honest, high-quality work you can trust. From small upgrades to full builds, 
                    we treat every project like it’s our own — with integrity, reliability, and a handshake you can count on.
                </p>
                <button className="bg-yellow-700 hover:bg-yellow-800 text-white px-6 py-3 rounded-md">
                    Learn More About Us
                </button>
                </div>

                {/* Services Column */}
                <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-left mb-6">
                    Services
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
                    {/* Service 1 */}
                    <div className="flex flex-col items-center space-y-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="w-16 h-16 text-[#2F1D0F]" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 
                        .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 
                        0 1.125.504 1.125 1.125V21h4.125c.621 
                        0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    <p className="text-base md:text-lg font-semibold">Residential Construction</p>
                    </div>

                    {/* Service 2 */}
                    <div className="flex flex-col items-center space-y-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="w-16 h-16 text-[#2F1D0F]" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0 0 21 
                        17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 
                        1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 
                        0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 
                        1.163-.188 1.743-.14a4.5 4.5 0 0 0 
                        4.486-6.336l-3.276 3.277a3.004 3.004 
                        0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 
                        0 0 0-6.336 4.486c.091 1.076-.071 
                        2.264-.904 2.95l-.102.085m-1.745 
                        1.437L5.909 7.5H4.5L2.25 
                        3.75l1.5-1.5L7.5 4.5v1.409l4.26 
                        4.26m-1.745 1.437 1.745-1.437m6.615 
                        8.206L15.75 15.75" />
                    </svg>
                    <p className="text-base md:text-lg font-semibold">Remodeling & Renovation</p>
                    </div>

                    {/* Service 3 */}
                    <div className="flex flex-col items-center space-y-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="w-16 h-16 text-[#2F1D0F]">
                        <path d="M0 .5A.5.5 0 0 1 .5 0h15a.5.5 0 0 1 
                        .5.5v3a.5.5 0 0 1-.5.5H14v2h1.5a.5.5 
                        0 0 1 .5.5v3a.5.5 0 0 1-.5.5H14v2h1.5a.5.5 
                        0 0 1 .5.5v3a.5.5 0 0 1-.5.5H.5a.5.5 
                        0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5H2v-2H.5a.5.5 
                        0 0 1-.5-.5v-3A.5.5 0 0 1 .5 6H2V4H.5a.5.5 
                        0 0 1-.5-.5zM3 4v2h4.5V4zm5.5 0v2H13V4zM3 
                        10v2h4.5v-2zm5.5 0v2H13v-2zM1 1v2h3.5V1zm4.5 
                        0v2h5V1zm6 0v2H15V1zM1 7v2h3.5V7zm4.5 
                        0v2h5V7zm6 0v2H15V7zM1 13v2h3.5v-2zm4.5 
                        0v2h5v-2zm6 0v2H15v-2z"/>
                    </svg>
                    <p className="text-base md:text-lg font-semibold">Outdoor Structures</p>
                    </div>
                </div>
                </div>
            </div>
        </div>

    )
}