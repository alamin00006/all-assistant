import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import { FaLaptopHouse , FaUsersCog } from 'react-icons/fa';
import { MdCategory , MdCarRental } from 'react-icons/md';
import { AiOutlineUnorderedList} from 'react-icons/ai';

const Admin = () => {
    return (
       <div>

           <div>
           <div className="drawer drawer-mobile">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content border  border-indigo-200 p-6">

    <Outlet></Outlet>

  </div> 
  <div className="drawer-side w-48">
    <label htmlFor="dashboard-drawer" className="drawer-overlay "></label> 
    <ul className="menu p-2 w-80 bg-green-100 space-y-2 ">
     
     <li className='bg-sky-300  hover:bg-slate-300 border-none  h-10'><Link to="profile"><CgProfile/> Profile</Link></li>
      <li className='bg-sky-300 hover:bg-slate-300 h-10'> <Link to="addhouse"><FaLaptopHouse/>Add House</Link></li>
      <li className='bg-sky-300 hover:bg-slate-300 h-10'> <Link to="addhotel"><FaLaptopHouse/>Add Hotel</Link></li>
      <li className='bg-sky-300 hover:bg-slate-300 h-10'><Link><MdCategory/>Add Category</Link></li>
      <li className='bg-sky-300 hover:bg-slate-300 h-10'><Link><MdCarRental/>Rental</Link></li>
      <li className='bg-sky-300 hover:bg-slate-300 h-10'><Link to="manage-user"><FaUsersCog/>Users</Link></li>
      <li className='bg-sky-300 hover:bg-slate-300 h-10'><Link to="order"><AiOutlineUnorderedList/>Orders</Link></li>
     
     
    </ul>
  
  </div>
</div>
  </div>
</div>
          
    );
};

export default Admin;


    