import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../actions/alert";
// import { register } from '../../actions/auth'; change this
import PropTypes from "prop-types";
import ReCAPTCHA from "react-google-recaptcha";
// import "../../css/forms.css";
import Navbar from "../layout/Navbar";

import axios from "axios";
const AddEvent = ({ setAlert }) => {
  const [formData, setFormData] = useState({
    name: "",
    Type: "",
    information: "",
    address: "",
    Age: "",
    pay: "",
    Capacity: "",
    Details: ""
  });

  const {
    name,
    type,
    information,
    address,
    Age,
    pay,
    Capacity,
    Details
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    formData.organizer = localStorage.user_id;
    // cchangeeeeeeee
    axios
      .post("/api/events", formData, config)
      .then(response => {
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });

    console.log(formData);
    //   addevent({ name,
    //     Type,
    //     Information,
    //     Location,
    //     Age,
    //     Address,
    //     Pay,
    //     Capacity,
    //     Details });
  };

  return (
    <Fragment>
      <Navbar></Navbar>
      <section className="">
        <div className="">
          <div class="">
            <div>
              <div
                class="jumbotron text-center"
                style={{ backgroundColor: "lightblue", height: "110px" }}
              >
                <h2 style={{ padding: "10px" }}>Add an Event or Venue</h2>
              </div>
              <div className="container">
                <form onSubmit={e => onSubmit(e)}>
                  <div class="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      class="form-control"
                   
                   
                    placeholder="Add Name of Venue or Event"
                    name="name"
                    value={name}
                    onChange={e => onChange(e)}
                    />
                 
                  </div>
                  <div class="form-group">
                    <label>Name</label>
                    <select
                      type="text"
                      class="form-control"
                      value={type}
                   
                    name="type"
                    onChange={e => onChange(e)}
                    >
                      <option value="movies">Event</option>
                    <option value="music">Venue</option>
                    >
                  </select>
                 
                  </div>
                  <div class="form-group">
<label >Event Description</label>
<textarea class="form-control"  type="Information"
                    placeholder="Information"
                    name="information"
                    value={information}
                    onChange={e => onChange(e)} rows="5"  ></textarea>
</div> 
<div class="form-group">
<label >Add Location Address</label>
<textarea class="form-control"  type="Location"
                    placeholder="Add Address"
                    name="address"
                    value={address}
                    onChange={e => onChange(e)} rows="5"  ></textarea>
</div> 

               
                  <div className="form-group">
                  <label >Age Restrictions</label>
                  <select
                    value={Age}
                    className="form-control"
                    name="Age"
                    onChange={e => onChange(e)}
                  >
                    <option value="Attendee">Over 21</option>
                    <option value="Organizer">Over 18</option>
                  </select>
                  </div>

                  <div className="form-group">
                  <label >Age Restrictions</label>
                  <select
                   
                    className="form-control"
                    value={pay}
                    
                    name="pay"
                    onChange={e => onChange(e)}
                  >
                   <option value="Attendee">Free</option>
                    <option value="Organizer">Chargeble</option>
                  </select>
                  </div>
                  <div className="form-group">
                  <label >Age Restrictions</label>
                  <input
                   
                    className="form-control"
                    type="Capacity"
                    placeholder="Enter Max Capacity"
                    name="Capacity"
                    value={Capacity}
                    onChange={e => onChange(e)}
                  >
                  
                  </input>
                  </div>
             

                 
        <div className="form-group">
                  <input
                    type="Details"
                    className="form-control"
                    placeholder="Any more Details to Add?"
                    name="Details"
                    value={Details}
                    onChange={e => onChange(e)}
                  />
</div>
                  <br />
<center>
                  <input type="submit" class="btn btn-info"value="Submit" style={{textALign:"center",width:"120px",backgroundColor:"lightBlue", height:"40px"}}/>
                  </center>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

AddEvent.propTypes = {
  // setAlert: PropTypes.func.isRequired,
  // register: PropTypes.func.isRequired,
  // isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(AddEvent);
