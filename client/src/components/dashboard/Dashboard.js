import kun from "../../img/Kun.jpg";
import Calendar from "../../assets/calendar.png";
import "../../css/dashb.css";
import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Navbar from '../../components/layout/Navbar';
import { connect } from "react-redux";
import Form from "../../assets/formo.png";
import Spinner from "../layout/Spinner";
import DashboardActions from "./DashboardActions";
import Experience from "./Experience";
import Education from "./Education";
import axios from "axios";
import "../../css/buttons.css";
import { showevent } from "../../actions/auth";
import "../../style.css";
import "../../css/searchbar.css";
import party from '../../assets/party.png'
import pool from '../../assets/pool.png'
import italy from '../../assets/italy.png'

import "../../css/grid.css";
import "../../css/buttons.css";
import Banner from '../../assets/banner.png';
import { getCurrentProfile, deleteAccount } from "../../actions/profile";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

const imgArray = [party, pool, italy]
const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading },
  showevent
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);
  
  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <Navbar />
      <div class="" style={{backgroundColor:"white"}}>
        <div class="">
          <div class="welcome__block">
            <div>
        
              <img src={kun} style={{width:"128px", height:"128px"}} />
              <div>
                <h2>Hey There, {user && user.name}</h2> 
              </div>
            </div>
            <div>
            <h2 style={{textAlign:"center"}}>Actions</h2>
            <div class="card" >
 
  <ul class="list-group list-group-flush">
    <li class="list-group-item"> <Link to={"/registerevent/" + user._id}>      <p style={{color:"black"}}> <i class="fas fa-tasks fa"></i>  Registered And Completed</p>
</Link></li>
    <li class="list-group-item">  <Link to={"/waitinglistevent/" + user._id}>   <p style={{color:"black"}}> <i class="fas fa-plus-square fa"></i> Waitlisted Events</p></Link></li>
    <li class="list-group-item"> <Link to="/edit-profile"  >
            <p style={{color:"black"}}> <i className="far fa-id-badge" style={{color:"black"}}></i> Your Profile</p>
          </Link></li>
  </ul>
</div>
               
              <p>  </p>
              <p>  </p>
             
            </div>
            <div class="calendar" style={{height:"300px"}}>
        <FullCalendar 
        defaultView="dayGridMonth" 
        plugins={[ dayGridPlugin ]} 
        //This needs to be set to the all of the user's registered/up events.
        events={[
            { title: 'Game Day', date: '2019-11-01' },
            { title: 'Music', date: '2019-11-02' }
          ]}
        />
        </div>
          </div>
         
          <div class="grid">
            <div class="column lg12 sm12">
              <div class="advert">
                <button type="button" class="close">
                  <i class="material-icons">&#xE5CD;</i>
                </button>
                <h3 >Explore Experiences</h3>
                <p>Find something great to do!</p>
                <p>
                  {" "}
                  <Link to="/SearchEvents">Browse All</Link>
                </p>
              </div>
            </div>
          </div>
          <div class="grid">
            <div class="column lg12">
              <h2 class="section__title" style={{textAlign:"center"}}>Events You Love  <i class="fas fa-heart fa-lg" style={{color: "#FF1493", width:"25px", height:"25px" }}></i></h2>
            </div>
            <div
              class="column lg8 md12 sm12" 
              style={{ paddingLeft: "35px" }}
             
            >
              <div class="widget">
                <div class="row">
              

                   
                    <div >
                      <div >
                        <div class="row">
                        <div >
                        {profile.user.likes.map(event => {
                      
                      return <Link to="edit/event._id"> <img
                      src={imgArray[Math.floor((Math.random() * 2) )]}
                      // class="d-block w-100"
                      alt="..."
                      style={{width:"200px",borderRadius:"16px",padding:"20px", height:"200px "}}
                      
                    /></Link>
                      
                    })}
                       </div>
                          
                          
                             
                            {/* </Link>
                          {profile.user.likes.map(event => {
                      
                      return <Link to="edit/event._id">Browse All</Link>
                      
                    })} */}
                            {/* <Link to={"/edit/5dacf7dc1c9d440000fd2b34"}>
                              <img
                                src={Ishita}
                                class="d-block w-100"
                                alt="..."
                                style={{width:"20px", height:"20px "}}
                                
                              />
                            </Link> */}
                       
                        /
                          {/* <div class="col-3">
                            <Link to={"/edit/5dacf7dc1c9d440000fd2b34"}>
                              <img
                                src={Ishita}
                                class="d-block w-100"
                                alt="..."
                              />
                            </Link>
                          </div> */}
                          {/* <div class="col-3">
                            <Link to={"/edit/5dacf7dc1c9d440000fd2b34"}>
                              <img
                                src={Ishita}
                                class="d-block w-100"
                                alt="..."
                              />
                            </Link>
                          </div> */}
                        </div>
                      </div>

                      {/* <div class="carousel-item" data-interval="3000">
                        <div class="row">
                          <div class="col-3">
                            <img src={Ishita} class="d-block w-100" alt="..." />
                          </div>
                          <div class="col-3">
                            <img src={Ishita} class="d-block w-100" alt="..." />
                          </div>
                          <div class="col-3">
                            <img src={Ishita} class="d-block w-100" alt="..." />
                          </div>
                          <div class="col-3">
                            <img src={Ishita} class="d-block w-100" alt="..." />
                          </div>
                        </div>
                      </div> */}
                    </div>
                </div>
              </div>
            </div>
            {profile !== null ? (
              <Fragment>
                
  
                <div className="container text-center">
                <ul class="list-group">
                  <li class="list-group-item">
                
                    <button
                      type="button"
                      style={{padding:"0px", fontSize:"1.5rem"}}
                      class="btn btn-danger"
                      onClick={() => deleteAccount()}
                    >
                      Delete Account
                    </button>
                  </li>
                </ul>
                </div>
              </Fragment>
            ) : (
              <Fragment>
                <div class="column lg4 md12 sm12">
                  <div class="widget">
                    <div class="title">
                      <h3>Complete your profile</h3>
                    </div>
                    <div class="list">
                      <ul>
                        <li>
                          {" "}
                          <Link to="/create-profile">
                            <p>Create Your Profile</p>
                          </Link>
                        </li>
                        <li> 
                        <button className="example_dsearch"  onClick={() => deleteAccount()}>
               Delete Account
            </button>
            </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Fragment>
            )}
          </div>
        </div>
              
        {/* <button class="example_c" ><Link to={'/registerevent/'+ user._id}>seel detail</Link></button>  */}
      </div>
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
