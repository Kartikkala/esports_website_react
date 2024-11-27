/* eslint-disable react/prop-types */

import RegularInfoTyping from "./RegularInfoTyping";

export function PlayerStatusBar({totalPlayersRegistered, totalSlots}) 
{
    return <div className='gap-2 flex shadow-inner shadow-gray-900 bg-gray-600/30 rounded-md p-1 justify-around'>
            <RegularInfoTyping label={"REG:"} value={totalPlayersRegistered} valueClassName={'text-green-500'}/>
            <RegularInfoTyping label={"AVL:"} value={totalSlots - totalPlayersRegistered} valueClassName={'text-red-500'}/>
            <RegularInfoTyping label={"TOT:"} value={totalSlots} valueClassName={'text-blue-500'}/>
        </div>;
}
  