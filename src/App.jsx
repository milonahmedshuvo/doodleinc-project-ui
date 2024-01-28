import { useState } from 'react'
import Navber from './layout/Navber';
import { RouterProvider } from 'react-router-dom';
import { router } from './layout/routes';
import toast, { Toaster } from 'react-hot-toast';


function App() {
  

  return (
    <div className='mx-10'>
      
      <RouterProvider router={router} ></RouterProvider>
       <Toaster/>
    </div>
  )
}

export default App;
