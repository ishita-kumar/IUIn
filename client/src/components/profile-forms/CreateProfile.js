import React, { useEffect, useState, Fragment } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile, getCurrentProfile } from "../../actions/profile";
import '../../css/forms.css'
import '../../css/buttons.css'
const Createprofile = ({
  createProfile,
  getCurrentProfile,
  profile: { profile, loading },
  history,
}) => {
  const [formData, setFormData] = useState({
    company: "",
    website: "",
    location: "",
    status: "",
    skills: "",
    githubusername: "",
    bio: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    youtube: "",
    instagram: "",
  });
  const [displaySocialInputs, toggleSocialInputs] = useState(false);
  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
  } = formData;
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history);
  };
  useEffect(() => {
    getCurrentProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getCurrentProfile]);
  return loading && profile === null ? (
    <Redirect to='/dashboard' />
  ) : (
    <Fragment>
     {/* <h1 className='large text-primary'>Create Your Profile</h1> */}
     <section className ="formslayout3">

<div className='formslayout3-inner'>
     <div class="page">
<div class="register2"> 
<div class="formulaire">
<h1 class="text-center">Make your profile!</h1>
      <form  onSubmit={e => onSubmit(e)}>
        {/* <div className='form-group'> */}
          <select name='status' className='input2' value={status} onChange={e => onChange(e)}>
          <option value="0">I'm looking for</option>
            <option value="Developer">Events</option>
            <option value="Junior Developer">Meet New people</option>
            <option value="Senior Developer">Parties</option>
            <option value="Manager">Networking Oppurtunities</option>
          </select>
       
        {/* </div> */}
        {/* <div className='form-group'> */}
          <input
            type='text'
            placeholder='School'
            name='company'
            value={company}
            onChange={e => onChange(e)}
          />
         
      
       
          <input
            type='text'
            placeholder='Status'
            name='website'
            value={website}
            onChange={e => onChange(e)}
          />
         
       
          <input
            type='text'
            placeholder='Location'
            name='location'
            value={location}
            onChange={e => onChange(e)}
          />
       
      
          <input
            type='text'
            placeholder='Interested In'
            name='skills'
            value={skills}
            onChange={e => onChange(e)}
          />
         
      
          <input
            type='text'
            placeholder='IU Username'
            name='githubusername'
            value={githubusername}
            onChange={e => onChange(e)}
          />
         
      
          {/* <textarea class= "inout2"
            placeholder='A short bio of yourself'
            name='bio'
            value={bio}
            onChange={e => onChange(e)}
          /> */}
{/*         
            <div className='form-group social-input'>
              <i className='fab fa-twitter fa-2x' />
              <input
                type='text'
                placeholder='Twitter URL'
                name='twitter'
                value={twitter}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-facebook fa-2x' />
              <input
                type='text'
                placeholder='Facebook URL'
                name='facebook'
                value={facebook}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-youtube fa-2x' />
              <input
                type='text'
                placeholder='YouTube URL'
                name='youtube'
                value={youtube}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-linkedin fa-2x' />
              <input
                type='text'
                placeholder='Linkedin URL'
                name='linkedin'
                value={linkedin}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-instagram fa-2x' />
              <input
                type='text'
                placeholder='Instagram URL'
                name='instagram'
                value={instagram}
                onChange={e => onChange(e)}
              /> */}
            {/* </div> */}
      
        <input type='submit' className='bouton' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
    
      </form>
      </div>
  </div>
  </div>
  </div>
  
  </section> 
    </Fragment>
  );
};

Createprofile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  profile: state.profile,
});
export default connect(
  mapStateToProps,
  { createProfile, getCurrentProfile },
)(withRouter(Createprofile));
