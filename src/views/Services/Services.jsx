import house from "../../assets/images/1.png";
import hotel from "../../assets/images/7.png";
import shifting from "../../assets/images/2.png";
import technician from "../../assets/images/3.png";
import fish from "../../assets/images/fish.png";
import carRent from "../../assets/images/car rent.png";
import furnutere from "../../assets/images/furniture.png";
import grocery from "../../assets/images/grocery.png";
import electronics from "../../assets/images/electronics.png";
import meat from "../../assets/images/meat (2).png";
import gas from "../../assets/images/gas.png";
import cleaning from "../../assets/images/cleaning.png";
import painting from "../../assets/images/painting.png";
import beauty from "../../assets/images/Beauty.png";
import { Link } from "react-router-dom";
const Services = () => {
  return (
    <div className="my-6 lg:mx-36 md:mx-26 sm:mx-26 xs:mx-10">
      <div className="flex justify-center">
        <h2 className="text-center text-xl font-bold text-black border-b-4 border-black">
          SERVICES
        </h2>
      </div>

      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 mt-5 justify-items-center gap-6">
        <div>
          <Link to="/house">
            <div className="flex items-center flex-col justify-center">
              <img style={{ width: "200px" }} src={house} alt="" />
              <p className="text-xl">House</p>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/hotel">
            <div className="flex items-center flex-col justify-center">
              <img style={{ width: "200px" }} src={hotel} alt="" />
              <p className="text-xl">Hotel</p>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/comming-soon">
            <div className="flex items-center flex-col justify-center">
              <img style={{ width: "190px" }} src={shifting} alt="" />
              <p className="text-xl">Shifting</p>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/comming-soon">
            <div className="flex items-center flex-col justify-center">
              <img style={{ width: "190px" }} src={technician} alt="" />
              <p className="text-xl">Technician</p>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/comming-soon">
            <div className="flex items-center flex-col justify-center">
              <img style={{ width: "150px" }} src={fish} alt="" />
              <p className="text-xl">Fish</p>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/comming-soon">
            <div className="flex items-center flex-col justify-center">
              <img style={{ width: "170px" }} src={furnutere} alt="" />
              <p className="text-xl">Furniture</p>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/comming-soon">
            <div className="flex items-center flex-col justify-center">
              <img style={{ width: "170px" }} src={electronics} alt="" />
              <p className="text-xl">Electronics</p>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/comming-soon">
            <div className="flex items-center flex-col justify-center">
              <img style={{ width: "200px" }} src={carRent} alt="" />
              <p className="text-xl">Car Rent</p>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/comming-soon">
            <div className="flex items-center flex-col justify-center">
              <img style={{ width: "122px" }} src={grocery} alt="" />
              <p className="text-xl">Grocery</p>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/comming-soon">
            <div className="flex items-center flex-col justify-center">
              <img style={{ width: "150px" }} src={meat} alt="" />
              <p className="text-xl">Meat</p>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/comming-soon">
            <div className="flex items-center flex-col justify-center">
              <img style={{ width: "110px" }} src={gas} alt="" />
              <p className="text-xl">Gas</p>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/comming-soon">
            <div className="flex items-center flex-col justify-center">
              <img style={{ width: "130px" }} src={cleaning} alt="" />
              <p className="text-xl">Cleaning & Pest control</p>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/comming-soon">
            <div className="flex items-center flex-col justify-center">
              <img style={{ width: "100px" }} src={painting} alt="" />
              <p className="text-xl text-center">Painting & Renovation</p>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/comming-soon">
            <div className="flex items-center flex-col justify-center">
              <img style={{ width: "120px" }} src={beauty} alt="" />
              <p className="text-xl">Beauty & Salon</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
