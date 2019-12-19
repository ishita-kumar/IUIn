import React, { Fragment, useEffect, Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import DashboardActions from "./DashboardActions";
import Experience from "./Experience";
import Education from "./Education";
import "../../css/buttons.css";
import { getCurrentProfile, deleteAccount } from "../../actions/profile";
import EventInformation from "./EventInformation";
import Addevents from "../profile-forms/Addevent";
import axios from "axios";
import "../../css/landing.css";
import Navbar from "../../components/layout/Navbar";
import { store } from "react-notifications-component";


import "react-notifications-component/dist/theme.css";
import "animate.css";

// axios.get(`/api/events/${localStorage.user_id}`)
//     .then(response => {
//       this.setState({ events: response.data })
//     })
//     .catch(e => {
//       console.log(e)
//   //     })

// const Dashboardorg = ({
//   getCurrentProfile,
//   deleteAccount,
//   auth: { user },
//   profile: { profile, loading }
// }) => {
//   useEffect(() => {

//     getCurrentProfile();
//   }, [getCurrentProfile]);

//   return loading && profile === null ? (
//     <Spinner />
//   ) : (

//     <Fragment>
//      <h2>hi</h2>
//      {events}
//      <Addevents />
//     </Fragment>
//   );
// };

// Dashboard.propTypes = {
//   getCurrentProfile: PropTypes.func.isRequired,
//   deleteAccount: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   profile: PropTypes.object.isRequired,
// };

// const mapStateToProps = state => ({
//   auth: state.auth,
//   profile: state.profile
// });

// export default connect(
//   mapStateToProps,
//   { getCurrentProfile, deleteAccount }
/// )(Dashboard);

export default class LandingOrg extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get(`/api/events/${localStorage.user_id}`)
      .then(response => {
        console.log(response.data);
        var attendee_names = [];
        response.data.forEach(event => {
          attendee_names = [];
          event.attendees.forEach(attendee => {
            attendee_names.push(attendee.name);
          });
          event.attendees = attendee_names;
        });

        this.setState({ events: response.data });
      })
      .catch(e => {
        console.log(e);
      });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  onSubmit(event_id) {
    return e => {
      e.preventDefault();
      console.log(event_id);
      axios
        .patch(`/api/events/${event_id}`)
        .then(res => {
          // alert('Event Succesfully Deleted!')
        })
        .catch(e => {
          console.log(e);
        });
    };
  }

  render() {
    return (
      <div className="">
        <Navbar></Navbar>
        <br></br>
        <div className="container no-margin">
          <table className="table  table-info table-hover" style={{ tablelayout: "fixed" }}>
            <thead className="thead-light" >
              <tr>
                <th>
                  Event/Venue
                </th>
                <th >Type</th>
                <th >Capacity</th>
                <th >Registered</th>
                <th >Status</th>
                <th >Attendees</th>
                <th >Activity</th>
              </tr>
            </thead>
            {this.state.events.map(event => (
              // <div key={event._id}>
                <tbody>
                  <tr>
                    <td style={{  }}>{event.name}</td>
                    <td>Recreational</td>
                    <td style={{}}>{event.Capacity}</td>
                    <td style={{ width: "100px" }}>{event.attendees.length}</td>
                    <td style={{ width: "100px" }}> {event.status}</td>
                    <td style={{ width: "100px" }}>
                      {" "}
                      {event.attendees.join(" ")}
                    </td>
                    <td style={{ width: "100px" }}>
                      {" "}
                      <form onSubmit={this.onSubmit(event._id)}>
                        {/* <button >Cancel Event</button> */}

                        <button
                        className="btn btn-info"
                          style={{
                            height:"35px",
                            backgroundColor:"lightBlue",
                            border:"none",
                            fontSize:"1rem",
                            display:
                              event.status != "Cancelled" ? "block" : "none"
                          }}
                          onClick={() => {
                            store.addNotification({
                              title: "Deleted",
                              message: "Your Event Was Deleted Succesfully",
                              type: "success", // 'default', 'success', 'info', 'warning'
                              container: "bottom-right", // where to position the notifications
                              animationIn: ["animated", "fadeIn"], // animate.css classes that's applied
                              animationOut: ["animated", "fadeOut"], // animate.css classes that's applied
                              dismiss: {
                                duration: 3000
                              }
                            });
                          }}
                        >
                          Cancel
                        </button>
                      </form>
                    </td>
                  </tr>
                </tbody>
             
            ))}
          </table>
        </div>
      </div>
    );
  }
}
