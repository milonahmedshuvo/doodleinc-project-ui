import { useState } from 'react'
import Navber from './layout/Navber';
import { RouterProvider } from 'react-router-dom';
import { router } from './layout/routes';



function App() {
  

  return (
    <div className='mx-10'>
      
      <RouterProvider router={router} ></RouterProvider>
      
    </div>
  )
}

export default App;
