import React, { useEffect, useState } from "react";

function Dashboard() {
  useEffect(() => {
    fetch("/getRecipes")
      .then((res) => res.json())
      .then((data) => console.log("DATA", data));
  }, []);

  return <div>Dashboard -- home page with home page stuff</div>;
}

export default Dashboard;
