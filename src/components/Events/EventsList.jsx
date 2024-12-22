/* eslint-disable react/prop-types */
import {useContext, useEffect, useState} from "react"
import EventCard from "./EventCard"
import axios from "axios"
import {WalletContext} from "../../contexts/CurrencyContext"
import { UserContext } from '../../contexts/UserContext';
import { Buffer } from "buffer";

export default function EventsList({category, getEventsUrl, getUserUrl ,eventRegistrationUrl, eventDeletetionUrl,submitJoinIdUrl})
{
    const {setTotalMoney} = useContext(WalletContext)
    const [deleteStage, setDeleteStage] = useState(1)
    const {user, setUser} = useContext(UserContext)
    const [change, setChange] = useState(0)
    const [eventsArray, setEventsArray] = useState([])
    useEffect(()=>{
        const fetchData = async ()=>{
            
            const events =  (await axios.get(getEventsUrl))
            setEventsArray(events.data[category])
            setUser((await axios.get(getUserUrl)).data)
        }

        fetchData()
    }, [change])
    return (<div>
            <div className="flex gap-2 overflow-x-auto h-fit w-[97%] mx-auto relative top-2">
                {Array.isArray(eventsArray) && eventsArray.length > 0 ? eventsArray.map((event, index)=>{
                    if(eventRegistrationUrl || eventDeletetionUrl)
                    {
                        const onRegister = async (playerInGameId) => {
                            try {
                                const response = await axios.post(eventRegistrationUrl, {
                                  eventId : event.eventId,
                                  inGameId : playerInGameId
                                }, {withCredentials : true});

                                console.log(response.data)
  
                                if(!response.data.success)
                                {
                                  alert("Already registered or insufficient balance!")
                                }
                                else
                                {
                                  alert("Registration successful!")
                                  setChange((change)=>change+1)
                                  setTotalMoney(response.data.newMoney)
                                }
                            
                            } catch (error) {
                              console.error("Event registration failed", error.response?.data || error.message);
                              alert("Cannot register!");
                            } 
                        };
                        const onDelete = async (e)=>{
                            try {
                              if(deleteStage>=2)
                              {
                                setDeleteStage(1)
                                  const response = await axios.post(eventDeletetionUrl, {
                                    eventId : event.eventId
                                  }, {withCredentials : true});
                                  if(!response.data.success)
                                  {
                                    alert("Event does not exist!")
                                  }
                                  else
                                  {
                                      alert("Deletetion successful!")
                                      setChange((change)=>change+1)
                                  }
                              }
                              else
                              {
                                setDeleteStage(deleteStage + 1)
                              }
                              
                              } catch (error) {
                                console.error("Event deletetion failed", error.response?.data || error.message);
                                alert("Cannot register!");
                              } 
                        }
                        return <EventCard mode={event.game.modeName}
                        category={category}
                        setChange={setChange}
                        eventId={event.eventId} submitJoinIdUrl={submitJoinIdUrl} joinId={event.joinId} key={index} game={event.game.name}
                        imageBanner={event.game.imageBanner && event.game.imageBanner.data?`data:image/jpeg;base64,${Buffer.from(event.game.imageBanner.data).toString("base64")}`:
                        event.game.imageBanner} prizepool={event.prizepool} 
                        fee={event.fee} totalPlayersRegistered={event.totalPlayersRegistered} 
                        totalSlots={event.game.maxTeams * event.game.maxTeamMembers} 
                        date={event.eventDateTime} registerButtonTxt={"Reg"} 
                        registerButtonFn={eventRegistrationUrl?onRegister:null} deleteEventButtonFn={eventDeletetionUrl?onDelete:null} 
                        admin={user.admin}/>
                    }
                    else{
                      return <EventCard mode={event.game.modeName}
                      category={category}
                        deleteStage={deleteStage}
                        setChange={setChange}
                        eventId={event.eventId} submitJoinIdUrl={submitJoinIdUrl} joinId={event.joinId} key={index} game={event.game.name}
                        imageBanner={event.game.imageBanner && event.game.imageBanner.data?`data:image/jpeg;base64,${Buffer.from(event.game.imageBanner.data).toString("base64")}`:
                        event.game.imageBanner} prizepool={event.prizepool} 
                        fee={event.fee} totalPlayersRegistered={event.totalPlayersRegistered} 
                        totalSlots={event.game.maxTeams * event.game.maxTeamMembers} 
                        date={event.eventDateTime} registerButtonTxt={"Reg"} 
                        admin={user.admin}/>
                    }
                }) : <div>

                  </div>} 
        </div>
    </div>)
}