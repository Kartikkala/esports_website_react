import {useEffect, useState} from "react"
import GameList from "./GameList"
import NewGameForm from "./NewGameForm"
import axios from "axios"

export default function GameManager({getGamesUrl, gameSubmitUrl})
{
  const [gameList, setGameList] = useState([])
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
      <div>
        <GameList gamesArray={gameList}/>
      </div>
      <div className="mx-auto py-5 w-10/12 rounded-xl flex flex-col justify-around bg-gray-800/10 backdrop-blur-sm">
          <div className="flex flex-col justify-center space-y-8 max-w-xs self-center">
          <h2 className="self-center font-Protest text-4xl text-gray-300">Create Game</h2>
            <NewGameForm gameSubmitUrl={gameSubmitUrl}/>
          </div>
        </div>
      </div>
  )
}