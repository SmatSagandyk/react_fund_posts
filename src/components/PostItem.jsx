import React, { useState } from "react";
import { Router } from "react-router-dom";
import MyButton from "./UI/button/MyButton";
import { useHistory } from "react-router";

const PostItem = ({ post, remove }) => {
  const router = useHistory();
  const { title, body } = post;
  return (
    <div className='post'>
      <div className='post__content'>
        <strong>
          {post.id}. {title}
        </strong>
        <div>{body}</div>
      </div>
      <div className='post__btns'>
        <MyButton onClick={() => router.push(`/posts/${post.id}`)}>
          Смотреть
        </MyButton>
        <MyButton onClick={() => remove(post)}>Удалить</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
