import RegularInfoTyping from "../../Events/RegularInfoTyping";

/* eslint-disable react/prop-types */
  

export function GameStatusBar({cameraAngle}) 
{
    return <div className='gap-2 flex shadow-inner shadow-gray-900 bg-gray-600/30 rounded-md p-1 justify-around'>
            {<RegularInfoTyping label={"CAM:"} value={cameraAngle ? "TPP" : "FPP"} valueClassName={'text-green-500'}/>}
        </div>;
}
  