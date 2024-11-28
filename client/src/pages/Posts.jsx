import React from 'react'
import checkIfLogedin from "../functions/checkIfLogedin";

const Posts = () => {
  checkIfLogedin()
  return (
    <div>
      <h1>Posts</h1>
    </div>
  )
}

export default Posts
