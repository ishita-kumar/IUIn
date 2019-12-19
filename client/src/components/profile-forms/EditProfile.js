import React, { Fragment, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile, getCurrentProfile } from "../../actions/profile";
// import "../../css/forms.css";
// import "../../css/buttons.css";
import Navbar from "../layout/Navbar";

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history
}) => {
  const [formData, setFormData] = useState({
    // company: "",
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
    instagram: ""
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  useEffect(() => {
    getCurrentProfile();

    setFormData({
      // company: loading || !profile.company ? "" : profile.company,
      // website: loading || !profile.website ? "" : profile.website,
      // location: loading || !profile.location ? "" : profile.location,
      // status: loading || !profile.status ? "" : profile.status,
      // skills: loading || !profile.skills ? "" : profile.skills.join(","),
      // githubusername:
        // loading || !profile.githubusername ? "" : profile.githubusername,
      // bio: loading || !profile.bio ? "" : profile.bio,
      // twitter: loading || !profile.social ? "" : profile.social.twitter,
      // facebook: loading || !profile.social ? "" : profile.social.facebook,
      // linkedin: loading || !profile.social ? "" : profile.social.linkedin,
      // youtube: loading || !profile.social ? "" : profile.social.youtube,
      // instagram: loading || !profile.social ? "" : profile.social.instagram
    });
  }, [loading, getCurrentProfile]);

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
    instagram
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history, true);
  };

  return (
    <Fragment>
      <section className="">
        <Navbar></Navbar>
        <div className="">
          <div class="">
            <div class="">
              <div class="">
              

                <div class="main_container">
                  <div class="jumbotron text-center" style={{backgroundColor:"lightblue", height:"110px"}}>
                    <h2 style={{padding:"10px"}}>Edit Your Profile</h2>
                  </div>

                  <div class="container ">
                    <form onSubmit={e => onSubmit(e)}>
                      <hr></hr>
                    <label>Your Interests</label>
                      <select
                       class="form-control"
                       name="status"
                       value={status}
                       onChange={e => onChange(e)}
                      >
                        
                        <option>Interested in</option>
                        <option value="Developer">Events</option>
                        <option value="Junior Developer">
                          Meet New people
                        </option>
                        <option value="Senior Developer">Parties</option>
                        <option value="Manager">
                          Networking Oppurtunities
                        </option>
                      </select>
                      <div class="form-group ">
                        <hr></hr>
                        <label>Where Are you Located</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Location"
                          name="location"
                          value={location}
                          onChange={e => onChange(e)}
                        />
                      
                      </div>
                      <div class="form-group">
                        <hr></hr>
                        <label>A Short Bio About Yourself</label>
                        <textarea
                          class="form-control"
                          rows="5"
                          name="ProductDescription"
                        ></textarea>
                      </div>
                      <div class="form-group">
                        <hr></hr>
                        <label>Your Interests</label>
                        <input
                          type="text"
                          class="form-control"
                          name="skills"
                          value={skills}
                          onChange={e => onChange(e)}
                        />
                        <div id="invalid_SACCode" class="error_msg">
                          {" "}
                        </div>
                      </div>
                      <div class="form-group ">
                        <hr></hr>
                        <label> A short Bio</label>
                        <input
                          type="number"
                          class="form-control"
                          name="Quantity"
                          id="Quantity"
                        />
                        <div id="invalid_Quantity" class="error_msg">
                          {" "}
                        </div>
                      </div>
                  
                    <div className="col-6">
                    <center>
                  <input type="submit"    
                  
                  style={{textALign:"center",marginLeft:"420px",width:"120px",backgroundColor:"lightBlue", height:"40px"}}
                      
                     />
                     </center>
                  </div>
                  {/* <div className="col-6">
                  <Link className="btn btn-info" style={{marginLeft:"650px",width:"100px", height:"30px"}} to="/dashboard">
                    Back to Dashboard
                  </Link> 
                  </div> */}
                    </form>
                  </div>
                </div>

                <form onSubmit={e => onSubmit(e)}>
                  {/* <div className='form-group'> */}
                  {/* <select
                    name="status"
                    value={status}
                    onChange={e => onChange(e)}
                  >
                    <option>* Interested in</option>
                    <option value="Developer">Events</option>
                    <option value="Junior Developer">Meet New people</option>
                    <option value="Senior Developer">Parties</option>
                    <option value="Manager">Networking Oppurtunities</option>
                  </select>

                  <input
                    type="text"
                    placeholder="Company"
                    name="company"
                    value={company}
                    onChange={e => onChange(e)}
                  />

                  <input
                    type="text"
                    placeholder="Website"
                    name="website"
                    value={website}
                    onChange={e => onChange(e)}
                  />

                  <input
                    type="text"
                    placeholder="Location"
                    name="location"
                    value={location}
                    onChange={e => onChange(e)}
                  />

                  <input
                    type="text"
                    placeholder="* Skills"
                    name="skills"
                    value={skills}
                    onChange={e => onChange(e)}
                  />

                  <input
                    type="text"
                    placeholder="Github Username"
                    name="githubusername"
                    value={githubusername}
                    onChange={e => onChange(e)}
                  /> */}

                  {/* <textarea 
            placeholder='A short bio of yourself'
            name='bio'
            value={bio}
            onChange={e => onChange(e)}
          />
         */}

                  {/* <button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type='button'
            className='bouton'
          >
            Add Social Network Links
          </button>
          <span>Optional</span> */}

                  {/* {displaySocialInputs && (
          <Fragment>
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
              />
            </div>
          </Fragment>
        )} */}

                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);
