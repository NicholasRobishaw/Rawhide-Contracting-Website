import '../App.css'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

export default function WhyChooseUs(){
    return(
    <div id="why-choose-us" className="bg-[#efcf8f] py-16 px-4 sm:px-6 lg:px-20 text-[#2F1D0F]">
        <div className="max-w-6xl mx-auto">
            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-left mb-8">
            Why Choose Us
            </h1>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
            {/* Item 1 */}
            <div className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl">Licensed & Insured</p>
            </div>

            {/* Item 2 */}
            <div className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl">On-Time, On-Budget</p>
            </div>

            {/* Item 3 */}
            <div className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl">Locally Owned & Trusted</p>
            </div>

            {/* Item 4 */}
            <div className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl">Honest, Local, Reliable</p>
            </div>
            </div>
        </div>
    </div>

    )
}