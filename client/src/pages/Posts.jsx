import React, { useEffect, useState } from "react";
import apiRequest from "../functions/requestApi";
import checkIfLogedin from "../functions/checkIfLogedin";
import PostItem from "../components/PostItem";

const Posts = ({currentuser}) => {
  checkIfLogedin();
  
  const [posts, setPosts] = useState([]);
 // const [addPost, setAddPost] = useState(false);

  useEffect(() => {
    if(currentuser){
      async function getPosts() {
        //try using currentuser from props
        const data = JSON.parse(await apiRequest("posts/" + JSON.parse(window.localStorage.getItem("currentuser")).id))
        //const data = [{title: "post1"}];
        setPosts(data); //try to put it derectly in setPost
        console.log('posts: ', posts);
      } 
      getPosts();
    }
  }, []);
  return (
    <div key="posts_key">
      <h1>Posts</h1>
      {/* <button onClick={() => setAddTodo(!addTodo)}>Add To Do</button>
      {addTodo && (
        <AddTodo
          currentuser={currentuser}
          setAddTodo={setAddTodo}
          addTodo={addTodo}
          setposts={setposts}
        />
      )} */}
      {/* try doing this logic more organized */}
      {!posts && <h3>loading...</h3>}
      {posts && posts.map((post) => (
        <div key={"post_" + post.id}>
          <PostItem post={post}  />
        </div>
        ))}
    </div>
  )
}

export default Posts;
