import React, { useState } from "react";
import Comments from "./Comments";
import apiRequest from "../functions/requestApi";

const PostItem = ({ post, onDelete }) => {
  const [bodyDisplayed, setBodyDisplayed] = useState(false);
  const [commentsDisplayed, setCommentsDisplayed] = useState(false);

  const handleDelete = () =>{
    const resault = apiRequest(`posts/${post.id}`,{
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
    if (resault.error)  console.log('resault.error: ', resault.error);
    else  onDelete(post.id);
  }

  return (
    <div style={{border: "1px solid black"}}>
      <p>{post.title}</p>
      <button onClick={handleDelete}>delete</button>
      <button onClick={ () => setBodyDisplayed((prev) => !prev)}>...</button>
      {bodyDisplayed && <div>
        <p>{post.body}</p>
        <button onClick={ () => setCommentsDisplayed((prev) => !prev)} >show comments</button>
        {commentsDisplayed && <Comments post_id={post.id} />}
      </div>}
    </div>
  );
};

export default PostItem;