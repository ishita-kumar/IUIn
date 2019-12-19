import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../style.css";
import "../../css/searchbar.css";
import "../../css/grid.css";
import "../../css/buttons.css";
import Snippet from "../../assets/snippet.png";
import Carousel from "../layout/carousel.js";
import Ishita from "../../img/Ishita.jpg";
import Kun from "../../img/Kun.jpg";
import Navbar from "../layout/Navbar";
import video1 from "../../img/vid1.gif"
import party from '../../assets/party.png'
// import pool from '../../assets/pool.png'
import ball from '../../assets/dodgeball.jpg'
import people from '../../assets/people.jpg'
import trek from '../../assets/trek.jpg'
// import  eat from '../../assets/eat.jpg'
import sport from '../../assets/sport.jpg'
import bonfire from '../../assets/bonfire.jpg'
import italy from '../../assets/italy.png'
const imgArray = [party, italy,ball,people,trek,sport,bonfire]

const Events = props => (
  <div className="small-card inline-div mx-1">
    <div className="main">
      <div className="card" style={{ border: "none" }}>
        <div  >
        <div className="card_image" style={{ width: "220px" }}>
          {" "}
          <Link to={"/edit/" + props.events._id}>
            {/* <img style={{ width: "230px", height: "250px" }} src={Snippet} />{" "} */}
            <img style={{ width: "220px", height: "250px", borderRadius:"10px" }} src={imgArray[Math.floor((Math.random() * 7) )]} />{" "}
            {/* <img style={{ width: "230px", height: "250px" }} src={props.events.picture} />{" "} */}
            <div class="card-img-overlay">
          <button
                className="btn btn-sm"
                style={{float: "right", backgroundColor: "transparent"}}
                onClick={() => {
                  axios
                    .patch(`/api/users/likeevent/${localStorage.user_id}`, {
                      event_id: props.events._id
                    })
                    .then(res => {
                      alert('Event Liked');
                    })
                    .catch(e => {
                      console.log(e);
                    });
                }}
              >
                <i class="fas fa-heart fa-lg" style={{color: "#FF1493", width:"20px", height:"20px" }}></i>
              </button>
          </div>
          </Link>
          </div>
      
        </div>
        <div
          className="card_content "
          style={{ height: "50px" }}
        >
          <h2 className="card_title" >{props.events.name} </h2>
          <div className="row">
            <p
              className="card_text "
              style={{ paddingLeft: "8rem"}}
            >
              {props.events.location} | {props.events.age}
              {/* <form onSubmit={this.onSubmitLike(props.events._id)}> */}
            
           
            </p>
            {/* <p className="card_text col-4">{props.events.location}</p>

            <p className="card_text col-4">{props.events.age}</p> */}
            {/* <button className="example_dsearch">  </button> */}
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default class SearchEvents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "music",
      location: "Bloomington",
      age: "all age",
      events: [],
      searchme: ""
    };
    //this.handlechange = this.handlechange.bind(this);
    //this.onSubmit = this.onSubmit.bind(this);
    this.searchh = this.searchh.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSubmitLike = this.onSubmitLike.bind(this);

    this.searchfilter1 = this.searchfilter1.bind(this);
    this.searchfilter2 = this.searchfilter2.bind(this);
    this.searchfilter3 = this.searchfilter3.bind(this);
  }

  componentDidMount() {
    axios
      .get("https://iuinevents.herokuapp.com/api/auth/show")
      .then(response => {
        this.setState({ events: response.data });
        // for i = 0 to n
        // if event[i]._id === 'id'
        //   event[i].picture = imagesarray[..url]
      })
      .catch(error => {
        console.log(error);
      });
  }

  searchh(e) {
    // console.log(e.target.value)
    this.setState({ searchme: e.target.value });
  }
  searchfilter1(e) {
    this.setState({ type: e.target.value });
    console.log(this.state.type);
    axios
      .put("https://iuinevents.herokuapp.com/api/auth/shows", { type: e.target.value })
      .then(response => {
        this.setState({ events: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  searchfilter2(e) {
    this.setState({ location: e.target.value });
    console.log(this.state.location);
    axios
      .put("https://iuinevents.herokuapp.com/api/auth/locations", {
        location: e.target.value
      })
      .then(response => {
        this.setState({ events: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  searchfilter3(e) {
    this.setState({ age: e.target.value });
    console.log(this.state.age);
    axios
      .put("https://iuinevents.herokuapp.com/api/auth/ages", { age: e.target.value })
      .then(response => {
        this.setState({ events: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  exerciseList() {
    return this.state.events.map(currentexercise => {
      return <Events events={currentexercise} key={currentexercise._id} />;
    });
  }

  onSubmitLike(event_id) {
    return e => {
      e.preventDefault();
      axios
        .patch(`/api/user/likeevent/${localStorage.user_id}`, {
          event_id: event_id
        })
        .then(res => {
          alert(res.body);
          console.log("wheheh");
        })
        .catch(e => {
          console.log(e);
        });
    };
  }

  onSubmit(e) {
    e.preventDefault();
    //console.log(exercise);
    console.log(this.state.searchme);
    axios
      .put("https://iuinevents.herokuapp.com/api/auth/showss", {
        searchme: this.state.searchme
      })
      .then(response => {
        this.setState({ events: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div style={{ marginTop: "-10px" , marginBottom: "20px"}}>
        <Carousel ></Carousel>
        </div>
        <div
       
        >
          <div className="row">
            <div className="col">
              <div className="row">
              <div className="container" style={{ marginTop: "4px" }}>
              <form class="search-container" onSubmit={this.onSubmit}>
                  <input
                    type="text"
                    id="search-bar"
                    value={this.state.searchme}
                    placeholder="Search for an Event Name"
                    name="searchme"
                    onChange={this.searchh}
                  ></input>
          {/* <button type="button" class="btn btn-default" style={{border:"None"}} value="Send">
    <span class="glyphicon glyphicon-search" ></span>  
  </button> */}
                </form>
                </div>
              </div>

              <div className="container  " >
                <div className="row">
                  <div class="col-2 h-50 d-inline-block" style={{backgroundColor: "#EFF9FC"}}>
                    <p style={{marginTop:"10px", textAlign:"center"}}>Search Filter</p>
                    <div class="mb-4" >
                      <select
                        class="custom-select"
                        id="inputGroupSelect01"
                        value={this.state.type}
                        style={{marginTop:"40px", marginLeft:"-5px"}}
                        name="type"
                        onChange={this.searchfilter1}
                      >
                        <option selected>Choose...</option>
                        <option value="music">Music</option>
                        <option value="sport">Sports</option>
                        <option value="sport">Movies</option>
                        <option value="sport">Food and Drinks</option>
                      </select>
                    </div>
                    <div class="mb-4">
                      <select
                        class="custom-select"
                        style={{marginTop:"40px",marginLeft:"-5px"}}
                        id="inputGroupSelect01"
                        value={this.state.type}
                        name="type"
                        onChange={this.searchfilter3}
                      >
                        <option selected>Choose...</option>
                        <option value="Bloomington">Free</option>
                        <option value="Indianapolis">Paid</option>
                      </select>
                    </div>
                    <div class="input">
                      <select
                        class="custom-select"
                        style={{marginTop:"40px", marginLeft:"-5px"}}
                        id="inputGroupSelect01"
                        value={this.state.type}
                        name="location"
                        onChange={this.searchfilter2}
                      >
                        <option selected>Choose...</option>
                        <option value="Bloomington">Bloomington</option>
                        <option value="Indianapolis">Indianapolis</option>
                      </select>
                    </div>
              <img src={video1} style={{position:"center",marginTop:"20px",width: "130px", marginBottom:"20px", height: "180px"}}>

              </img>
                  </div>
                  <div class="col-10">{this.exerciseList()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
