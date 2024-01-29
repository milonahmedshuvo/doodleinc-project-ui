import { createBrowserRouter } from "react-router-dom";
import Rootlayout from "./Rootlayout";
import Blogpage from "../components/blogpage/Blogpage";
import Newblog from "../components/newblog/Newblog";
import Blogdatails from "../components/blogpage/Blogdatails";
import Allblogsmanage from "../components/allblogs/Allblogsmanage";
import Favorite from "../components/fovorite/Favorite";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Rootlayout></Rootlayout>,
        children: [
            {
            path: "/",
            element: <Blogpage/> 
           },
           {
            path: "/newblogpost",
            element: <Newblog/>
           },
           {
            path: "/blogdatails/:id",
            element: <Blogdatails/>,
            loader: async ( {params} ) => fetch(`http://localhost:5000/blog/${params.id}`)
           },
           {
            path: "/allblogs",
            element: <Allblogsmanage/>
           },
           {
            path: "/favorite",
            element: <Favorite/>
           }

    ]
    }
])