import React from "react";

const CommentsItem = ({comment}) => {
  return (
    <div>
      <p>{comment.title}</p>
    </div>
  );
};

export default CommentsItem;