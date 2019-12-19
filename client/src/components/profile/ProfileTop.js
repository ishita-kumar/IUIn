import React from 'react';
import PropTypes from 'prop-types';
import Navbar from "../layout/Navbar"

const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    website,
    social,
    user: { name, avatar }
  }
}) => {
  return (
    // <div className='profile-top bg-primary p-2'>

       <div class="content-profile-page">
             <Navbar></Navbar>
         <div class="profile-user-page card">
      <div class="img-user-profile">
        <img class="profile-bgHome" src="https://37.media.tumblr.com/88cbce9265c55a70a753beb0d6ecc2cd/tumblr_n8gxzn78qH1st5lhmo1_1280.jpg" />
        <img class="avatar" src="https://pbs.twimg.com/profile_images/490920334460080129/bur8ZJZC.jpeg" alt="allan"/>
           </div>
           <div class="user-profile-data">
            <h1>{name}</h1>
                     </div> 
        <ul class="data-user">
          <li>
          {status} {company && <span> at {company}</span>}
          </li>
          </ul>
      {/* <img className='round-img my-1' src={avatar} alt='' />
      <h1 className='large'>{name}</h1> */}
      {/* <p className='lead'> */}
        {/* {status} {company && <span> at {company}</span>}
      </p> */}
      <p>{location && <span>{location}</span>}</p>
      <div className='icons my-1'>
        {website && (
          <a href={website} target='_blank' rel='noopener noreferrer'>
            <i className='fas fa-globe fa-2x' />
          </a>
        )}
        {social && social.twitter && (
          <a href={social.twitter} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-twitter fa-2x' />
          </a>
        )}
        {social && social.facebook && (
          <a href={social.facebook} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-facebook fa-2x' />
          </a>
        )}
        {social && social.linkedin && (
          <a href={social.linkedin} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-linkedin fa-2x' />
          </a>
        )}
        {social && social.youtube && (
          <a href={social.youtube} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-youtube fa-2x' />
          </a>
        )}
        {social && social.instagram && (
          <a href={social.instagram} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-instagram fa-2x' />
          </a>
        )}
      </div>
      
      </div>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileTop;
