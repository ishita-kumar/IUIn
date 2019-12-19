import React from 'react';
import { Link } from 'react-router-dom';


const DashboardActions = () => {
  return (
     
    <div className='dash-buttons'>
    <ul>
   <li> <Link to='/edit-profile' className='btn btn-light'>
        <i className='fas fa-user-circle text-primary' /> Edit Profile
      </Link>
      </li>
     {/* <li>  <Link to='/add-experience' className='btn btn-light'>
        <i className='fab fa-black-tie text-primary' /> Add Details
      </Link>
      </li> */}
      <li> 
      <Link to='/add-education' className='btn btn-light'>
        <i className='fas fa-graduation-cap text-primary' /> Add Your Interests
      </Link>
      </li>
    </ul>
     
    </div>
  );
};

export default DashboardActions;
