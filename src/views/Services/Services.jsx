import house from "../../assets/images/hose.png";
import hotel from "../../assets/images/hotel.png";
import shifting from "../../assets/images/shifting.png";
import technician from "../../assets/images/technician.png";
import pureMil from "../../assets/images/milk.png";
import villagePur from "../../assets/images/Village.png";
import gas from "../../assets/images/gas.png";
import { Link } from "react-router-dom";
const Services = () => {
  return (
    <div className="mt-4 mb-48 lg:mx-36 md:mx-26 sm:mx-16 xs:mx-0">
      <h2 className="text-center text-2xl font-bold text-gray-500">Services</h2>
      <div className="grid lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-5 xs:grid-cols-4 mt-5">
        <div>
          <Link to="/house">
            <img style={{ width: "100px" }} src={house} alt="" />
            <p className="ml-7">House</p>
          </Link>
        </div>
        <div>
          <Link to="/hotel">
            <img style={{ width: "100px" }} src={hotel} alt="" />
            <p className="ml-7">Hotel</p>
          </Link>
        </div>
        <div>
          <img style={{ width: "100px" }} src={shifting} alt="" />
          <p className="ml-7">Shifting</p>
        </div>
        <div>
          <img style={{ width: "100px" }} src={technician} alt="" />
          <p className="ml-7">Technician</p>
        </div>
        <div className="lg:mt-0 xs:mt-5">
          <img style={{ width: "100px" }} src={pureMil} alt="" />
          <p className="ml-7">Pure Milk</p>
        </div>
        <div className="lg:mt-0 xs:mt-5">
          <img style={{ width: "100px" }} src={villagePur} alt="" />
          <p className="ml-7">Village Pur</p>
        </div>
        <div className="lg:mt-0 xs:mt-5">
          <img style={{ width: "100px" }} src={gas} alt="" />
          <p className="ml-7">Gas</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
