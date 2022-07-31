import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const MenuContainer = ({ link, icon }) => {
  let activeClass = {
    position: "absolute",
    height: "60px",
    width: "60px",
    backgroundColor: "#f8901c",
    borderRadius: "100%",
    top: "-50%",
    border: " solid #faf9fb",
    transition: "0.5s",
  };

  return (
    <li>
      <NavLink
        to={link}
        style={({ isActive }) => (isActive ? activeClass : null)}
      >
        <span className="icon">{icon}</span>
      </NavLink>
    </li>
  );
};

export default MenuContainer;
