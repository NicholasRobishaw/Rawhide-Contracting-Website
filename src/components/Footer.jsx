import '../App.css'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

export default function FooterBar() {
    return(
        
        <footer className="bg-[#2F1D0F] text-white py-6 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          {/* Left Side: Brand or Info */}
          <div className="text-center md:text-left">
            <p className="font-semibold">&copy; {new Date().getFullYear()} Rawhide Construction</p>
            <p className="text-sm">Prescott, Arizona</p>
          </div>
  
          {/* Right Side: Links */}
          <div className="flex space-x-6">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    )

}