/* eslint-disable react/prop-types */
import GameCard from "./GameCard"
import {Buffer} from 'buffer'

export default function GameList({gamesArray, setGameIdState})
{
    console.log(gamesArray)
    return (<div>
            <div className="flex gap-2 w-[97%] mx-auto relative top-2 overflow-auto">
                {Array.isArray(gamesArray) && gamesArray.length > 0 ? gamesArray.map((game, index)=>{
                    return <GameCard key={index} gameName={game.name} maxTeams={game.maxTeams} maxTeamMembers={game.maxTeamMembers} cameraAngle={game.type} modeName={game.modeName} gameId={game.gameId} setGameIdState={setGameIdState} imageBanner={game.imageBanner && game.imageBanner.data?`data:image/jpeg;base64,${Buffer.from(game.imageBanner.data).toString("base64")}`:game.imageBanner}/>
                }) : gamesArray.map((game, index)=>{
                    return <GameCard key={index} gameName={game.name} maxTeams={game.maxTeams} maxTeamMembers={game.maxTeamMembers} cameraAngle={game.type} modeName={game.modeName} gameId={game.gameId} setGameIdState={setGameIdState} imageBanner={game.imageBanner && game.imageBanner.data?`data:image/jpeg;base64,${Buffer.from(game.imageBanner.data).toString("base64")}`:game.imageBanner}/>
                })} 
        </div>
    </div>)
}