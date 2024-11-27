import EventList from "./EventList"
import NewEventForm from "./NewEventForm"

const games=[
  {
    name : "Valorant",
    players : 10,
    type : false,
    modeName : "Competetive",
    maxTeamMembers : 5,
    maxTeams : 2,
    imageBanner : "Some Image"
  }
]

export default function EventManager()
{
  return (
    <div className="flex flex-col gap-5 overflow-y-auto h-full">
      <div>
        <EventList gamesArray={games}/>
      </div>
      <div className="mx-auto py-5 w-10/12 rounded-xl flex flex-col justify-around bg-gray-800/10 backdrop-blur-sm">
          <div className="flex flex-col justify-center space-y-8 max-w-xs self-center">
          <h2 className="self-center font-Protest text-4xl text-gray-300">Create Event</h2>
            <NewEventForm/>
          </div>
        </div>
      </div>
  )
}