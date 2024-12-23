import RegularInfoTyping from './RegularInfoTyping';
import { PlayerStatusBar } from './PlayerStatusBar';
import { MdDeleteOutline } from "react-icons/md";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { IoIosCheckmarkCircle } from "react-icons/io";
import JoinIdDialog from './JoinIdDialog';
import { useState } from 'react';
import EventRegistrationDialog from './EventRegistraton';
import WinnerDeclareDialog from './WinnerDeclareDialog';

// eslint-disable-next-line react/prop-types
const EventCard = ({game, imageBanner, prizepool, mode, fee, date, totalPlayersRegistered, totalSlots, joinId, registerButtonTxt, registerButtonFn, deleteEventButtonFn, submitJoinIdUrl, eventId, admin, setChange, category, winnerDeclareUrl}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [registrationDialogOpen, setRegistrationDialogOpen] = useState(false)
  const [winnerDialogOpen, setWinnerDialogOpen] = useState(false)
  const [deleteStage, setDeleteStage] = useState(1)
  return (
      <div className="h-[20em] w-[14em] min-w-[14em] max-w-[15em] border-2 border-gray-800 rounded-[1.5em] bg-gradient-to-r from-gray-800/50 via-gray-900/50 to-black/50 backdrop-blur-lg shadow-lg text-white font-nunito p-[4px] flex flex-col justify-around items-left gap-[0.75em] grow">
        <div className='flex flex-col min-h-[99%] rounded-[1.5em]'>

            {imageBanner ? <img src={imageBanner} className='object-cover overflow-hidden max-w-[16rem] max-h-[9rem] h-3/6 rounded-t-[1.5em] shadow-inner shadow-black'/>:<div className='h-3/6 bg-gray-800 rounded-t-[1.5em] shadow-inner shadow-black'/>}
                
                <div className='flex flex-col p-3 gap-2'>
                    <PlayerStatusBar totalPlayersRegistered={totalPlayersRegistered} totalSlots={totalSlots} />
                    <div className='flex flex-col'>
                        <h1 className="text-xl font-medium">{game}</h1>
                        <h1 className="text-base font-medium text-green-400">{`Fee: ₹${fee}`}</h1>
                    </div>

                    <div>
                        <RegularInfoTyping label={"Prizepool:"} value={`₹${prizepool}`}  />
                        <RegularInfoTyping label={"Mode:"} value={`${mode}`}  />
                        <RegularInfoTyping label={"Date:"} value={date}/>
                        <RegularInfoTyping label={"Join ID:"} value={joinId}/>
                    </div>
              </div>

              {/* Make a seperate component for all of these buttons */}
              <div className='flex justify-between gap-2'>
                  {registerButtonTxt && registerButtonFn? 
                  <button onClick={()=>{setRegistrationDialogOpen((state)=>state = !state)}} className=" px-[1em] py-[0.25em] border-[1px] rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]">
                    <p>{registerButtonTxt}</p>
                    <svg className="w-6 h-6 group-hover:translate-x-[10%] duration-300" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" strokeLinejoin="round" strokeLinecap="round" />
                  </svg>
                </button>
                : null }
                  {category === 'ongoing' ? 
                  <button onClick={()=>{setWinnerDialogOpen((state)=>state = !state)}} className=" px-[1em] py-[0.25em] border-[1px] rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]">
                    <p>{"Declare Winner"}</p>
                    <svg className="w-6 h-6 group-hover:translate-x-[10%] duration-300" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" strokeLinejoin="round" strokeLinecap="round" />
                  </svg>
                </button>
                : null }
                  {admin && submitJoinIdUrl? 
                  <button onClick={()=>{setIsOpen(!isOpen)}} className=" px-[1em] py-[0.25em] border-[1px] rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]">
                  <MdDriveFileRenameOutline />
                </button>
                : null }
                  {deleteEventButtonFn && admin? 
                  <button onClick={()=>{deleteEventButtonFn();setDeleteStage((stage)=>stage = stage+1)}} className="px-[0.8em] py-[0.25em] border-[1px] rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]">
                  {deleteStage===1 ? 
                    category === 'ongoing' ? <IoIosCheckmarkCircle color='white'/> :
                  <MdDeleteOutline color='red'/>
                  :category === 'ongoing' ? 
                  <IoIosCheckmarkCircle color='green'/> :
                  <IoIosCheckmarkCircle color='red'/>
                }
                </button>
                : null }
              </div>
        </div>
        <JoinIdDialog isOpen={isOpen} toggleMenu={setIsOpen} submitJoinIdUrl={submitJoinIdUrl} eventId={eventId} setChange={setChange}/>
        <EventRegistrationDialog isOpen={registrationDialogOpen} toggleMenu={setRegistrationDialogOpen} eventRegistrationFunction={registerButtonFn}/>
        <WinnerDeclareDialog isOpen={winnerDialogOpen} toggleMenu={setWinnerDialogOpen} getWinnerUrl={winnerDeclareUrl} eventId={eventId}/>
      </div>
    );
  }
  
 
  export default EventCard;
  