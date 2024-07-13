import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/logo.png'; // Replace '../assets/logo.png' with the correct path to the logo image.
import { navItems } from '../constants';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
      <nav className="sticky top-0 z-50 backdrop-blur-lg py-3 border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <img src={logo} className="h-10 w-10 mr-2" alt="" />
              <span className="text xl tracking-tight">Bric</span>
            </div>
            <ul className="hidden lg:flex ml-14 space-x-12">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="hidden lg:flex justify-content space-x-12 items-center">
              <a href="" className="py-2 px-3 border rounded-md">
                Iniciar Sesion
              </a>
              <a
                href=""
                className="bg-gradient-to-r from-indigo-500 to-indigo-800
                py-2 px-3 rounded-md"
              >
                Registrarse
              </a>
            </div>

            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleNavbar}>
                {isOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {isOpen && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
              <ul>
                {navItems.map((item, index) => (
                  <li key={index} className="py-4">
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-6">
                <a href="#" className="py-2 px-3 border rounded-md">
                  Iniciar Sesion
                </a>
                <a
                  href="#"
                  className="bg-gradient-to-r from-indigo-500 to-indigo-800 py-2 px-3 rounded-md"
                >
                  Registrarse
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
  );
};
