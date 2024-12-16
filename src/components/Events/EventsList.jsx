/* eslint-disable react/prop-types */
import {useContext, useEffect, useState} from "react"
import EventCard from "./EventCard"
import axios from "axios"
import {WalletContext} from "../../contexts/CurrencyContext"
import { UserContext } from '../../contexts/UserContext';
import { Buffer } from "buffer";


const registeredEvents = [
    {
        "eventId" : "1234221",
        "game" : "Valorant",
        "prizepool" : 500,
        "fee" : 20, 
        "date" : "12/12/2024",
        "totalPlayersRegistered" : 30,
        "totalSlots" : 50
    },
    {
        "eventId" : "1334221",
        "game" : "PUBG",
        "prizepool" : 500,
        "fee" : 20, 
        "date" : "10/12/2024",
        "totalPlayersRegistered" : 90,
        "totalSlots" : 100
    },
    {
        "eventId" : "1334221",
        "game" : "PUBG",
        "prizepool" : 500,
        "fee" : 20, 
        "date" : "10/12/2024",
        "totalPlayersRegistered" : 90,
        "totalSlots" : 100
    }
]

export default function EventsList({category, getEventsUrl, getUserUrl ,eventRegistrationUrl, eventDeletetionUrl})
{
    const {setTotalMoney} = useContext(WalletContext)
    const {user, setUser} = useContext(UserContext)
    const [change, setChange] = useState(0)
    const [eventsArray, setEventsArray] = useState([])
    useEffect(()=>{
        const fetchData = async ()=>{
            
            const events =  (await axios.get(getEventsUrl))
            setEventsArray(events.data[category])
            console.log(events.data)
            setUser((await axios.get(getUserUrl)).data)
        }

        fetchData()
    }, [change])
    return (<div>
            <div className="flex gap-2 overflow-x-auto h-fit w-[97%] mx-auto relative top-2">
                {Array.isArray(eventsArray) && eventsArray.length > 0 ? eventsArray.map((event, index)=>{
                    if(eventRegistrationUrl && eventDeletetionUrl)
                    {
                        const onRegister = async (e) => {
                            e.preventDefault();
                          
                            try {
                              const response = await axios.post(eventRegistrationUrl, {
                                eventId : event.eventId
                              }, {withCredentials : true});

                              if(!response.data.success)
                              {
                                alert("Already registered or insufficient balance!")
                              }
                              else
                              {
                                alert("Registration successful!")
                                setChange((change)=>change+1)
                                setTotalMoney((oldMoney)=>oldMoney-event.fee)
                              }
                            
                            } catch (error) {
                              console.error("Event registration failed", error.response?.data || error.message);
                              alert("Cannot register!");
                            } 
                        };
                        const onDelete = async (e)=>{
                            e.preventDefault();
                            try {
                                const response = await axios.post(eventDeletetionUrl, {
                                  eventId : event.eventId
                                }, {withCredentials : true});

                                console.log(response)
  
                                if(!response.data.success)
                                {
                                  alert("Event does not exist!")
                                }
                                else
                                {
                                    alert("Deletetion successful!")
                                    setChange((change)=>change+1)
                                }
                              
                              } catch (error) {
                                console.error("Event deletetion failed", error.response?.data || error.message);
                                alert("Cannot register!");
                              } 
                        }
                        return <EventCard key={index} game={event.game.name} imageBanner={event.game.imageBanner && event.game.imageBanner.data?`data:image/jpeg;base64,${Buffer.from(event.game.imageBanner.data).toString("base64")}`:game.imageBanner} prizepool={event.prizepool} fee={event.fee} totalPlayersRegistered={event.totalPlayersRegistered} totalSlots={event.game.maxTeams * event.game.maxTeamMembers} date={event.eventDateTime} registerButtonTxt={"Register"} registerButtonFn={onRegister} deleteEventButtonFn={onDelete} admin={user.admin}/>
                    }
                    return <EventCard key={index} game={event.game.name} prizepool={event.prizepool} fee={event.fee} totalPlayersRegistered={event.totalPlayersRegistered} totalSlots={event.game.maxTeams * event.game.maxTeamMembers} date={event.eventDateTime}/>
                }) : registeredEvents.map((event, index)=>{
                    return <EventCard key={index} game={event.game} prizepool={event.prizepool} fee={event.fee} totalPlayersRegistered={event.totalPlayersRegistered} totalSlots={event.totalSlots} date={event.date}/>
                })} 
        </div>
    </div>)
}