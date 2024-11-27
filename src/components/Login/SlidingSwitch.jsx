/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

export default function SlidingSwitch({isVisible, setIsVisible})
{
    return (
        <div className="text-center sm:mb-10 md:mb-14 lg:mb-16 flex flex-row relative">
                  {/* Sliding Box */}
                  <div className={`h-full w-1/2 top-0 left-0 bg-gradient-to-r from-purple-600 to-priFront transition-transform duration-300 rounded-md absolute ${isVisible ? "transform translate-x-0" : "transform translate-x-full"} z-0`}></div>
  
                  {/* Button Container */}
                  <div className="w-full flex relative z-10 bg-opacity-0">
                      <button 
                          onClick={() => setIsVisible(true)} 
                          className={`flex items-center justify-center focus:outline-none text-black shadow-lg hover:shadow-xl w-1/2 bg-gradient-to-r from-purple-600/20 to-priFront/20 py-2 rounded-md rounded-r-none`}
                      >
                          Login
                      </button>
                      <button 
                          onClick={() => setIsVisible(false)}
                          className={`flex items-center justify-center focus:outline-none text-black shadow-lg hover:shadow-xl w-1/2 bg-gradient-to-r from-purple-600/20 to-priFront/20 py-2 rounded-md rounded-l-none`}
                      >
                          Register
                      </button>
                  </div>
              </div>
    );
}
