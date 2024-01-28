import React from 'react'
import Navber from './Navber'
import { Outlet } from 'react-router-dom'

const Rootlayout = () => {

  return (
    <div>
         <Navber/>
         <Outlet></Outlet>
    </div>
  )
}

export default Rootlayout;
