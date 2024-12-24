/* eslint-disable react/prop-types */
import { FaBell, FaCoins, FaInfoCircle, FaSignOutAlt } from 'react-icons/fa';
import { IoClose } from "react-icons/io5";
import { RiAdminFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { RiBankFill } from 'react-icons/ri';


export default function MenuCard({isOpen, toggleMenu, user, toggleUpiMenu})
{
    return (
        <div className={`z-[99] md:p-0 md:w-fit md:h-fit md:right-4 md:top-16 md:bg-opacity-0 md:bg-none bg-opacity-60 absolute flex-col ${isOpen ? 'flex' : 'hidden'} bg-black shadow-lg text-white p-4 top-0 h-full w-full items-center`}>
            <div className={`flex-col ${isOpen ? 'flex' : 'hidden'} gap-5 border-2 border-gray-800 bg-gradient-to-bl from-gray-800/50 via-gray-900/50 to-black/50 backdrop-blur-xl shadow-lg text-white p-4 rounded-2xl h-1/2 w-full self-center my-auto`}>
              <div className='md:hidden flex justify-between'>
                <button onClick={toggleMenu} className='self-center p-[8px]'><IoClose size={25}/></button>
                <h2 className='self-center text-xl'>Menu</h2>
                <div className='size-10'></div>
              </div>
              <div className='bg-gray-950 rounded-2xl relative md:bg-gray-100/0'>
                <Link onClick={toggleMenu} to={"/notifications"} className="md:mr-4 p-2 flex items-center">
                  <FaBell className="mr-2" /> Notifications 
                </Link>
                <Link onClick={toggleMenu} to={"/admin"} className={`md:mr-4 p-2 flex items-center ${user && user.admin ? null : 'hidden'}`}>
                  <RiAdminFill className="mr-2"/>Games and Events Manager
                </Link>
                <Link onClick={()=>{toggleMenu();toggleUpiMenu((formState)=>formState=!formState)}} className={`md:mr-4 p-2 flex items-center`}>
                  <RiBankFill className="mr-2"/>UPI Details
                </Link>
                <Link onClick={toggleMenu} to={"/shop"} className="md:mr-4 p-2 flex items-center">
                  <FaCoins className="mr-2" /> Purchase Currency
                </Link>
                <Link to="#" className="md:mr-4 p-2 flex items-center">
                  <FaInfoCircle className="mr-2" /> About Us
                </Link>
                <Link to="/login" onClick={toggleMenu} className="md:mr-4 p-2 flex items-center">
                  <FaSignOutAlt className="mr-2" /> Logout
                </Link>
              </div>
            </div>
        </div>
    )
}