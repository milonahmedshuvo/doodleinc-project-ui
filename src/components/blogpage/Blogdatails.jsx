import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const Blogdatails = () => {
    const ids = useParams()
    const blog = useLoaderData()
    const {id, title, body} = blog

    const handleCommentpost = (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const comment = event.target.comment.value;
        console.log(name, email, comment)
    }
  return (
    <div className='my-14'>
      <h1 className='lato my-3'> {title} </h1>
      <p className='work-sans'>{body}</p>



      <div className='mt-20'>
        <h1 className='lato mb-1'>Blog Comment</h1>

        <form onSubmit={handleCommentpost} >
        <input type="text" name="name" required placeholder='Name' id="" className='border border-gray-300 py-2 rounded  pl-2 w-full mx-auto outline-none' />
        <input type="text" name="email" required placeholder='Email' id="" className='border border-gray-300 py-2 rounded  pl-2 w-full mx-auto outline-none' />

        <input type="text" name="comment" required placeholder='Comment' id="" className='border border-gray-300 py-2 rounded  pl-2 w-full mx-auto outline-none' />
        <input type="submit" value="Comment" className='bg-black text-white font-semibold px-4 py-1 mt-2 ' />
        </form>
      </div>
    </div>
  )
}

export default Blogdatails;
