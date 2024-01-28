import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useLoaderData, useParams } from 'react-router-dom'

const Blogdatails = () => {
    
    let {id:blogId} = useParams()
    const blog = useLoaderData()
    const {id, title, body} = blog

    console.log("datails blog id", typeof blogId)

    const {data, refetch, isLoading } = useQuery({
        queryKey: [],
        queryFn: async () => {
           const res =await fetch(`http://localhost:5000/comment/${blogId}`)
           const result = await res.json()
           return result
        }
    })
          if(isLoading){
            return <p>Loading...........</p>
          }

          
    
    console.log("committttttttttt", data)


    const handleCommentpost = (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const comment = event.target.comment.value;
        console.log(name, email, comment)
        const commentData = {
            blogId: id,
            name, 
            email, 
            body: comment
        }
      
        fetch("http://localhost:5000/commentpost", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(commentData)
        })
        .then((res) => res.json())
        .then((data) => {
            toast.success("Succesfully comment!")
            console.log(data)
            refetch()
        })
        .catch((err)=> {
            console.log(err)
            toast.error('fail comment!')
        })
    }




     const handleCommentDelete = (id) =>{
        console.log(id)
        fetch(`http://localhost:5000/commentDelete/${id}`, {
            method: "DELETE",
        })
        .then((res) => res.json())
        .then((data) => {
            toast.success("Succesfully comment delete!")
            refetch()
        })
        .catch((err) => console.log(err))
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



      {/* all comment show in the page  */}
      <div className='mt-5'>
        {
            data?.map((comment, i) => <div key={i} className='border border-gray-300 px-2 py-4 my-5 w-full md:w-3/6 lg:w-2/6 rounded'>

                 
                 <p>{comment.name}</p>
                 <p>{comment.email}</p>
                 <p>{comment.body}</p>


                 <div className='flex justify-between items-center mt-5'>
                 
                 <input type="button" value="Update" className='bg-green-600 text-white font-normal py-1 px-4 rounded' />

                 <input type="button" onClick={()=> handleCommentDelete(comment._id)}  value="Delate" className='bg-red-400 text-white font-normal py-1 px-4 rounded' />
                 </div>
            </div>)
        }
      </div>
    </div>
  )
}

export default Blogdatails;
