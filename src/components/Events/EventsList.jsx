/* eslint-disable react/prop-types */
import {useEffect, useState} from "react"
import EventCard from "./EventCard"
import axios from "axios"


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

export default function EventsList({category, getEventsUrl, eventRegistrationUrl})
{
    const [eventsArray, setEventsArray] = useState([])
    useEffect(()=>{
        const fetchData = async ()=>{
            
            const events =  (await axios.get(getEventsUrl))
            setEventsArray(events.data[category])
        }

        fetchData()
    }, [])
    return (<div>
            <div className="flex gap-2 overflow-x-auto h-fit w-[97%] mx-auto relative top-2">
                {Array.isArray(eventsArray) && eventsArray.length > 0 ? eventsArray.map((event, index)=>{
                    if(eventRegistrationUrl)
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
                              }
                            
                            } catch (error) {
                              console.error("Event registration failed", error.response?.data || error.message);
                              alert("Cannot register!");
                            } 
                        };
                        return <EventCard key={index} game={event.game.name} prizepool={event.prizepool} fee={event.fee} totalPlayersRegistered={event.totalPlayersRegistered} totalSlots={event.game.maxTeams * event.game.maxTeamMembers} date={event.eventDateTime} buttonText={"Register"} buttonFunction={onRegister}/>
                    }
                    return <EventCard key={index} game={event.game.name} prizepool={event.prizepool} fee={event.fee} totalPlayersRegistered={event.totalPlayersRegistered} totalSlots={event.game.maxTeams * event.game.maxTeamMembers} date={event.eventDateTime}/>
                }) : registeredEvents.map((event, index)=>{
                    return <EventCard key={index} game={event.game} prizepool={event.prizepool} fee={event.fee} totalPlayersRegistered={event.totalPlayersRegistered} totalSlots={event.totalSlots} date={event.date}/>
                })} 
        </div>
    </div>)
}