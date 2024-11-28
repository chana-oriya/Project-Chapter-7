import React, { useState, useEffect } from "react";
import CommentsItem from "./CommentItem";
import apiRequest from "../functions/requestApi";


const Comments = ({post_id}) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        async function getComments() {
        //try using currentuser from props
       const data = JSON.parse(await apiRequest(`posts/${post_id}/comment`))
        // const data = [{title: "comment of post " + post_id}];
        setComments(data); //try to put it derectly in setPost
       // console.log('posts: ', posts);
        } 
        getComments();
        
      }, []);
  return (
    <div>
    {!comments && <h3>loading...</h3>}
      {comments && comments.map((comment) => (
        <div key={"comments_" + comment.id}>
          <CommentsItem comment={comment}  />
        </div>
        ))}
    </div>
  );
};

export default Comments;