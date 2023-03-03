import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Dashboard from "./views/AdminPanel/Dashboard";
import Profile from "./views/AdminPanel/Profile";
import Navbar from "./views/Header/Navbar";
import Hotel from "./views/Hotel/Hotel";
import House from "./views/House/House";

import CreateHouse from "./views/dashboard/CreateHouse/CreateHouse";



import HouseDetails from "./views/HouseDetails/HouseDetails";
import Login from "./views/Login/Login";
import SignUp from "./views/SignUp/SignUp";

function App() {
  return (
    <div className="">
      <Navbar />
      {/* <Home /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/house" element={<House />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/login" element={<Login />} />
        <Route path="singUp" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />}>
        
        <Route path="profile" element={<Profile></Profile>}></Route>
        </Route>

       
        <Route path="/housedetails/:id" element={<HouseDetails />} />
        <Route path="/singUp" element={<SignUp />} />
        <Route path="/create-house" element={<CreateHouse />} />
      </Routes>
    </div>
  );
}

export default App;
