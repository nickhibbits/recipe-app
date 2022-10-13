import { Route, Routes } from "react-router-dom";

import Dashboard from "./Dashboard";
import RestaurantProfile from "./RestaurantProfile";
import "../styles/App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/restaurant/" exact element={<RestaurantProfile />} />
      </Routes>
    </div>
  );
}

export default App;
