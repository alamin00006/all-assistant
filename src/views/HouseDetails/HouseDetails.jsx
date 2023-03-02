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
          <div>
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
            <div className="my-4">
              <button className="btn bg-lime-500 text-white mr-4">
                Get Phone Number
              </button>
              <button className="btn btn-outline">Share</button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-row">
        <div className="flex flex-row mr-6">
          <div>
            <h1>Kitchen</h1>
            <h1>Furnishing</h1>
            <h1>Gas Supply</h1>
            <h1>CCTV Camera</h1>
            <h1>Store Room</h1>
            <h1>Lift</h1>
          </div>
          <div>
            <h1>Yes</h1>
            <h1>No</h1>
            <h1>Cylinder</h1>
            <h1>No</h1>
            <h1>No</h1>
            <h1>No</h1>
          </div>
        </div>
        <div className="flex flex-row">
          <div>
            <h1>Kitchen</h1>
            <h1>Furnishing</h1>
            <h1>Gas Supply</h1>
            <h1>CCTV Camera</h1>
            <h1>Store Room</h1>
            <h1>Lift</h1>
          </div>
          <div>
            <h1>Yes</h1>
            <h1>No</h1>
            <h1>Cylinder</h1>
            <h1>No</h1>
            <h1>No</h1>
            <h1>No</h1>
          </div>
        </div>
      </div> */}

      <div className="overflow-x-auto mt-7">
        <h1>Over View</h1>
        <table className="table w-full border border-sky-500">
          {/* head */}
          {/* <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead> */}
          <tbody>
            {/* row 1 */}
            <tr>
              <td>Kitchen</td>
              <td>Yes</td>
              <td>Floor Type</td>
              <td>Tiled</td>
            </tr>
            {/* row 2 */}
            <tr>
              <td>Furnishing</td>
              <td>No</td>
              <td>Water Supply</td>
              <td>North</td>
            </tr>
            {/* row 3 */}
            <tr>
              <td>Gas Supply</td>
              <td>Cylinder</td>
              <td>Facing</td>
              <td>North</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HouseDetails;
