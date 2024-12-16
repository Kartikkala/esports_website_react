// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import {router} from './components/AppRoutes';
import { RouterProvider } from 'react-router-dom';
import { WalletContext } from './contexts/CurrencyContext';
import { UserContext } from './contexts/UserContext';


function App() {
  const [totalMoney, setTotalMoney] = useState(0)
  const [user, setUser] = useState({})
  return (
    <div className=" p-0 m-0">
      <UserContext.Provider value={{user, setUser}}>
      <WalletContext.Provider value={{totalMoney, setTotalMoney}}>
        <RouterProvider router={router}/>
      </WalletContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
