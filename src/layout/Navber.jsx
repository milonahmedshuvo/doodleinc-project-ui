import React from 'react'
import { Link } from 'react-router-dom'

const Navber = () => {
  return (
    <div className='flex justify-between items-center '>
      <div>
        <img src="https://www.elegantthemes.com/images/logotransparent-header-dark.svg" alt="" />
      </div>

      <div className='flex items-center'>
        <Link to="/newblogpost" className='text-lg text-indigo font-semibold mx-4'> Newblog </Link>
        <Link className='text-lg text-indigo font-semibold mx-4' >Fovorite </Link>
      </div>
    </div>

    
  )
}

export default Navber