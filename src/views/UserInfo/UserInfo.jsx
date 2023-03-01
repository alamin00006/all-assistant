import React from 'react';
import img1 from '../../assets/images/clients.svg';
import img2 from '../../assets/images/services.svg';
import img3 from '../../assets/images/verified-client.svg';
import './UserInfo.css';

const UserInfo = () => {
    return (

    <div>   
    <div class="grid bg-slate-100 justify-around grid-cols-3 gap-3">

     <div className='flex flex-col items-center'>
      <div className='w-12 '>
        <img src={img2} alt="" />
      </div>
      <div className='text-center'>
        <h1>15,000 +</h1>
        <span>Service Provide</span>
      </div>
     </div>
     <div>
     <div className='flex flex-col items-center'>
      <div className='w-12 '>
        <img src={img1} alt="" />
      </div>
      <div className='text-center'>
        <h1>300 +</h1>
        <span>Property Owners</span>
      </div>
     </div>
     </div>
     <div>
     <div className='flex flex-col items-center'>
      <div className='w-12 '>
        <img src={img3} alt="" />
      </div>
      <div className='text-center'>
        <h1>10,000 +</h1>
        <span>Families As Clients</span>
      </div>
     </div>
     </div>



      {/* <div className='flex flex-col justify-center'>
        <div><img className='w-28' src={img2} alt="" />
        </div>
         <div><h1>15,000 + </h1> <span>Services</span> </div>
        </div> */}



      {/* <div><img src={img3} alt="" /><br/>300 + <br/>Property Owners</div>
      <div><img src={img1} alt="" /><br/>10,000 + <br/>Families As Clients</div> */}

    </div>

    </div>

    
        
    );
};

export default UserInfo;