import React, { useEffect, useState } from 'react'

const Allblogsmanage = () => {
      const [blogs, setBlogs] = useState([])

      useEffect(()=> {
        fetch("http://localhost:5000/blogs")
        .then((res) => res.json())
        .then((data) => setBlogs(data))
        .catch((err) => console.log(err))
      }, [])


  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-20'>
        {
            blogs?.map((blog, i) => <div key={i} className='border p-5 flex flex-col justify-between rounded'> 
              <p className='lato mb-2'>{blog.title}</p>
              <p className="work-sans"> {blog.body.substring(0, 300)}...</p>

              <div className='flex justify-between mt-2'>
              <input type="button" className='text-white font-bold bg-slate-600 px-4 py-1' value="Update" />
              <input type="button" className='text-white font-bold bg-black px-4 py-1' value="Delete" />
              </div>
             </div>)
        }
    </div>
  )
}

export default Allblogsmanage;
