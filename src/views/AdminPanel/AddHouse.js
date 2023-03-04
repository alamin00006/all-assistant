import React from 'react';
import AddHouseModal from './AddHouseModal';
import { DiWindows } from 'react-icons/di';
import './AddHouse.css'
import EditHouseModal from './EditHouseModal';
import DeleteHouseModal from './DeleteHouseModal';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FiEdit } from 'react-icons/fi';


const AddHouse = () => {
    return (
        <div>
    <label htmlFor="my-modal-5" className="btn bg-cyan-300"><DiWindows/>AddHouse</label>
           <AddHouseModal/>
                
           <div>
     {/* -------------------------table data------------------------ */}
     <div className="overflow-x-auto">
  <table className="table table-compact w-full">
    <thead>
      <tr>
        <th></th> 
        <th>BedRoom.Info</th> 
        <th>Floor</th> 
        <th>Division</th> 
        <th>District</th> 
        <th>Upazila</th> 
        <th>SpaceSize</th> 
        <th>Cm.Bathroom</th>
        <th>At.Bathroom</th>
        <th>Balcony</th>
        <th>P.Condation</th>
        <th>Facing</th>
        <th>AvailableFrom</th>
        <th>RentPriceTitle</th>
        <th>RentPrice</th>
        <th>Deposite</th>
        <th>Discount</th>
        <th>Status</th>
        <th>kitchen</th>
        <th>DiningSpace</th>
        <th>Furnishing </th>
        <th>GasSupply</th>
        <th>ccTV</th>
        <th>StoreRoom</th>
        <th>Lift</th>
        <th>WaterSupply</th>
        <th>Sc.Gard</th>
        <th>iPS</th>
        <th>Pk.Space</th>
        <th>FloorType</th>
        <th>Category</th>
        <th>Action</th>
      </tr>
    </thead> 
    
    <tbody>
      <tr>
        <th>1</th> 
        <td >FloorLevel</td> 
        <td>Quality Control Specialist</td> 
        <td>Littel, Schaden and Vandervort</td> 
        <td>Canada</td> 
        <td>12/16/2020</td> 
        <td>Blue</td>
       {/* hello */}
       {/* hi */}
        <td>
          <div className='flex space-x-4'>
          <button className="btn btn-circle btn-outline ">
          <label htmlFor="editmodal" className=""><FiEdit/></label><lable>_|_</lable>
         <label htmlFor="deletemodal" className=""><RiDeleteBin6Line/></label>
            </button>
        
          </div>
        </td>
      </tr>
      {/* <tr>
        <th>2</th> 
        <td>Hart Hagerty</td> 
        <td>Desktop Support Technician</td> 
        <td>Zemlak, Daniel and Leannon</td> 
        <td>United States</td> 
        <td>12/5/2020</td> 
        <td>Purple</td>
        <td><td><div className="dropdown dropdown-right dropdown-end">
  <label tabIndex={0} className=" m-1 btn">Click</label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow  bg-green-400 rounded-box w-52">
    <li><Link>Edit</Link></li>
    <li><Link>Delete</Link></li>
  </ul>
</div>  </td></td>
      </tr> */}
     <EditHouseModal/>

     <DeleteHouseModal/>
      
    </tbody> 
    <tfoot>
      <tr>
        <th></th> 
        <th>BedRoom.Info</th> 
        <th>Floor</th> 
        <th>Division</th> 
        <th>District</th> 
        <th>Upazila</th> 
        <th>SpaceSize</th> 
        <th>Cm.Bathroom</th>
        <th>At.Bathroom</th>
        <th>Balcony</th>
        <th>P.Condation</th>
        <th>Facing</th>
        <th>AvailableFrom</th>
        <th>RentPriceTitle</th>
        <th>RentPrice</th>
        <th>Deposite</th>
        <th>Discount</th>
        <th>Status</th>
        <th>kitchen</th>
        <th>DiningSpace</th>
        <th>Furnishing </th>
        <th>GasSupply</th>
        <th>ccTV</th>
        <th>StoreRoom</th>
        <th>Lift</th>
        <th>WaterSupply</th>
        <th>Sc.Gard</th>
        <th>iPS</th>
        <th>Pk.Space</th>
        <th>FloorType</th>
        <th>Category</th>
        <th>Action</th>
      </tr>
    </tfoot>
    
  </table>
</div>
</div>
        </div>
    );
};

export default AddHouse;