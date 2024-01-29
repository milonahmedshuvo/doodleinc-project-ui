import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";

const Blogpage = () => {
  const [blogs, setblogs] = useState([]);
  const [isopen , setIsopen] = useState(false)
  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => setblogs(data))
      .catch((err) => console.log(err));
  }, []);

  const handletoggle = (i) => {
      setIsopen(!isopen)
      console.log(i)
  }

  return (
    <div className="my-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs?.map((blog, i) => (
          <div key={i} className=" shadow-sm px-4 py-6 border rounded ">
            <div>
              <div className="flex justify-between items-center">
                <p className="lato my-2" l>
                  {" "}
                  {blog?.title}{" "}
                </p>


                {/* <FaRegHeart onClick={()=>handletoggle(i)} className={`${isopen? "text-2xl text-red-500": "text-2xl"}`}  /> */}

                <FaRegHeart className="text-2xl active:text-red-500" ></FaRegHeart>

            
              </div>

              <p className="work-sans">
                {" "}
                {blog.body.substring(0, 300)}{" "}
                <Link
                  to={`/blogdatails/${blog.id}`}
                  className="text-black font-bold"
                >
                  ...reed more
                </Link>{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogpage;
