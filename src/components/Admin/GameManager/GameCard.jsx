import {GameStatusBar} from './GameStatusBar';
import RegularInfoTyping from '../../Events/RegularInfoTyping';

// eslint-disable-next-line react/prop-types
const GameCard = ({gameName, cameraAngle , maxTeams, maxTeamMembers, modeName, imageBanner, gameId, setGameIdState, selectedGameId}) => {
  const buttonFunction = ()=>{
    if(selectedGameId === gameId)
    {
      return setGameIdState(null)
    }
    setGameIdState(gameId)
  }
  const isSelected = selectedGameId == gameId 
    return (
      <div className="h-[20em] w-[14em] min-w-[14em] border-2 border-gray-800 rounded-[1.5em] bg-gradient-to-r from-gray-800/50 via-gray-900/50 to-black/50 backdrop-blur-lg shadow-lg text-white font-nunito p-[4px] flex flex-col justify-around items-left gap-[0.75em]">
        <div className='flex flex-col min-h-[99%] rounded-[1.5em]'>
            {imageBanner ? <img src={imageBanner} className='object-cover overflow-hidden max-w-[16rem] max-h-[9rem] h-3/6 rounded-t-[1.5em] shadow-inner shadow-black'/>:<div className='h-3/6 bg-gray-800 rounded-t-[1.5em] shadow-inner shadow-black'/>}

                
                <div className='flex flex-col p-3 gap-2'>
                    <GameStatusBar cameraAngle={cameraAngle} />
                    <div className='flex flex-col'>
                        <h1 className="text-xl font-medium">{gameName}</h1>
                    </div>

                    <div>
                        <RegularInfoTyping label={"Mode:"} value={modeName}  />
                        <RegularInfoTyping label={"Max Teams:"} value={maxTeams}  />
                        <RegularInfoTyping label={"Max Team Members:"} value={maxTeamMembers}  />
                    </div>
              </div>
              {setGameIdState? 
              <button onClick={buttonFunction} className={`${isSelected ?'bg-gray-300 text-black': null} h-fit w-fit px-[1em] py-[0.25em] border-[1px] rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]`}>
              <p>{!isSelected? 'Select' : 'Deselect'}</p>
              <svg className="w-6 h-6 group-hover:translate-x-[10%] duration-300" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" strokeLinejoin="round" strokeLinecap="round" />
              </svg>
            </button>
            : null }
        </div>
      </div>
    );
  }
  
 
  export default GameCard;
  