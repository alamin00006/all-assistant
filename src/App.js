import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./views/Header/Navbar";
import Hotel from "./views/Hotel/Hotel";
import House from "./views/House/House";
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
        <Route path="/hDetails" element={<HouseDetails />} />
      </Routes>
    </div>
  );
}

export default App;
