import '../App.css'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

export default function FooterBar() {
    return(
        
        <footer className="bg-[#2F1D0F] text-white py-6 shadow-inner">
        
          

            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">

              {/* Column 1 - Branding */}
              <div>
                <img
                src="/Rawhide Contracting Logo Website.png"
                alt="RC Logo"
                className="h-32 opacity-80 hover:opacity-100 transition "
                />
                <h3 className="text-2xl font-bold mb-4">Rawhide Contracting</h3>
                <p className="text-gray-300">
                  Built for the West. Made to last.
                </p>
              </div>

              {/* Column 2 - Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="/" className="hover:text-white">Home</a></li>
                  <li><a href="/services" className="hover:text-white">Services</a></li>
                  <li><a href="/contact" className="hover:text-white">Contact</a></li>
                </ul>
              </div>

              {/* Column 3 - Contact */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact</h4>
                <p className="text-gray-300">Prescott, AZ</p>
                <p className="text-gray-300">(928) 899-4826</p>
                <p className="text-gray-300">steven.r@rawhidecontracting.com</p>
              </div>

            </div>

            {/* Divider */}
            <div className="border-t border-gray-700 my-8"></div>

            {/* Affiliations / Logo */}
            <div className="flex flex-col items-center gap-4">
              <p className="text-sm text-gray-400 uppercase tracking-wide">
                Proud Member Of
              </p>

              <img
                src="/YCCA-Logo-TB.png"
                alt="Yavapai County Contractors Association"
                className="h-32 opacity-80 hover:opacity-100 transition bg-white"
              />
            </div>

          
        
        
        {/* <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"> */}
          
          {/* Left Side: Brand or Info */}
          {/* <div className="text-center md:text-left">
            <p className="font-semibold">&copy; {new Date().getFullYear()} Rawhide Contracting LLC</p>
            <p className="text-sm"> ROC 359927</p>
            <p className="text-sm">Prescott, Arizona</p>
          </div> */}
  

        

          {/* Right Side: Links */}
          {/* <div className="flex space-x-6">
            <a href="/about" className="hover:text-white">About</a>
            <a href="/services" className="hover:text-white">Services</a>
            <a href="/contact" className="hover:text-white">Contact</a>
          </div> */}
        {/* </div> */}
      </footer>
    )

}