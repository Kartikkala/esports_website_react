import {useEffect, useState} from "react";
import Notification from "./Notification"
import axios from "axios";
import NewNotificationForm from './NewNotificationForm'
import { IoMdAddCircleOutline } from "react-icons/io";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function Notifications({getNotificationsUrl, deleteNotificationUrl, createNotificationUrl})
{
    const [notifications, setNotifications] = useState([])
    const [newNotificationPanel, setnewNotificationPanelState] = useState(false)
    const {user} = useContext(UserContext)
    async function getAllNotifications()
    {
        try{
            const response  = await axios.get(getNotificationsUrl)
            setNotifications(response.data)
        }
        catch(e)
        {
            if(e.response && e.response.status === 401)
            {
                alert("Please login again!")
            }
        }
    }

    useEffect(()=>{
        getAllNotifications()        
    }, [])
    return (<div className="bg-cover bg-[url(/home/sirkartik/vscode/esports_website_react/frontend/src/assets/images/Sprinkle.svg)] h-full w-screen">
        <div className="backdrop-blur-[2px] h-full w-full">
            <div className="relative gap-1 top-1 p-1 flex flex-col grow h-[100%] w-[97%] mx-auto border-2 border-gray-800 rounded-[1.5em] bg-gradient-to-r from-gray-800/50 via-gray-900/50 to-black/50 backdrop-blur-lg shadow-lg overflow-y-auto">
                {
                    notifications && notifications.length !=0 ? notifications.map((notification, index)=>{
                        return (<Notification key={index} subject={notification.title} content={notification.description} date={notification.dateTime}/>)
                    }) : <div className="text-gray-400 m-auto">No Notifications</div>
                }
                {user.admin ? <NotificationFormButtonToggle notificationPanelState={newNotificationPanel} setnewNotificationPanelState={setnewNotificationPanelState}/> : null}
                <NewNotificationForm createNotificationUrl={createNotificationUrl} isOpen={newNotificationPanel} toggleMenu={()=>{setnewNotificationPanelState((state)=>state = !state)}}/>
            </div>
        </div>

    </div>)
}

function NotificationFormButtonToggle({notificationPanelState, setnewNotificationPanelState})
{
    return (
        <div onClick={()=>{setnewNotificationPanelState((state) => state = !state)}} className={`z-[99] bg-gradient-to-tr from-purple-600 to-priFront hover:bg-gradient-to-tr hover:from-priFront to hover:bg-purple-600 duration-300 right-8 md:right-10 md:bottom:10 bottom-12 absolute p-2 rounded-xl bg-purple-500 ${notificationPanelState ? "hidden": "flex"}`}>
            <IoMdAddCircleOutline size={45}/>
        </div>
    )
}