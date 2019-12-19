import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../css/searchbar.css";
import "../../css/buttons.css";
import "../../css/forms.css";
import Carousel2 from "../layout/carouselvenue.js";
import Snippet2 from "../../assets/snippet2.png";
import Navbar from "../layout/Navbar";
import video1 from "../../img/vid2.gif"
import party from '../../assets/party.png'
import pool from '../../assets/pool.png'
import italy from '../../assets/italy.png'

import house2 from '../../assets/house2.jpg'
import house from '../../assets/house.jpg'
import home from '../../assets/home.jpg'
import wedding from '../../assets/Wedding.png'

const imgArray = [party, pool, italy,house,house2,home,wedding]

// const ia = [
//   {
//     type: 'party',
//     img: party
//   },
//   {
//     type: 'pool',
//     img: pool
//   },
//   {
//     type: 'wedding',
//     img: italy
//   },
// ]

// const findImg = t => (
//   ia.forEach(obj => {
//     if (obj.type == t)
//       return obj.img
//   })
// )

const Venues = props => (
  <div className="small-card inline-div mx-1">
    <div className="main">
      <div className="card" style={{ border: "none" }}>
        <div className="card_image" style={{ width: "220px" }}>
          {" "}
          <Link to={"/edits/" + props.events._id}>
            <img style={{ width: "230px", height: "250px" }} src={imgArray[Math.floor((Math.random() * 6) )]} />{" "}
            {/* <img style={{ width: "230px", height: "250px" }} src={findImg(props.events.event_type)} />{" "} */}
          </Link>
        </div>
        <div
          className="card_content "
          style={{ height: "50px", fontStyle: "Clarendon Serif" }}
        >
          <h2 className="card_title" style={{}}>
            {props.events.name}{" "}
          </h2>
          <div className="row">
            <p
              className="card_text "
              style={{ paddingLeft: "10rem", fontStyle: "Clarendon Serif" }}
            >
              {props.events.location} 
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
export default class SearchVenue extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "music",
      location: "Bloomington",
      events: [],
      searchme: ""
    };
    //this.handlechange = this.handlechange.bind(this);
    //this.onSubmit = this.onSubmit.bind(this);
    this.searchh = this.searchh.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.searchfilter1 = this.searchfilter1.bind(this);
    this.searchfilter2 = this.searchfilter2.bind(this);
  }

  componentDidMount() {
    axios
      .get("https://iuinevents.herokuapp.com/api/auth/venues")
      .then(response => {
        this.setState({ events: response.data });
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
      .put("https://iuinevents.herokuapp.com/api/auth/venuestype", {
        type: e.target.value
      })
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
      .put("https://iuinevents.herokuapp.com/api/auth/veneslocation", {
        location: e.target.value
      })
      .then(response => {
        this.setState({ events: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  exerciseList() {
    return this.state.events.map(currentexercise => {
      return <Venues events={currentexercise} key={currentexercise._id} />;
    });
  } /*
  handlechange(e){
    
      console.log(e.target.value)
      this.setState({
          type: e.target.value
      })
   
    
  }
  */

  onSubmit(e) {
    e.preventDefault();
    //console.log(exercise);
       console.log(this.state.searchme)
    axios.put('https://iuinevents.herokuapp.com/api/auth/venuessearch', {searchme: this.state.searchme})
    .then(response => {
      this.setState({ events: response.data })
    })
    .catch((error) => {
      console.log(error);
    })

  }

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div >
          <div >
            <Carousel2 style={{ marginTop: "-10px" }}></Carousel2>
          </div>

          <div className="row">
            <div className="col">
              <div className="container" style={{ marginTop: "4px" }}>
                <br></br>
                <form class="search-container" onSubmit={this.onSubmit}>
                  <input
                    type="text"
                    id="search-bar"
                    value={this.state.searchme}
                    placeholder="What can I help you with today?"
                    name="searchme"
                    onChange={this.searchh}
                  ></input>
                  {/* <input
                    // type="image"
                    style={{}}
                    class="search-icon"
                    // src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"
                    value="Send"
                  > <span class="glyphicon glyphicon-search"></span></input> */}

{/* <button type="button" class="btn btn-default" style={{border:"None"}} value="Send">
    <span class="glyphicon glyphicon-search" ></span>  
  </button> */}
                </form>
              </div>

              <div className="container">
                <div className="row">
                <div class="col-2 h-50 d-inline-block" style={{backgroundColor: "#EFF9FC"}}>
                <p  style={{marginTop:"10px", textAlign:"center"}}>Search Filter</p>
                    <div className="mb-4">
                 
                        {/* <select
                          class="custom-select"
                          id="inputGroupSelect01"
                          value={this.state.type}
                          name="type"
                          onChange={this.searchfilter1}
                        >
                             <option selected>Type...</option>
                          <option value="music">Music</option>
                          <option value="sport">sport</option>
                          <option value="sport">Movies</option>
                        </select>
                       */}
                      <div class="mb-4">
                        <select
                        style={{marginTop:"20px", marginLeft:"-5px"}}
                          class="custom-select"
                          id="inputGroupSelect01"
                          value={this.state.type}
                          name="type"
                          onChange={this.searchfilter3}
                        >
                          <option selected>Location...</option>
                          <option value="Bloomington">Bloomington</option>
                          <option value="Indianapolis">Indianapolis</option>
                        </select>
                      </div>

                      <div class="mb-4 ">
                        <select
                        style={{marginLeft:"-5px"}}
                          class="custom-select"
                          id="inputGroupSelect01"
                          value={this.state.type}
                          name="location"
                          onChange={this.searchfilter1}
                        >
                          <option selected>Choose...</option>
                          <option value="Bloomington">Bloomington</option>
                          <option value="Indianapolis">Indianapolis</option>
                        </select>
                      </div>
                      <img src={video1} style={{position:"center",marginTop:"20px",width: "130px", marginBottom:"20px", height: "180px"}}/>
                    </div>
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
