import { Route, Routes } from "react-router-dom";

import Dashboard from "./Dashboard";
import RestaurantProfile from "./RestaurantProfile";
import UserProfile from "./UserProfile";
import RestaurantCharts from "./RestaurantCharts";
import MyRestaurants from "./MyRestaurants";
import "../styles/App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/restaurantProfile/:id" element={<RestaurantProfile />} />
        <Route path="userProfile/:userId" element={<UserProfile />} />
        <Route path="restaurantCharts" element={<RestaurantCharts />} />
        <Route path="myRestaurants" element={<MyRestaurants />} />
      </Routes>
    </div>
  );
}

export default App;
