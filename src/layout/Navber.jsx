import React from 'react'
import { Link } from 'react-router-dom'

const Navber = () => {
  return (
    <div className='flex justify-between items-center '>
      <Link to="/">
      <div>
        <img src="https://www.elegantthemes.com/images/logotransparent-header-dark.svg" alt="" />
      </div>
      </Link>

      <div className='flex items-center'>
        <Link to="/allblogs" className='text-lg text-indigo font-semibold mx-4'>Blogs</Link>
        <Link to="/newblogpost" className='text-lg text-indigo font-semibold mx-4'> Newblog </Link>
        <Link to="/favorite" className='text-lg text-indigo font-semibold mx-4' >Fovorite </Link>
      </div>
    </div>

    
  )
}

export default Navber
