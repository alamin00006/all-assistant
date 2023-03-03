import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Admin = () => {
    return (
       <div>

           <div>
           <div className="drawer drawer-mobile">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">

    <Outlet></Outlet>
  
  </div> 
  <div className="drawer-side ">
    <label htmlFor="dashboard-drawer" className="drawer-overlay "></label> 
    <ul className="menu p-4 w-80 bg-green-100 space-y-2">
     
     <li className='bg-sky-300  hover:bg-slate-300 '><Link to="profile"> Profile</Link></li>
      <li className='bg-sky-300 hover:bg-slate-300'> <Link>Home Service</Link></li>
      <li className='bg-sky-300 hover:bg-slate-300'><Link>Shifting</Link></li>
      <li className='bg-sky-300 hover:bg-slate-300'><Link>Rental</Link></li>
      <li className='bg-sky-300 hover:bg-slate-300'><Link>Slider</Link></li>
      <li className='bg-sky-300 hover:bg-slate-300'><Link>Users</Link></li>
      <li className='bg-sky-300 hover:bg-slate-300'><Link>Orders</Link></li>
      <li className='bg-sky-300 hover:bg-slate-300'><Link>Settings</Link></li>
     
    </ul>
  
  </div>
</div>
  </div>
</div>
          
    );
};

export default Admin;