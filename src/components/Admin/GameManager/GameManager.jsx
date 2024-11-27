import GameList from "./GameList"
import NewGameForm from "./NewGameForm"

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

export default function GameManager()
{
  return (
    <div className="flex flex-col gap-5 overflow-y-auto h-full">
      <div>
        <GameList gamesArray={games}/>
      </div>
      <div className="mx-auto py-5 w-10/12 rounded-xl flex flex-col justify-around bg-gray-800/10 backdrop-blur-sm">
          <div className="flex flex-col justify-center space-y-8 max-w-xs self-center">
          <h2 className="self-center font-Protest text-4xl text-gray-300">Create Game</h2>
            <NewGameForm/>
          </div>
        </div>
      </div>
  )
}