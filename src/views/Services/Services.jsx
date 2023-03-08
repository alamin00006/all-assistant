import house from "../../assets/images/1.png";
import hotel from "../../assets/images/7.png";
import shifting from "../../assets/images/2.png";
import technician from "../../assets/images/3.png";
import pureMil from "../../assets/images/milk.png";
import villagePur from "../../assets/images/Village.png";
import gas from "../../assets/images/6 (1).png";
import { Link } from "react-router-dom";
const Services = () => {
  return (
    <div className="my-6 lg:mx-36 md:mx-26 sm:mx-26 xs:mx-10">
      <div className="flex justify-center">
        <h2 className="text-center text-2xl font-bold text-black border-b-4 border-black">
          SERVICES
        </h2>
      </div>

      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 mt-5 justify-items-center">
        <div>
          <Link to="/house">
            <div className="flex items-center flex-col justify-center">
              <img style={{ width: "250px" }} src={house} alt="" />
              <p className="text-2xl">House</p>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/hotel">
            <div className="flex items-center flex-col justify-center">
              <img style={{ width: "250px" }} src={hotel} alt="" />
              <p className="text-2xl">Hotel</p>
            </div>
          </Link>
        </div>
        <div className="flex items-center flex-col justify-center">
          <img style={{ width: "250px" }} src={shifting} alt="" />
          <p className="text-2xl">Shifting</p>
        </div>
        <div className="flex items-center flex-col justify-center">
          <img style={{ width: "250px" }} src={technician} alt="" />
          <p className="text-2xl">Technician</p>
        </div>
        {/* <div className="lg:mt-0 xs:mt-5">
          <img style={{ width: "100px" }} src={pureMil} alt="" />
          <p className="ml-7">Pure Milk</p>
        </div>
        <div className="lg:mt-0 xs:mt-5">
          <img style={{ width: "100px" }} src={villagePur} alt="" />
          <p className="ml-7">Village Pur</p>
        </div> */}
        <div className="flex items-center flex-col justify-center">
          <img style={{ width: "250px" }} src={gas} alt="" />
          <p className="text-2xl">Gas</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
