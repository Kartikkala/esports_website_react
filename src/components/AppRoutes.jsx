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

export const router = createBrowserRouter([
  {
      path : "/dashboard",
      element : <Dashboard/>,
      errorElement : <div>Error 404</div>
  },
  {
    path : "/login",
    element : <Login/>,
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
        element : <Pricing/>
      },
      {
        path : "/registeredEvents",
        element : <EventsList category={"Registered Events"}/>
      },
      {
        path : "/notifications",
        element : <Notifications/>
      },
      {
        path : "/ongoingEvents",
        element : <EventsList category={""}/>,
      },
      {
        path : "/upcomingEvents",
        element : <EventsList category={""}/>,
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

