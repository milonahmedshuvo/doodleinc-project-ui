import { createBrowserRouter } from "react-router-dom";
import Rootlayout from "./Rootlayout";
import Blogpage from "../components/blogpage/Blogpage";
import Newblog from "../components/newblog/Newblog";

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
           }

    ]
    }
])