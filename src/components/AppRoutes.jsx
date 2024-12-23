import { createBrowserRouter, Navigate } from 'react-router-dom';
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard'
import Pricing from './Shop/Shop'
import Notifications from './Notifications/Notifications';
import Layout from './Dashboard/Layout';
import EventsList from './Events/EventsList';
import Admin from './Admin/Admin';
import EventManager from './Admin/EventManager/EventManager';
import GameManager from './Admin/GameManager/GameManager'

const API_BASE_URL = "http://localhost/api"


export const router = createBrowserRouter([
  {
      path : "/dashboard",
      element : <Dashboard/>,
      errorElement : <div>Error 404</div>
  },
  {
    path : "/login",
    element : <Login loginUrl={`${API_BASE_URL}/login`} registerUrl={`${API_BASE_URL}/register`} getOtpUrl={`${API_BASE_URL}/otp`}/>,
    errorElement : <div>Error 404</div>
  },
  {
    path : "/",
    element : <Layout userCurrencyUrl={`${API_BASE_URL}/shop/getCurrency`} userInfoUrl={`${API_BASE_URL}/user`}/>,
    children : [
      {
        index : true,
        element : <Dashboard />
      },
      {
        path : "/shop",
        element : <Pricing getPacksUrl={`${API_BASE_URL}/shop/getPacks`} verifyOrderUrl={`${API_BASE_URL}/shop/buyPack`} makeOrderUrl={`${API_BASE_URL}/shop/createMoneyOrder`}/>
      },
      {
        path : "/registeredEvents",
        element : <EventsList category={"registered"} getUserUrl={`${API_BASE_URL}/user`} getEventsUrl={`${API_BASE_URL}/events/events`}/>
      },
      {
        path : "/notifications",
        element : <Notifications/>
      },
      {
        path : "/ongoingEvents",
        element : <EventsList category={"ongoing"} winnerDeclareUrl={`${API_BASE_URL}/admin/declareWinner`} getEventsUrl={`${API_BASE_URL}/events/events`} getUserUrl={`${API_BASE_URL}/user`} eventDeletetionUrl={`${API_BASE_URL}/admin/deleteEvent`}/>,
      },
      {
        path : "/upcomingEvents",
        element : <EventsList  category={"upcoming"} submitJoinIdUrl={`${API_BASE_URL}/admin/publishRoomId`} getEventsUrl={`${API_BASE_URL}/events/events`} getUserUrl={`${API_BASE_URL}/user`} eventRegistrationUrl={`${API_BASE_URL}/events/registerForEvent`} eventDeletetionUrl={`${API_BASE_URL}/admin/deleteEvent`}/>,
      },
      {
        path : "/admin",
        element : <Admin/>,
        children : [
          {
            index : true,
            element : <Navigate to="gameManager"/>
          },
          {
            path : "eventManager",
            element : <EventManager getGamesUrl={`${API_BASE_URL}/admin/getGames`} eventSubmitUrl={`${API_BASE_URL}/admin/createEvent`}/>,
          },
          {
            path : "gameManager",
            element : <GameManager getGamesUrl={`${API_BASE_URL}/admin/getGames`} gameSubmitUrl={`${API_BASE_URL}/admin/createGame`}/>
          }
        ]
      }
    ]
  }
])

