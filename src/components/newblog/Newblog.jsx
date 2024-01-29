import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'


const Newblog = () => {
const [blogs, setBlogs] = useState([])

//    data fetch 
      useEffect(() => {
        fetch("http://localhost:5000/blogs")
        .then((res) => res.json())
        .then((data) =>setBlogs(data))
        .catch((err) => console.log(err))
      },[])


      console.log("blogs:", blogs.length)


  const handleBlogPost = (event) => {
    event.preventDefault()
    console.log(event)
    const userId= event.target.UserId.value;
    const title= event.target.title.value;
    const description= event.target.description.value;
    console.log(userId, title, description)
    const blog = {
        userId: parseInt(userId),
        id: blogs.length + 1,
        title,
        body: description
    }

    fetch("http://localhost:5000/blogpost", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(blog)
    })
    .then((res) =>res.json())
    .then((data) => {
      console.log(data)
      toast.success("Succesfully blog post!")
      setTimeout(() => {
        document.location.reload();
      }, 1000);
    })
    .catch((err) => {
        console.log(err)
        toast.error("Soryy")
    })

  }

  return (
    <div>
        <h1 className='text-center text-indigo text-xl lato my-10'>New Blog Post</h1>

        <div className=''>
        <form onSubmit={handleBlogPost} className='flex flex-col gap-3'>
        
        
        <input type="number" name="UserId" required placeholder='userId' id="" className='border border-gray-400 py-1 rounded  pl-2 w-2/4 mx-auto outline-none' />
        <input type="text" name="title" required placeholder='Title' id="" className='border border-gray-400 py-2 rounded  pl-2 w-2/4 mx-auto outline-none' />
         <textarea name="description" required placeholder='Description' id="" cols="30" rows="5" className='border border-gray-400 py-2 rounded  pl-2 w-2/4 mx-auto outline-none' ></textarea>

        <input type="submit" className='bg-slate-500 text-white py-1 text-lg font-semibold w-2/4 mx-auto uppercase' value="Submit" />
       </form>
        </div>
    </div>
  )
}

export default Newblog
