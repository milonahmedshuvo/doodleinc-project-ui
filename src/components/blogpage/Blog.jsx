import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';



const Blog = ({post}) => {
const { title,id, body} = post
const [isFavorite, setIsFavorite] = useState(
    localStorage.getItem(`favorite_${post.id}`) === 'true'
  );

  useEffect(() => {
    localStorage.setItem(`favorite_${post.id}`, isFavorite);
  }, [isFavorite, post.id]);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };










  return (
    <div>
       <div  className=" shadow-sm px-4 py-6 border rounded ">
            <div>
              <div className="flex justify-between items-center">
                <p className="lato my-2" l> {title} </p>


                <button onClick={toggleFavorite} className="mt-2">
           {isFavorite ? (
             <AiFillHeart className="text-red-500 text-2xl" />
            ) : (
             <AiOutlineHeart className='text-2xl' />
            )}
               </button>

            
              </div>

              <p className="work-sans text-justify"> {body.substring(0, 300)}<Link
                  to={`/blogdatails/${id}`}
                  className="text-black font-bold"
                >
                  ...reed more
                </Link>{" "}
              </p>
            </div>
          </div>
    </div>
  )
}

export default Blog
