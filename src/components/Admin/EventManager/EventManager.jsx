import NewEventForm from "./NewEventForm"
import axios from "axios"
import { useEffect, useState } from "react"
import GameList from "../GameManager/GameList"

export default function EventManager({getGamesUrl, eventSubmitUrl})
{
  const [gameList, setGameList] = useState([])
  const [selectedGameId, setSelectedGameId] = useState("")
  useEffect(()=>{
    const fetcher = async ()=>{
      const games = (await axios.get(getGamesUrl)).data
      if(games)
      {
        setGameList(games)
      }
    }
  
    fetcher()
  }, [])
  return (
    <div className="flex flex-col gap-5 overflow-y-auto h-full">
      <GameList gamesArray={gameList} setGameIdState={setSelectedGameId}/>
      <div className="mx-auto py-5 w-10/12 rounded-xl flex flex-col justify-around bg-gray-800/10 backdrop-blur-sm">
          <div className="flex flex-col justify-center space-y-8 max-w-xs self-center">
          <h2 className="self-center font-Protest text-4xl text-gray-300">Create Event</h2>
            <NewEventForm selectedGameId={selectedGameId} eventSubmitUrl={eventSubmitUrl}/>
          </div>
        </div>
      </div>
  )
}