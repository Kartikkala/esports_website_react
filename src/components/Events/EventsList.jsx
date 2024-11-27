/* eslint-disable react/prop-types */
import EventCard from "./EventCard"


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

export default function EventsList({category, eventsArray})
{
    return (<div>
            <div className="flex gap-2 overflow-x-auto h-fit w-[97%] mx-auto relative top-2">
                {Array.isArray(eventsArray) && eventsArray.length > 0 ? eventsArray.map((event, index)=>{
                    return <EventCard key={index} game={event.game} prizepool={event.prizepool} fee={event.fee} totalPlayersRegistered={event.totalPlayersRegistered} totalSlots={event.totalSlots} date={event.date}/>
                }) : registeredEvents.map((event, index)=>{
                    return <EventCard key={index} game={event.game} prizepool={event.prizepool} fee={event.fee} totalPlayersRegistered={event.totalPlayersRegistered} totalSlots={event.totalSlots} date={event.date}/>
                })} 
        </div>
    </div>)
}