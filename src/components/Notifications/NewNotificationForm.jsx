import { useEffect, useState } from "react"
import axios from 'axios'
import { IoClose } from "react-icons/io5"


export default function NewNotificationForm({  createNotificationUrl, isOpen, toggleMenu })
{
    const [title, changeTitle] = useState(undefined)
    const [description, setDescription] = useState(undefined)
    const [buttonStatus, changeButtonStatus] = useState(false)
    const [isSubmitting, changeIsSubmitting] = useState(false)
    
        async function handleSubmit(e)
        {
            e.preventDefault()
            changeIsSubmitting(true)

            try {
              const response = await axios.post(createNotificationUrl, {
                title,
                description
              }, {withCredentials : true});
              if(response.data.success)
              {
                alert("Notification posted!")
              }
          
            } catch (error) {
              alert("Failed to updated UPI ID!");
            } 
            finally{
              changeIsSubmitting(false)
            }
            changeButtonStatus(true)
        }

    
    return (
        <div className={`z-[99] bg-opacity-60 absolute flex-col ${isOpen ? 'flex' : 'hidden'} bg-black shadow-lg text-white top-0 h-full w-full items-center left-0`}>
            <div className={`flex-col ${isOpen ? 'flex' : 'hidden'} gap-5 border-2 border-gray-800 bg-gradient-to-bl from-gray-800/50 via-gray-900/50 to-black/50 backdrop-blur-xl shadow-lg text-white p-4 rounded-2xl h-auto md:min-w-[90%] min-w-[90%] self-center my-auto`}>
              <div className='flex justify-between'>
                <button onClick={()=>{toggleMenu((menu)=>menu=!menu)}} className='self-center'><IoClose size={25}/></button>
                <h4 className='self-center text-sm'>Broadcast Notification</h4>
                <div className='size-1'></div>
              </div>
              <div className='bg-gray-950 rounded-2xl relative md:bg-gray-100/0 flex flex-col gap-4'>
                <form className="space-y-6 flex flex-col h-full">

                        <div className="w-full flex">
                        <div className={`text-white absolute z-[-1] flex place-items-center justify-around left-6 top-3 gap-3 ${title ? "opacity-0": "opacity-100"}`}>Title</div>
                        <input disabled={isSubmitting} onChange={(e)=> changeTitle(e.target.value)} className={`mx-auto w-full relative text-gray-300 h-12 ${!title?'bg-red-900/20':'bg-green-900/20'} outline-none shadow-lg sm:text-sm rounded-xl duration-200 pl-3`}/>
                        </div>
    
                        <div className="relative w-full flex">
                        <textarea disabled={isSubmitting} onChange={(e) => setDescription(e.target.value)} className="mx-auto w-full h-60 relative text-gray-300 hover:bg-gray-900/70 hover:p-3 focus:z-[20] focus:outline-none focus:bg-gray-900/70 focus:p-3 outline-none shadow-lg sm:text-sm rounded-xl bg-gray-800/40 duration-200 pl-3"/>
                        <div className={`text-white absolute z-[-1] flex place-items-center justify-around left-6 top-3 gap-3 ${description ? "opacity-0": "opacity-100"}`}>Description</div>
                        </div>

                        <button disabled={isSubmitting} onClick={handleSubmit} className={`rounded-md p-3 transition-all shadow-lg ${buttonStatus ? "bg-gradient-to-br from-purple-600 to-purple-300": "bg-gradient-to-tr from-purple-600 to-priFront"}`}> Boradcast </button>
                </form>
              </div>
            </div>
        </div>
    )
}