import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Navbar from "../layout/Navbar"

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name }
  }
}) => (
  <div class="content-profile-page">
   <div class="profile-user-page card">
      {/* <div class="img-user-profile">
        <img class="profile-bgHome" src="https://37.media.tumblr.com/88cbce9265c55a70a753beb0d6ecc2cd/tumblr_n8gxzn78qH1st5lhmo1_1280.jpg" />
        <img class="avatar" src="https://pbs.twimg.com/profile_images/490920334460080129/bur8ZJZC.jpeg" alt="allan"/>
           </div> */}
    {bio && (
      <Fragment>
        <Navbar></Navbar>
        <h2 className='text-primary'>{name.trim().split(' ')[0]}s Bio</h2>
        <p>{bio}</p>
        <div className='line' />
      </Fragment>
    )}
    {/* <h2 className='text-primary'>Interests</h2> */}
    {/* <div className='skills'>
      {skills.map((skill, index) => (
        <div key={index} className='p-1'>
          <i className='fas fa-check' /> {skill}
        </div>
      ))}
    </div> */}
  </div>
  </div>
);

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
