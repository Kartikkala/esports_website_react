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
    element : <Login loginUrl={`${API_BASE_URL}/login`}/>,
    errorElement : <div>Error 404</div>
  },
  {
    path : "/",
    element : <Layout/>,
    children : [
      {
        index : true,
        element : <Dashboard />
      },
      {
        path : "/shop",
        element : <Pricing getPacksUrl={`${API_BASE_URL}/shop/getPacks`} buyPackUrl={`${API_BASE_URL}/shop/buyPack`}/>
      },
      {
        path : "/registeredEvents",
        element : <EventsList category={"registered"} getEventsUrl={`${API_BASE_URL}/events/events`}/>
      },
      {
        path : "/notifications",
        element : <Notifications/>
      },
      {
        path : "/ongoingEvents",
        element : <EventsList category={"ongoing"} getEventsUrl={`${API_BASE_URL}/events/events`}/>,
      },
      {
        path : "/upcomingEvents",
        element : <EventsList category={"upcoming"} getEventsUrl={`${API_BASE_URL}/events/events`} eventRegistrationUrl={`${API_BASE_URL}/events/registerForEvent`}/>,
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
            element : <EventManager/>,
          },
          {
            path : "gameManager",
            element : <GameManager/>
          }
        ]
      }
    ]
  }
])

