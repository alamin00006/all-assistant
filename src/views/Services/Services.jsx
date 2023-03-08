import house from "../../assets/images/1.png";
import hotel from "../../assets/images/7.png";
import shifting from "../../assets/images/2.png";
import technician from "../../assets/images/3.png";
import fish from "../../assets/images/fish (1).png";
import carRent from "../../assets/images/car rent.png";
import furnutere from "../../assets/images/furniture.png";
import grocery from "../../assets/images/grocery.png";
import electronic from "../../assets/images/electronic.png";
import meat from "../../assets/images/meat (1).png";
import { Link } from "react-router-dom";
const Services = () => {
  return (
    <div className="my-6 lg:mx-36 md:mx-26 sm:mx-26 xs:mx-10">
      <div className="flex justify-center">
        <h2 className="text-center text-2xl font-bold text-black border-b-4 border-black">
          SERVICES
        </h2>
      </div>

      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 mt-5 justify-items-center gap-6">
        <div>
          <Link to="/house">
            <div className="flex items-center flex-col justify-center">
              <img style={{ width: "200px" }} src={house} alt="" />
              <p className="text-2xl">House</p>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/hotel">
            <div className="flex items-center flex-col justify-center">
              <img style={{ width: "200px" }} src={hotel} alt="" />
              <p className="text-2xl">Hotel</p>
            </div>
          </Link>
        </div>
        <div className="flex items-center flex-col justify-center">
          <img style={{ width: "200px" }} src={shifting} alt="" />
          <p className="text-2xl">Shifting</p>
        </div>
        <div className="flex items-center flex-col justify-center">
          <img style={{ width: "200px" }} src={technician} alt="" />
          <p className="text-2xl">Technician</p>
        </div>
        <div className="flex items-center flex-col justify-center">
          <img style={{ width: "120px" }} src={fish} alt="" />
          <p className="text-2xl">Fish</p>
        </div>
        <div className="flex items-center flex-col justify-center">
          <img style={{ width: "170px" }} src={furnutere} alt="" />
          <p className="text-2xl">Furniture</p>
        </div>
        <div className="flex items-center flex-col justify-center">
          <img style={{ width: "170px" }} src={electronic} alt="" />
          <p className="text-2xl">Electronic</p>
        </div>
        <div className="flex items-center flex-col justify-center">
          <img style={{ width: "200px" }} src={carRent} alt="" />
          <p className="text-2xl">Car Rent</p>
        </div>
        <div className="flex items-center flex-col justify-center">
          <img style={{ width: "122px" }} src={grocery} alt="" />
          <p className="text-2xl">Grocery</p>
        </div>
        <div className="flex items-center flex-col justify-center">
          <img style={{ width: "112px" }} src={meat} alt="" />
          <p className="text-2xl">Meat</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
