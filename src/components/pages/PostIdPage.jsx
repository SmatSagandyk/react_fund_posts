import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import { useFetching } from "../hooks/useFetching";
import Loader from "../UI/Loader/Loader";

const PostIdPage = () => {
  const params = useParams();

  const [post,setPost] = useState({});
  const [getPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
    console.log(setPost);
  });

  useEffect(()=>{
      getPostById(params.id)
  },[])
  return (
      <div>
      <h1>ВЫВ попали на тсранциу поста {params.id}</h1>

      {
          isLoading ? <Loader/>
          : <h1>{post.id}.{post.title}</h1> 
        }      
    </div>
  )
};

export default PostIdPage;
