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
import { useState } from "react";
import Shifting from "./views/Shifting/Shifting";
import Technician from "./views/Technician/Technician";
import RiceCookerService from "./views/Technician/RiceCookerService/RiceCookerService";
import MicrowaveOvenService from "./views/Technician/MicrowaveOvenService/MicrowaveOvenService";
import ComputerService from "./views/Technician/ComputerService/ComputerService";
import TreadmillRepair from "./views/Technician/TreadmillRepair/TreadmillRepair";
import ElectricalService from "./views/Technician/ElectricalService/ElectricalService";
import WaterPumpRepair from "./views/Technician/WaterPumpRepair/WaterPumpRepair";
import AcRepair from "./views/Technician/AcRepair/AcRepair";
import WaterHeaterRepair from "./views/Technician/WaterHeaterRepair/WaterHeaterRepair";
import CcCameraInstallation from "./views/Technician/CcCameraInstallation/CcCameraInstallation";
import FridgeRepair from "./views/Technician/FridgeRepair/FridgeRepair";
import IpsService from "./views/Technician/IpsService/IpsService";
import GasStoveService from "./views/Technician/GasStoveService/GasStoveService";
import PlumbingService from "./views/Technician/PlumbingService/PlumbingService";
import GeyserService from "./views/Technician/GeyserService/GeyserService";
import Cart from "./views/Cart/Cart";

function App() {
  const [divisions] = useDivision();
  const [districts] = useDistrict();
  const [upazilas] = useUpazila();

  const [cart, setCart] = useState([]);
  const addCart = (ser) => {
    let arr = [];
    arr = [...cart, ser];
    setCart(arr);
  };

  return (
    <div className="">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/house" element={<House />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/shifting" element={<Shifting />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singUp" element={<SignUp />} />
        <Route path="/comming-soon" element={<CommingSoon />} />
        <Route path="*" element={<Error />} />
        <Route path="/technician" element={<Technician />}>
          <Route
            index
            element={<RiceCookerService addCart={addCart} />}
          ></Route>
          <Route
            path="ricecooker"
            element={<RiceCookerService addCart={addCart} />}
          ></Route>
          <Route
            path="microwave"
            element={<MicrowaveOvenService addCart={addCart} cart={cart} />}
          ></Route>
          <Route
            path="computerservice"
            element={<ComputerService addCart={addCart} />}
          ></Route>
          <Route
            path="treadmillrepair"
            element={<TreadmillRepair addCart={addCart} />}
          ></Route>
          <Route
            path="electricalservice"
            element={<ElectricalService addCart={addCart} />}
          ></Route>
          <Route
            path="waterpumprepair"
            element={<WaterPumpRepair addCart={addCart} />}
          ></Route>
          <Route
            path="acrepair"
            element={<AcRepair addCart={addCart} />}
          ></Route>
          <Route
            path="waterheaterrepair"
            element={<WaterHeaterRepair addCart={addCart} />}
          ></Route>
          <Route
            path="cccamera"
            element={<CcCameraInstallation addCart={addCart} />}
          ></Route>
          <Route
            path="fridgerepair"
            element={<FridgeRepair addCart={addCart} />}
          ></Route>
          <Route
            path="ipsservice"
            element={<IpsService addCart={addCart} />}
          ></Route>
          <Route
            path="gasstoveservice"
            element={<GasStoveService addCart={addCart} />}
          ></Route>
          <Route
            path="plumbingservice"
            element={<PlumbingService addCart={addCart} />}
          ></Route>
          <Route
            path="geyserservice"
            element={<GeyserService addCart={addCart} />}
          ></Route>
        </Route>
        <Route path="/cart" element={<Cart cart={cart} />}></Route>
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
