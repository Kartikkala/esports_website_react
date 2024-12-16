/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import {useState} from 'react';

export default function ModeSelection({optionsArray})
{
  const [sliderState, setsliderState] = useState(0)
    return (
        <div className="text-center sm:mb-10 md:mb-14 lg:mb-16 flex flex-row relative">
                  {/* Sliding Box */}
                  <div className={`top-2 h-full w-1/2 left-0 bg-gradient-to-r from-purple-600 to-priFront rounded-md absolute z-0`} style={{ transform: `translateX(${sliderState}%)`, transition: 'transform 0.3s' }}></div>

                  {/* Button Container */}
                  <div className="flex relative z-10 top-2 w-80">
                  {optionsArray.map((option, key)=>{
                  return (
                        <Link onClick={()=>{
                          setsliderState(key * 100)
                        }} key={key} to={option.url} className={`flex items-center justify-center focus:outline-none text-gray-300 shadow-lg hover:shadow-xl w-1/2 bg-gradient-to-r from-purple-600/20 to-priFront/20 py-2 rounded-md`}>
                          {option.name}
                        </Link>
                      )
                      })}
                  </div>
              </div>
    );
}
