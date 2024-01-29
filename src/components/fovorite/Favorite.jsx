import React from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';


const Favorite = () => {

    const favorite = JSON.parse( localStorage.getItem("items"))
   
    
  return (
    <div className='my-20'>
        {
            favorite ? <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  '>
            {
             favorite?.map((post, i) => <div key={i} className=' border rounded p-4'>
                  <div className='flex justify-between items-center'>
                  <p className='lato mb-2'>{post.title}</p>
                  <AiFillHeart className='text-red-600 text-2xl' />
                  </div>
                  <p className='text-justify'>{post.body}</p>
             </div>)
            }
         </div> : <p className='text-center my-14 text-3xl font-semibold'>  your favorite item emtry </p>
        }
    </div>
    
  )
}

export default Favorite
