import { useState } from "react"
import axios from 'axios'
import {useNavigate} from "react-router-dom"


export default function NewEventForm({ eventSubmitUrl, selectedGameId})
{
    const [prizepool, changeprizepool] = useState(undefined)
    const [fee, changefeeValue] = useState(undefined)
    const [eventDateTime, changeEventDateTime] = useState(undefined)
    const [buttonStatus, changeButtonStatus] = useState(false)
    const [isSubmitting, changeIsSubmitting] = useState(false)

    const navigate = useNavigate()
    const handleSubmit = async (e) => {
    e.preventDefault();
    changeIsSubmitting(true)

    try {
      const response = await axios.post(eventSubmitUrl, {
        prizepool : prizepool,
        fee : fee,
        eventDateTime : eventDateTime,
        gameId : selectedGameId
      }, {withCredentials : true});
      if(response.data.eventId)
      {
        navigate("/upcomingEvents")
        alert("Event created!")
      }

    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      alert("Login failed. Please check your credentials.");
    } 
    finally{
      changeIsSubmitting(false)
    }
    changeButtonStatus(true)
  };
    
    
    return (
        <form className="space-y-6 flex flex-col h-full">

    <div className="relative w-full flex">
    <input disabled={isSubmitting} onChange={(e) => changeprizepool(e.target.value)} type="number" name="prizepool" id="prizepool" className="mx-auto relative text-gray-300 hover:bg-gray-900/70 hover:p-3 h-12 focus:z-[20] focus:outline-none focus:bg-gray-900/70 focus:p-3 outline-none shadow-lg sm:text-sm rounded-xl bg-gray-800/40 duration-200 pl-3"/>
    <div className={`text-white absolute z-[-1] flex place-items-center justify-around left-6 top-3 gap-3 ${prizepool ? "opacity-0": "opacity-100"}`}>Prizepool</div>
    </div>

    <div className="relative w-full flex">
    <div className={`text-white absolute z-[-1] flex place-items-center justify-around left-6 top-3 gap-3 ${fee ? "opacity-0": "opacity-100"}`}> Fee</div>
    <input disabled={isSubmitting} onChange={(e) => changefeeValue(e.target.value)} type="number" name="fee" id="fee" className="mx-auto relative text-gray-300 hover:bg-gray-900/70 hover:p-3 h-12 focus:z-[20] focus:outline-none focus:bg-gray-900/70 focus:p-3 outline-none shadow-lg sm:text-sm rounded-xl bg-gray-800/40 duration-200 pl-3"/>
    </div>

    <div className="relative w-full flex">
    <div className={`text-white absolute z-[-1] flex place-items-center justify-around left-6 top-3 gap-3 ${eventDateTime ? "opacity-0": "opacity-100"}`}>Event Date Time</div>
    <input disabled={isSubmitting} onChange={(e) => changeEventDateTime(e.target.value)} type="text" name="eventDateTime" className="mx-auto relative text-gray-300 hover:bg-gray-900/70 hover:p-3 h-12 focus:z-[20] focus:outline-none focus:bg-gray-900/70 focus:p-3 outline-none shadow-lg sm:text-sm rounded-xl bg-gray-800/40 duration-200 pl-3"/>
    </div>

    <button disabled={isSubmitting} onClick={handleSubmit} className={`rounded-md p-3 transition-all shadow-lg ${buttonStatus ? "bg-gradient-to-br from-purple-600 to-purple-300": "bg-gradient-to-tr from-purple-600 to-priFront"}`}> Submit </button>
  </form>
    )
}