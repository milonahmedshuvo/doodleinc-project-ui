import { Input } from '@nextui-org/react'
import React from 'react'

const Newblog = () => {

  const handleBlogPost = (event) => {
    event.preventDefault()
    console.log(event)
    const userId= event.target.UserId.value;
    const title= event.target.title.value;
    const description= event.target.description.value;

    console.log(userId, title, description)

  }

  return (
    <div>
        <h1 className='text-center text-indigo text-xl lato my-10'>New Blog Post</h1>

        <div className=''>
        <form onSubmit={handleBlogPost} className='flex flex-col gap-3'>
        
        
        <input type="number" name="UserId" required placeholder='userId' id="" className='border border-gray-400 py-1 rounded  pl-2 w-2/4 mx-auto outline-none' />
        <input type="text" name="title" required placeholder='Title' id="" className='border border-gray-400 py-2 rounded  pl-2 w-2/4 mx-auto outline-none' />
         <textarea name="description" readOnly placeholder='Description' id="" cols="30" rows="5" className='border border-gray-400 py-2 rounded  pl-2 w-2/4 mx-auto outline-none' ></textarea>

        <input type="submit" className='bg-indigo text-white py-1 text-lg font-semibold w-2/4 mx-auto uppercase' value="Submit" />
       </form>
        </div>
    </div>
  )
}

export default Newblog
