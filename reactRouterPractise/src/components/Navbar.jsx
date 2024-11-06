import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            to={"/"}
            style={({ isActive }) => {
              return isActive ? { color: "green" } : {};
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/about"}
            style={({ isActive }) => {
              return isActive ? { color: " green " } : {};
            }}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/dashboard"}
            style={({ isActive }) => {
              return isActive ? { color: "green" } : {};
            }}
          >
            Dashboard
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
