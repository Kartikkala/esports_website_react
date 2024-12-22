/* eslint-disable react/prop-types */
import { IoClose } from "react-icons/io5";
import { useState } from "react";


export default function EventRegistrationDialog({isOpen, toggleMenu, eventRegistrationFunction})
{
    const [playerInGameId, changeplayerInGameId] = useState(undefined)

    return (
        <div className={`z-[99] bg-opacity-60 absolute flex-col ${isOpen ? 'flex' : 'hidden'} bg-black shadow-lg text-white top-0 h-full w-full items-center left-0`}>
            <div className={`flex-col ${isOpen ? 'flex' : 'hidden'} gap-5 border-2 border-gray-800 bg-gradient-to-bl from-gray-800/50 via-gray-900/50 to-black/50 backdrop-blur-xl shadow-lg text-white p-4 rounded-2xl h-auto w-full self-center my-auto`}>
              <div className='flex justify-between'>
                <button onClick={()=>{toggleMenu((menu)=>menu=!menu)}} className='self-center'><IoClose size={25}/></button>
                <h4 className='self-center text-sm'>Enter in Game Id</h4>
                <div className='size-1'></div>
              </div>
              <div className='bg-gray-950 rounded-2xl relative md:bg-gray-100/0 flex flex-col gap-4'>
              <label className="text-sm">
                Player ID:
              </label>
              <input onChange={(e) => changeplayerInGameId(e.target.value)} type="text" className="relative text-gray-300 hover:bg-gray-900/70 hover:p-3 h-8 focus:z-[20] focus:outline-none focus:bg-gray-900/70 focus:p-3 outline-none shadow-lg sm:text-sm rounded-xl bg-gray-800/40 duration-200"/>
                <div onClick={()=>{eventRegistrationFunction(playerInGameId);toggleMenu((menu)=>menu = !menu)}} className=" px-[1em] py-[0.25em] border-[1px] rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]">
                    Submit
                </div>
              </div>
            </div>
        </div>
    )
}