import React, { useState } from "react";
import Comments from "./Comments";

const PostItem = ({ post }) => {
  const [bodyDisplayed, setBodyDisplayed] = useState(false);
  const [commentsDisplayed, setCommentsDisplayed] = useState(false);
  return (
    <div style={{border: "1px solid black"}}>
      <p>{post.title}</p>
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