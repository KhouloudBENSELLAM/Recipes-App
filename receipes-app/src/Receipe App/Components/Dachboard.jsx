
import React from "react";
import Recipes from "../Pages/Recipes";
import LogoutButton from "./Logout";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <LogoutButton />
      <Recipes />
    </div>
  );
}

export default Dashboard;

