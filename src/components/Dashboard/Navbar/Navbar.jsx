import { useEffect, useState, useContext } from 'react';
import { FaBell, FaCoins } from 'react-icons/fa';
import { IoIosArrowBack } from "react-icons/io";
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import MenuCard from './MenuCard';
import Avatar from '../Avatar';
import axios from 'axios';
import { UserContext } from '../../../contexts/UserContext';
import { WalletContext } from '../../../contexts/CurrencyContext';

const Navbar = ({userCurrencyUrl, userInfoUrl, toggleUpiForm}) => {
  const [isOpen, setIsOpen] = useState(false);
  const {totalMoney, setTotalMoney} = useContext(WalletContext)
  const {user, setUser} = useContext(UserContext)
  const location = useLocation();
  const navigate = useNavigate()

  // Define route-specific settings
  const routeConfig = {
    '/': { heading: 'Dashboard', backButton: false },
    '/shop': { heading: 'Shop', backButton: true },
    '/registeredEvents': { heading: 'Registered Events', backButton: true },
    '/notifications': { heading: 'Notifications', backButton: true },
    '/login': { heading: 'Login', backButton: true },
    '/ongoingEvents' : {heading : 'Ongoing Events', backButton : true},
    '/upcomingEvents' : {heading : 'Upcoming Events', backButton : true},
    '/admin' : {heading : 'Admin Panel', backButton : true},
    '/admin/gameManager' : {heading : 'Game Manager', backButton : true},
    '/admin/eventManager' : {heading : 'Event Manager', backButton : true}
  };

  // Get current route configuration or default
  const currentRoute = routeConfig[location.pathname] || { heading: '', backButton: false };
  const { heading, backButton } = currentRoute;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(()=>{
    const getCurrencyAndUserInfo = async ()=>{
      let response = undefined
      try{
        response = await axios.get(userCurrencyUrl)
        setUser((await axios.get(userInfoUrl)).data)
      }
      catch{
        if(!response || response.status !== 200)
        {
          navigate('/login')
          alert('Please login again')
        }
      }
      
      setTotalMoney(response.data.totalMoney)
    }
    getCurrencyAndUserInfo()
  }, [])

  return (
    <>
      <nav className="sticky z-50 flex justify-between border-2 border-gray-800 bg-gradient-to-r from-gray-800/50 via-gray-900/50 to-black/50 backdrop-blur-sm shadow-lg text-white p-4 rounded-2xl max-w-[calc(100%-2px)] top-0.5 mx-auto md:sm:rounded-none md:sm:max-w-full w-full md:sm:top-0">
        <div className="flex items-center justify-between w-full">
          {/* Back Button and heading div*/}
          <div className='flex'>
            {backButton && (
              <NavLink className="mr-3 self-center" to="/">
                <IoIosArrowBack size={25} />
              </NavLink>
            )}
            
            <h1 className="text-xl font-bold">{heading}</h1>
          </div>

          {/* Mobile Navbar links */}
          <div className='items-center flex'>
            <NavLink className='mr-3 self-center md:hidden' to="/notifications">
              <FaBell size={25} />
            </NavLink>
            <NavLink className='mr-3 self-center md:hidden flex gap-2 items-end' to="/shop">
              <FaCoins size={25} />
              <div className='text-[14px]'>
              {totalMoney}
              </div>
            </NavLink>
            <button onClick={toggleMenu} className="md:hidden">
              <Avatar />
            </button>
          </div>
        </div>

        {/* Desktop and Tablet Navlinks */}
        <div className={`md:flex md:flex-row hidden mt-4 md:mt-0 md:items-center md:gap-4`}>
          <button className='mr-3 self-center'>
          <NavLink className='mr-3 self-center flex gap-2 items-end' to="/notifications">
            <FaBell size={25} />
            </NavLink>
          </button>
          <NavLink className='mr-3 self-center flex gap-2 items-end' to="/shop">
            <FaCoins size={25} />
            <div className='text-[14px]'>
              {totalMoney}
              </div>
          </NavLink>
          <button className="flex items-center md:mr-4 p-2" onClick={toggleMenu}>
            <Avatar />
          </button>
        </div>
      </nav>

      {/* Overlay of Menu Card */}
      <MenuCard isOpen={isOpen} toggleMenu={toggleMenu} user={user} toggleUpiMenu={toggleUpiForm}/>
    </>
  );
};

export default Navbar;
