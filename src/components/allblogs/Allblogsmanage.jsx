import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import Blogmodal from '../blogpage/Blogmodal'

const Allblogsmanage = () => {
      const [blogs, setBlogs] = useState([])
      const [updateData, setUpdateData] = useState({})
      useEffect(()=> {
        fetch("http://localhost:5000/blogs")
        .then((res) => res.json())
        .then((data) => setBlogs(data))
        .catch((err) => console.log(err))
      }, [])



      const handleblogUpdate = (blog) => {
        setUpdateData(blog)
        document.getElementById("my_modal_1").showModal()
      }

      const handleblogDelete = (id) => {
        console.log(id)
        fetch(`http://localhost:5000/blogDelete/${id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            }
        })
        .then((res) => res.json())
        .then((data)=> {
            toast.success("succesfully delete!")
            console.log(data)
            setTimeout(() => {
                document.location.reload();
              }, 1000);
        })
        .catch((err)=> {
            toast.error("Delete faild")
            console.log(err)
        })
      }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-20'>
        {
            blogs?.map((blog, i) => <div key={i} className='border p-5 flex flex-col justify-between rounded'> 
              <p className='lato mb-2'>{blog.title}</p>
              <p className="work-sans"> {blog.body.substring(0, 300)}...</p>
              <div className='flex justify-between mt-2'>
              <input onClick={() => handleblogUpdate(blog)} type="button" className='text-white font-bold bg-slate-500 px-4 py-1' value="Update" />
              <input onClick={()=> handleblogDelete(blog._id)} type="button" className='text-white font-bold bg-gray-400 px-4 py-1' value="Delete" />
              </div>
             </div>)
        }

       <Blogmodal updateData={updateData} ></Blogmodal>
    </div>
  )
}

export default Allblogsmanage;
