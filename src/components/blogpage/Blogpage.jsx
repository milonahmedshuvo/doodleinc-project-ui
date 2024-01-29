import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import Blog from "./Blog";
import { useQuery } from "@tanstack/react-query";


const Blogpage = () => {
  const [postsData, setPostsData] = useState([]);
  const [loading, setLoading] = useState(false)
  const [favoritePosts, setFavoritePosts] = useState([]);


  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) =>{
        setLoading(true)
        setPostsData(data)
      })
      .catch((err) => console.log(err));
  }, []);

  
    
    

  

  useEffect(() => {
    // Load favorite posts from local storage on app start
    const loadedFavoritePosts = [];

    postsData.forEach((post) => {
      console.log("post ", post)
      if (localStorage.getItem(`favorite_${post.id}`) === "true") {
        loadedFavoritePosts.push(post);
      }
    });
    setFavoritePosts(loadedFavoritePosts);
  }, [loading]);

  localStorage.setItem("items", JSON.stringify(favoritePosts))
  console.log("fovorite", favoritePosts)
  

  const handleToggleFavorite = (postId) => {
    // Add or remove post from favorite list
    const updatedFavoritePosts = [...favoritePosts];
    const postIndex = updatedFavoritePosts.findIndex(
      (post) => post.id === postId
    );

    if (postIndex === -1) {
      // Add post to favorite
      const postToAdd = postsData?.find((post) => post.id === postId);
      updatedFavoritePosts.push(postToAdd);
    } else {
      // Remove post from favorite
      updatedFavoritePosts.splice(postIndex, 1);
    }

    setFavoritePosts(updatedFavoritePosts);
  };




  













  return (
    <div className="my-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {postsData?.map((post, i) => <Blog 
        key={post.id}
        post={post}
        onToggleFavorite={handleToggleFavorite}
        > </Blog> ) }
      </div>
    </div>
  );
};

export default Blogpage;
