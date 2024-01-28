import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const Blogdatails = () => {
    const ids = useParams()
    const blog = useLoaderData()
    console.log(blog)
    const {id, title, body} = blog
  return (
    <div className='my-14'>
      <h1 className='lato my-3'> {title} </h1>
      <p className='work-sans'>{body}</p>
    </div>
  )
}

export default Blogdatails;
