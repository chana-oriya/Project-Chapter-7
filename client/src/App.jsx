import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Todos from "./pages/Todos";
import Posts from "./pages/Posts";
import Post from "./pages/Post"
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />}>
              <Route index element={<Info/>} />
              <Route path="todos"element={<Todos />} />
              <Route path="posts" element={<Posts />} >
                 <Route path=":id:"element={<Post />} />
              </Route>
            </Route>
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </Router>
       
    </>
  )
}

export default App
