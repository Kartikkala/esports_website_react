import ModeSelection from "./ModeSelection";
import { Outlet } from "react-router-dom";

export default function Admin()
{
    const renderModeSelection = () => (
        <div className="flex justify-center w-full">
          <ModeSelection optionsArray={[
            {
                name : "Game Manager",
                url : "/admin/gameManager"
            }, 
            {
                name : "Event Manager",
                url : "/admin/eventManager"
            }]}/>
        </div>
    );
    return (
        <div className="h-full">
            <div className='flex flex-col gap-4 h-full'>
                {renderModeSelection()}
                <Outlet/>
            </div>
        </div>
    )
}