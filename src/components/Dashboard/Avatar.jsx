import { FaUserCircle } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
export default function Avatar({image})
{
    return (
        <div className="border-2 border-gray-600 rounded-full p">
            {image ? <img src="" alt="" className="size-25"/>: <FaUserCircle size={25}/>}
        </div>
    )
}