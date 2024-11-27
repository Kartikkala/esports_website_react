/* eslint-disable react/prop-types */
import EventCard from "./EventCard"

export default function EventList({gamesArray})
{
    return (<div>
            <div className="flex gap-2 w-[97%] mx-auto relative top-2">
                {Array.isArray(gamesArray) && gamesArray.length > 0 ? gamesArray.map((game, index)=>{
                    return <EventCard key={index} gameName={game.name} maxTeams={game.maxTeams} maxTeamMembers={game.maxTeamMembers} cameraAngle={game.type} modeName={game.modeName} imageBanner={game.imageBanner}/>
                }) : gamesArray.map((game, index)=>{
                    return <EventCard key={index} gameName={game.name} maxTeams={game.maxTeams} maxTeamMembers={game.maxTeamMembers} cameraAngle={game.type} modeName={game.modeName} imageBanner={game.imageBanner}/>
                })} 
        </div>
    </div>)
}