import React, { useEffect, useState } from 'react'
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from "react-router-dom";

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
  const [showName, setShowName] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (Math.abs(currentScrollY - lastScrollY) < 8) return;

      setScrolled(currentScrollY > 40);

      if (currentScrollY < 40) {
        setShowName(true);
      } else if (currentScrollY < lastScrollY) {
        setShowName(true);
      } else {
        setShowName(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  for (let i = 0; i < navigation.length; i++) {
    navigation[i].current = navigation[i].href === location.pathname;
  }

  return (
    <Disclosure
      as="nav"
      className={classNames(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 md:relative",
        scrolled
          ? "bg-transparent md:bg-[#2F1D0F]"
          : "bg-[#2F1D0F]/90 backdrop-blur-sm md:bg-[#2F1D0F]"
      )}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">

              {/* Left: Logo + Company Name */}
              <div className="flex items-center min-w-0">
                <Link to="/" className="flex items-center min-w-0">
                  <picture>
                    <source srcSet="Rawhide Contracting Logo Website.webp" type="image/webp" />
                    <source srcSet="Rawhide Contracting Logo Website.png" type="image/png" />
                    <img
                      src="Rawhide Contracting Logo Website.png"
                      alt="Rawhide Contracting"
                      className="h-[50px] sm:h-[60px] w-auto mr-3 flex-shrink-0 transition-all duration-300"
                    />
                  </picture>

                  <span
                    className={classNames(
                      "text-lg sm:text-xl md:text-2xl font-bold text-white whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out",
                      showName
                        ? "opacity-100 translate-x-0 max-w-[320px]"
                        : "opacity-0 -translate-x-3 max-w-0 md:opacity-100 md:translate-x-0 md:max-w-[220px]"
                    )}
                  >
                    Rawhide Contracting
                  </span>
                </Link>
              </div>

              {/* Desktop Nav */}
              <div className="hidden md:flex md:space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-[#9E3D1D] text-white'
                        : 'text-white hover:bg-[#d75428] hover:text-white hover:scale-105 hover:shadow-2xl',
                      'rounded-md px-3 py-2 text-sm font-medium transition'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Desktop CTA */}
              <div className="hidden md:flex">
                <Link
                  to="/contact"
                  className="bg-[#9E3D1D] hover:bg-[#d75428] text-white font-bold py-2 px-4 rounded hover:scale-105 hover:shadow-2xl transition"
                >
                  Get a Quote!
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="bg-black/50 md:hidden flex items-center">
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
          <Disclosure.Panel className="md:hidden bg-[#2F1D0F] px-4 pt-2 pb-4 shadow-lg">
            <div className="space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  to={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-[#9E3D1D] text-white'
                      : 'text-white hover:bg-[#d75428] hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                >
                  {item.name}
                </Disclosure.Button>
              ))}

              <Link
                to="/contact"
                className="block mt-2 bg-[#9E3D1D] hover:bg-[#d75428] text-white font-bold px-3 py-2 rounded-md text-base text-center transition"
              >
                Get a Quote!
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}