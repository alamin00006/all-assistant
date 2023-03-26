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
import Error from "./components/Error/Error";
import Footer from "./views/Footer/Footer";
import useDivision from "./Hooks/useDivision";
import useDistrict from "./Hooks/useDistrict";
import useUpazila from "./Hooks/useUpazila";
import CommingSoon from "./views/Services/CommingSoon";

function App() {
  const [divisions] = useDivision();
  const [districts] = useDistrict();
  const [upazilas] = useUpazila();
  return (
    <div className="">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/house" element={<House />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singUp" element={<SignUp />} />
        <Route path="/comming-soon" element={<CommingSoon />} />
        <Route path="*" element={<Error />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Profile />}></Route>
          <Route
            path="addhouse"
            element={
              <AddHouse
                divisions={divisions}
                districts={districts}
                upazilas={upazilas}
              />
            }
          ></Route>
          <Route
            path="addhotel"
            element={
              <AddHotel
                divisions={divisions}
                districts={districts}
                upazilas={upazilas}
              />
            }
          ></Route>
          <Route path="manage-user" element={<UserManage />}></Route>
          <Route path="order" element={<Order />}></Route>
        </Route>

        <Route path="/housedetails/:id" element={<HouseDetails />} />
        <Route path="/hoteldetails/:id" element={<HotelDetails />} />
        <Route path="/singUp" element={<SignUp />} />
        <Route path="/create-house" element={<CreateHouse />} />
        <Route path="/all-house" element={<AllHouse />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
