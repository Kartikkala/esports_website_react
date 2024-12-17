/* eslint-disable react/prop-types */
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function JoinIdDialog({isOpen, toggleMenu, submitJoinIdUrl, eventId, setChange})
{
    const [roomId, changeRoomId] = useState("")
    const navigate = useNavigate()

    const onSubmit = async (e) => {
      e.preventDefault();

      try {
          const query = {
              joinId : roomId,
              eventId : eventId
            }
        const response = await axios.post(submitJoinIdUrl, query , {withCredentials : true});
        // Check response status code and send appropriate message
        
        if(response.data.success)
        {
          toggleMenu((menu)=>menu=!menu)
          setChange((change)=>change=change+1)
          navigate('/ongoingEvents')
          alert("Success!")
        }
        else
        {
          alert("Faliure!")
        }
  
      } catch (error) {
        console.error("Publish roomId error", error.response?.data || error.message);
        
        alert("Publish roomId error!");
      } 
    };
    return (
        <div className={`z-[99] md:p-0 md:w-fit md:h-fit md:right-4 md:top-16 md:bg-opacity-0 md:bg-none bg-opacity-60 absolute flex-col ${isOpen ? 'flex' : 'hidden'} bg-black shadow-lg text-white top-0 h-full w-full items-center left-0`}>
            <div className={`flex-col ${isOpen ? 'flex' : 'hidden'} gap-5 border-2 border-gray-800 bg-gradient-to-bl from-gray-800/50 via-gray-900/50 to-black/50 backdrop-blur-xl shadow-lg text-white p-4 rounded-2xl h-auto w-full self-center my-auto`}>
              <div className='md:hidden flex justify-between'>
                <button onClick={()=>{toggleMenu((menu)=>menu=!menu)}} className='self-center'><IoClose size={25}/></button>
                <h4 className='self-center text-sm'>Edit Room Code</h4>
                <div className='size-1'></div>
              </div>
              <div className='bg-gray-950 rounded-2xl relative md:bg-gray-100/0 flex flex-col gap-4'>
              <label className="text-sm">
                Room ID:
              </label>
              <input onChange={(e) => changeRoomId(e.target.value)} type="text" className="relative text-gray-300 hover:bg-gray-900/70 hover:p-3 h-8 focus:z-[20] focus:outline-none focus:bg-gray-900/70 focus:p-3 outline-none shadow-lg sm:text-sm rounded-xl bg-gray-800/40 duration-200"/>
                <button onClick={onSubmit} className=" px-[1em] py-[0.25em] border-[1px] rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]">
                    Submit
                </button>
              </div>
            </div>
        </div>
    )
}