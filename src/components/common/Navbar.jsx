import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { FaAngleRight } from "react-icons/fa6";
import {links} from '../../constant/index'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <div className="w-full bg-[var(--primary)] py-6 px-4">
      {/* Desktop Navbar */}
      <nav className="hidden lg:flex max-w-5xl mx-auto bg-white rounded-full shadow-lg px-10 py-2 border border-[#E5E5E7] items-center justify-between">
        <img src="logo.png" alt="" className='h-16' />

        <ul className="flex items-center gap-8">
          {links.map((item, index) => (
            <li 
              key={index} 
              className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-bold text-base"
            >
              {item}
            </li>
          ))}
        </ul>

        <button className="bg-blue-600 flex justify-center items-center gap-2 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-md hover:shadow-lg">
          Try For Free <FaAngleRight/>
        </button>
      </nav>

      {/* Mobile Navbar */}
      <nav className="lg:hidden max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl shadow-lg px-6 py-4">
          <div className="flex justify-between items-center">
            <img src="logo.png" alt="" className='h-16' />
            
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isOpen && (
            <div className="mt-6 pt-4 border-t border-gray-200">
              <ul className="flex flex-col gap-1 mb-6">
                {links.map((item, index) => (
                  <li 
                    key={index} 
                    className="text-gray-700 hover:bg-gray-50 py-3 px-4 rounded-lg cursor-pointer font-medium transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full font-semibold transition-all shadow-md">
                Try For Free
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;