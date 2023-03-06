import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Dashboard from "./views/AdminPanel/Dashboard";
import Profile from "./views/AdminPanel/Profile";
import Navbar from "./views/Header/Navbar";
import Hotel from "./views/Hotel/Hotel";
import HotelDetails from "./views/HotelDetails/HotelDetails";
import House from "./views/House/House";

import CreateHouse from "./views/dashboard/CreateHouse/CreateHouse";



import HouseDetails from "./views/HouseDetails/HouseDetails";
import Login from "./views/Login/Login";
import SignUp from "./views/SignUp/SignUp";
import AddHouse from "./views/AdminPanel/AddHouse";
import AddHotel from "./views/AdminPanel/AddHotel";
import UserManage from "./views/AdminPanel/UserManage";
import Order from "./views/AdminPanel/Order/Order";
import AllHouse from "./views/dashboard/CreateHouse/AllHouse";
import AddCategory from "./views/AdminPanel/AddCategory";

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
        
        <Route path="profile" element={<Profile/>}></Route>
        <Route path="addhouse" element={<AddHouse/>}></Route>
        <Route path="addhotel" element={<AddHotel/>}></Route>
        <Route path="addcategory" element={<AddCategory/>}></Route>
        <Route path="manage-user" element={<UserManage/>}></Route>
        <Route path="order" element={<Order/>}></Route>
        </Route>

       
        <Route path="/housedetails/:id" element={<HouseDetails />} />
        <Route path="/hoteldetails/:id" element={<HotelDetails />} />
        <Route path="/singUp" element={<SignUp />} />
        <Route path="/create-house" element={<CreateHouse />} />
        <Route path="/all-house" element={<AllHouse />} />
      </Routes>
    </div>
  );
}

export default App;
