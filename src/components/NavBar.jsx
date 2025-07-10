import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useNavigate, useLocation } from "react-router-dom";

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'About', href: '/about', current: false },
  { name: 'Services', href: '/services', current: false },
  { name: 'Contact', href: '/contact', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function NavBar() {

  const location = useLocation();

  for(let i=0; i<navigation.length; i++){
    navigation[i].current = (navigation[i].href == location.pathname)
  }


  return (
    <Disclosure as="nav" className="bg-[#2F1D0F]">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              
              {/* Left: Logo + Company Name */}
              <div className="flex items-center">
                <img
                  src="/Rawhide Contracting Logo Website.png"
                  alt="Rawhide Contracting"
                  className="h-10 w-auto mr-3"
                />
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                  Rawhide Contracting
                </span>
              </div>

              {/* Center: Desktop Nav */}
              <div className="hidden sm:flex sm:space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}

                    // onClick={() => handleNavClick(item)}

                    className={classNames(
                      item.current
                        ? 'bg-[#9E3D1D] text-white'
                        : 'text-white hover:bg-[#d75428] hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium'
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              {/* Right: Quote Button */}
              <div className="hidden sm:flex">
                <a
                  href="/contact"
                  className="bg-[#9E3D1D] hover:bg-[#d75428] text-white font-bold py-2 px-4 rounded"
                >
                  Get a Quote!
                </a>
              </div>

              {/* Mobile menu button */}
              <div className="sm:hidden flex items-center">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-[#9E3D1D] hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile Nav Links */}
          <Disclosure.Panel className="sm:hidden bg-[#2F1D0F] px-4 pt-2 pb-4">
            <div className="space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="button"
                  // onClick={() => handleNavClick(item)}

                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-[#9E3D1D] text-white'
                      : 'text-white hover:bg-[#d75428] hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              {/* Mobile CTA button */}
              <a
                href="#contact"
                className="block mt-2 bg-[#9E3D1D] hover:bg-[#d75428] text-white font-bold px-3 py-2 rounded-md text-base text-center"
              >
                Get a Quote!
              </a>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
