import React from 'react'
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const Home = ({setCurrentuser}) => {
  const navigate = useNavigate();
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#3339b3",
  };
  const handleLogout = () => {
    localStorage.setItem("currentuser", {});
    setCurrentuser({});
    navigate("/login");
  };
  return (
    <div>
      <header>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="/home"
          end
        >
          {" "}
          info
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="todos"
        >
          {" "}
          Todos
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="posts"
        >
          {" "}
          Posts
        </NavLink>
        <button onClick={handleLogout}>Logout</button>
      </header>
      <Outlet />
    </div>
  )
}

export default Home;
