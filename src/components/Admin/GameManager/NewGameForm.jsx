import { useState } from "react"
import { FaSquarePlus } from "react-icons/fa6";
import axios from "axios";


export default function NewGameForm({gameSubmitUrl})
{
    const [gameName, changeGameNameValue] = useState(undefined)
    const [imageBanner, changeImageBanner] = useState()
    const [modeName, changeModeNameValue] = useState(undefined)
    const [maxTeams, changeMaxTeamsValue] = useState(undefined)
    const [maxTeamMembers, changeMaxTeamMembersValue] = useState(undefined)
    const [buttonStatus, changeButtonStatus] = useState(false)
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const query = {
                name : gameName,
                maxTeamMembers,
                maxTeams,
                modeName,
                type : true, // Change this
                imageBanner
              }
          console.log("Query is: ", query)
          const response = await axios.post(gameSubmitUrl, query , {withCredentials : true});
          // Check response status code and send appropriate message
    
          
          if(response.data.success)
          {
            alert("Success!")
          }
          else
          {
            alert("Faliure!")
          }
    
        } catch (error) {
          console.error("New game failiure", error.response?.data || error.message);
          
          alert("New game creation has some error!");
        } 
        changeButtonStatus(true)
      };

    function handleImageUpload(event)
    {
        const file = event.target.files[0];
        if(file)
        {
            const reader = new FileReader();

            reader.readAsDataURL(file);
            reader.onloadend = async ()=>{
                const buffer = reader.result;
                
                changeImageBanner(buffer);
            }
            reader.onerror = (err)=>{
                console.error("Error happened: " , err)
            }
        }
    }
    
    
    return (
        <form className="space-y-6 flex flex-col h-full">
            {imageBanner ? <img src={imageBanner} className='object-cover overflow-hidden max-w-[16rem] max-h-[9rem] rounded-[1.5em] shadow-inner shadow-black border border-white'/>
            :
            <div className='w-[16rem] h-[11rem] bg-gray-800 rounded-[1.5em] shadow-inner shadow-black'/>}
    <div className="flex flex-col">
    <input accept="image/" onChange={handleImageUpload} type="file" name="imageBanner" id="imageInput" className="hidden"/>
    <label htmlFor="imageInput" className="self-center text-gray-300 flex flex-col">
        <div className="self-center">
            <FaSquarePlus size={50}/>
        </div>
        <div className="text-white">
            Add Image
        </div>
    </label>
    </div>

    <div className="relative w-full flex">
    <input onChange={(e) => changeGameNameValue(e.target.value)} type="text" name="gameName" id="gameName" className="mx-auto relative text-gray-300 hover:bg-gray-900/70 hover:p-3 h-12 focus:z-[20] focus:outline-none focus:bg-gray-900/70 focus:p-3 outline-none shadow-lg sm:text-sm rounded-xl bg-gray-800/40 duration-200 pl-3"/>
    <div className={`text-white absolute z-[-1] flex place-items-center justify-around left-10 top-3 gap-3 ${gameName ? "opacity-0": "opacity-100"}`}>Game Name</div>
    </div>

    <div className="relative w-full flex">
    <div className={`text-white absolute z-[-1] flex place-items-center justify-around left-10 top-3 gap-3 ${modeName ? "opacity-0": "opacity-100"}`}> Mode Name</div>
    <input onChange={(e) => changeModeNameValue(e.target.value)} type="text" name="modeName" id="modeName" className="mx-auto relative text-gray-300 hover:bg-gray-900/70 hover:p-3 h-12 focus:z-[20] focus:outline-none focus:bg-gray-900/70 focus:p-3 outline-none shadow-lg sm:text-sm rounded-xl bg-gray-800/40 duration-200 pl-3"/>
    </div>

    <div className="relative w-full flex">
    <div className={`text-white absolute z-[-1] flex place-items-center justify-around left-10 top-3 gap-3 ${maxTeams ? "opacity-0": "opacity-100"}`}>Max-Teams</div>
    <input onChange={(e) => changeMaxTeamsValue(e.target.value)} type="number" name="maxTeams" id="maxTeams" className="mx-auto relative text-gray-300 hover:bg-gray-900/70 hover:p-3 h-12 focus:z-[20] focus:outline-none focus:bg-gray-900/70 focus:p-3 outline-none shadow-lg sm:text-sm rounded-xl bg-gray-800/40 duration-200 pl-3"/>
    </div>

    <div className="relative w-full flex">
    <div className={`text-white absolute z-[-1] flex place-items-center justify-around left-10 top-3 gap-3 ${maxTeamMembers ? "opacity-0": "opacity-100"}`}>Max-Team Members</div>
    <input onChange={(e) => changeMaxTeamMembersValue(e.target.value)} type="number" name="maxTeamMembers" id="maxTeamMembers" className="mx-auto relative  hover:bg-gray-900/70 hover:p-3 h-12 focus:z-[20] focus:outline-none focus:bg-gray-900/70 focus:p-3 outline-none shadow-lg sm:text-sm rounded-xl bg-gray-800/40 duration-200 text-gray-300 pl-3"/>
    </div>

    <button onClick={handleSubmit} className={`rounded-md p-3 transition-all shadow-lg ${buttonStatus ? "bg-gradient-to-br from-purple-600 to-purple-300": "bg-gradient-to-tr from-purple-600 to-priFront"}`}> Submit </button>
  </form>
    )
}