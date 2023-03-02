import React from "react";
import { useParams } from "react-router-dom";
import HouseDetailsHook from "../../Hooks/HoseDetailsHook";

const HouseDetails = () => {
  //   const [info, setInfo] = useState();
  const { id } = useParams();
  const a = HouseDetailsHook(id);
  console.log(a);

  return (
    <div className="w-3/4 m-0 mx-auto">
      <h1>House Details</h1>
      <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-2">
        <div className="border-2 border-sky-500">
          <img
            className="p-4"
            src="https://res.cloudinary.com/bdassistant/image/upload/w_1000,ar_16:9,c_fill/wofkt2dkdqixbcjpztjx"
            alt=""
          />
        </div>
        <div className="border-2 border-sky-500 text-center">
          <div>
            <h2>PROPERTY ID:1610</h2>
            <p>Location : North Babukhan, Babukhan, Sadar, Rangpur</p>
            <button className="btn bg-lime-500 text-white">For Family</button>
          </div>
          <div className="flex flex-row justify-center text-left">
            <div className="mr-4">
              <div>
                <h2>2 Bedroom</h2>
                <p>No. of Bedroom</p>
              </div>
              <div>
                <h2>Yes</h2>
                <p>Dining Space</p>
              </div>
              <div>
                <h2>1</h2>
                <p>Dining Space</p>
              </div>
              <div>
                <h2>2</h2>
                <p>Balcony</p>
              </div>
              <div>
                <h2>Renovated</h2>
                <p>Property condition</p>
              </div>
              <div>
                <h2>6500 (Fixed)</h2>
                <p>Rent</p>
              </div>
            </div>
            <div>
              <div>
                <h2>2 Bedroom</h2>
                <p>No. of Bedroom</p>
              </div>
              <div>
                <h2>Yes</h2>
                <p>Dining Space</p>
              </div>
              <div>
                <h2>1</h2>
                <p>Dining Space</p>
              </div>
              <div>
                <h2>2</h2>
                <p>Balcony</p>
              </div>
              <div>
                <h2>Renovated</h2>
                <p>Property condition</p>
              </div>
              <div>
                <h2>6500 (Fixed)</h2>
                <p>Rent</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseDetails;
