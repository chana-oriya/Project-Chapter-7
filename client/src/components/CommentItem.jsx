import React from "react";

const CommentsItem = ({comment}) => {
  return (
    <div>
      <p>{comment.name}</p>
      <p>{comment.body}</p>
    </div>
  );
};

export default CommentsItem;