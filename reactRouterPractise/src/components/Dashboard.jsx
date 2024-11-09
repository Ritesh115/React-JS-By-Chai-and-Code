import React from "react";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <h1>
      Dashboard page
      <Outlet />
    </h1>
  );
}

export default Dashboard;
