/* eslint-disable react/prop-types */
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import axios from 'axios'
import RegularInfoTyping from "./RegularInfoTyping";

export default function WinnerDeclareDialog({isOpen, toggleMenu, eventId, getWinnerUrl})
{
    const [playerInGameId, changeplayerInGameId] = useState(undefined)
    const [upiId, setUpiId] = useState("")

    const getWinner = async ()=>{
        try{
            const response = await axios.post(getWinnerUrl, {
                eventId,
                inGameId : playerInGameId
            }, {withCredentials : true})

            setUpiId(response.data.upi)
        }
        catch(e)
        {
            if(e.response)
            {
                if( e.response.status === 404)
                {
                    alert("User not found!")
                }
                else if(e.response.status === 402)
                {
                    alert("User has not entered his UPI ID yet!")
                }
                else if(e.response.status === 405)
                {
                    alert("Event not found!")
                }
                else if(e.response.status === 400)
                {
                    console.error("Invalid request params")
                }
            }
        }
        
    }

    return (
        <div className={`z-[99] bg-opacity-60 absolute flex-col ${isOpen ? 'flex' : 'hidden'} bg-black shadow-lg text-white top-0 h-full w-full items-center left-0`}>
            <div className={`flex-col ${isOpen ? 'flex' : 'hidden'} gap-5 border-2 border-gray-800 bg-gradient-to-bl from-gray-800/50 via-gray-900/50 to-black/50 backdrop-blur-xl shadow-lg text-white p-4 rounded-2xl h-auto w-full self-center my-auto`}>
              <div className='flex justify-between'>
                <button onClick={()=>{toggleMenu((menu)=>menu=!menu)}} className='self-center'><IoClose size={25}/></button>
                <h4 className='self-center text-sm'>Get UPI ID</h4>
                <div className='size-1'></div>
              </div>
              <div className='bg-gray-950 rounded-2xl relative md:bg-gray-100/0 flex flex-col gap-4'>
              <RegularInfoTyping label={"UPI:"} value={`${upiId}`}/>
              <label className="text-sm">
                Player ID:
              </label>
              <input value={playerInGameId} onChange={(e) => changeplayerInGameId(e.target.value)} type="text" className="relative text-gray-300 hover:bg-gray-900/70 hover:p-3 h-8 focus:z-[20] focus:outline-none focus:bg-gray-900/70 focus:p-3 outline-none shadow-lg sm:text-sm rounded-xl bg-gray-800/40 duration-200"/>
                <div onClick={getWinner} className=" px-[1em] py-[0.25em] border-[1px] rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]">
                    Get UPI ID
                </div>
              </div>
            </div>
        </div>
    )
}