// eslint-disable-next-line no-unused-vars
import React from 'react';
import {router} from './components/AppRoutes';
import { RouterProvider } from 'react-router-dom';


function App() {
  return (
    <div className=" p-0 m-0">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
