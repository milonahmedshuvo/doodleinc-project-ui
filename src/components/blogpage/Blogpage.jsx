import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Blogpage = () => {
    const [blogs, setblogs] = useState([])

    useEffect(()=>{
        fetch("http://localhost:5000/blogs")
        .then((res) => res.json())
        .then((data)=> setblogs(data))
        .catch((err) => console.log(err))
    }, [])


  return (
    <div className='my-20'>
      

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

       {
         blogs?.map((blog, i)=> <div key={i} className=' shadow-sm px-4 py-6 '>  
            
            <div>
            <p  className='lato my-2'l> {blog?.title} </p>
             <p> {blog.body.substring(0, 300 )} <Link className='text-black font-bold'>...reed more</Link> </p>
            </div>


           
         </div>)
       }



          

      </div>
    </div>
  )
}

export default Blogpage
