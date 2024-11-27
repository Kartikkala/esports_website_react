import { useState } from "react"


export default function NewEventForm({gamelist})
{
    const [eventName, changeEventName] = useState(0)
    const [modeName, changeModeNameValue] = useState(0)
    const [maxTeams, changeMaxTeamsValue] = useState(0)
    const [maxTeamMembers, changeMaxTeamMembers] = useState(0)
    const [buttonStatus, changeButtonStatus] = useState(false)
    
    
    return (
        <form className="space-y-6 flex flex-col h-full">


    <div className="relative w-full flex">
    <input onChange={(e) => changeEventName(e.target.value)} type="text" name="eventName" id="eventName" className="mx-auto relative text-gray-300 hover:bg-gray-900/70 hover:p-3 h-12 focus:z-[20] focus:outline-none focus:bg-gray-900/70 focus:p-3 outline-none shadow-lg sm:text-sm rounded-xl bg-gray-800/40 duration-200 pl-3"/>
    <div className={`text-white absolute z-[-1] flex place-items-center justify-around left-6 top-3 gap-3 ${eventName ? "opacity-0": "opacity-100"}`}>Event Name</div>
    </div>

    <div className="relative w-full flex">
    <div className={`text-white absolute z-[-1] flex place-items-center justify-around left-6 top-3 gap-3 ${modeName ? "opacity-0": "opacity-100"}`}> Mode Name</div>
    <input onChange={(e) => changeModeNameValue(e.target.value)} type="text" name="modeName" id="modeName" className="mx-auto relative text-gray-300 hover:bg-gray-900/70 hover:p-3 h-12 focus:z-[20] focus:outline-none focus:bg-gray-900/70 focus:p-3 outline-none shadow-lg sm:text-sm rounded-xl bg-gray-800/40 duration-200 pl-3"/>
    </div>

    <div className="relative w-full flex">
    <div className={`text-white absolute z-[-1] flex place-items-center justify-around left-6 top-3 gap-3 ${maxTeams ? "opacity-0": "opacity-100"}`}>Event Date</div>
    <input onChange={(e) => changeMaxTeamsValue(e.target.value)} type="datetime" name="maxTeams" id="maxTeams" className="mx-auto relative text-gray-300 hover:bg-gray-900/70 hover:p-3 h-12 focus:z-[20] focus:outline-none focus:bg-gray-900/70 focus:p-3 outline-none shadow-lg sm:text-sm rounded-xl bg-gray-800/40 duration-200 pl-3"/>
    </div>

    <div className="relative w-full flex">
    <div className={`text-white absolute z-[-1] flex place-items-center justify-around left-6 top-3 gap-3 ${maxTeamMembers ? "opacity-0": "opacity-100"}`}>Event Time</div>
    <input onChange={(e) => changeMaxTeamMembers(e.target.value)} type="number" name="maxTeamMembers" id="maxTeamMembers" className="mx-auto relative  hover:bg-gray-900/70 hover:p-3 h-12 focus:z-[20] focus:outline-none focus:bg-gray-900/70 focus:p-3 outline-none shadow-lg sm:text-sm rounded-xl bg-gray-800/40 duration-200 text-gray-300 pl-3"/>
    </div>

    <button onClick={() => {changeButtonStatus(true)}} className={`rounded-md p-3 transition-all shadow-lg ${buttonStatus ? "bg-gradient-to-br from-purple-600 to-purple-300": "bg-gradient-to-tr from-purple-600 to-priFront"}`}> Submit </button>
  </form>
    )
}