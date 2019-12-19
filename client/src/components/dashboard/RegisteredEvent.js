import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../style.css';
import '../../css/searchbar.css'
import '../../css/grid.css';
import '../../css/buttons.css';
import "../../css/forms.css";
import Carousel2 from "../layout/carouselvenue.js";
import Snippet2 from '../../assets/snippet2.png';
import party from '../../assets/party.png'
import people from '../../assets/people.jpg'
// import party from '../../assets/party.png'
import "../../css/grid.css";
import Snippet from '../../assets/snippet.png';
import  Carousel from "../layout/carousel.js";


import Navbar from "../layout/Navbar";
const imgArray = [people,party]
const Events = props => (
  <div className="small-card inline-div mx-1">
    <div className="main">
      <div className="card" style={{border: "none" }}>
        <div className="card_image" style={{ width: "230px" }}>
          {" "}
          <Link to={"/edit/" + props.events._id}>
            <img
              style={{ width: "230px", height: "250px" }}
              src={imgArray[Math.floor((Math.random() * 2) )]}
            />{" "}
          </Link>
        </div>
        <div className="card_content " style={{ height: "50px", fontStyle:"Clarendon Serif"}}>
          <h2 className="card_title">{props.events.name} </h2>
          <div className="row">
            <p className="card_text " style={{paddingLeft:"8rem", fontStyle:"Clarendon Serif"}}>
             {props.events.location}     |     {props.events.age}
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
const Venues = props => (

  <div className="small-card inline-div mx-1">
      <div className="main">
        <div className="card" style={{border: "none" }}>
          <div className="card_image" style={{ width: "230px" }}>
            {" "}
            <Link to={"/edits/" + props.venue._id}>
              <img
                style={{ width: "230px", height: "250px" }}
                src={Snippet2}
              />{" "}
            </Link>
          </div>
          <div className="card_content " style={{ height: "50px"}}>
            <h2 className="card_title">{props.venue.name} </h2>
            <div className="row">
              <p className="card_text " style={{paddingLeft:"8rem"}}>
              90%  <i class="fas fa-heart fa-lg" style={{color:"#FF1493"}}> </i> | {props.venue.location}     |     {props.venue.age}
              </p>
              {/* <p className="card_text col-4">{props.venue.location}</p>
  
              <p className="card_text col-4">{props.venue.age}</p> */}
              {/* <button className="example_dsearch">  </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  
  
  );
export default class RegisteredEvent extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
        events: [],
        activitynames:[],
        venuenames:[],
        venue:[]
        };
  }

  componentDidMount() {
    console.log(this.props.match.params.id)
    
    axios.get('https://iuinevents.herokuapp.com/api/auth/regievent/'+ this.props.match.params.id)
      .then(response => {
        axios.put('https://iuinevents.herokuapp.com/api/auth/getevent',{activitynames:response.data[0].activityname})
        .then(respons=>{
          this.setState({
            events: respons.data
          })
        })
        axios.put('https://iuinevents.herokuapp.com/api/auth/getvenue',{venuenames:response.data[0].venuename})
        .then(response=>{
          this.setState({
            venue: response.data
          })
        })
      })
      .catch((error) => {
        console.log(error);
      })
    
  }
  exerciseList() {
    console.log(this.state.events)
    return this.state.events.map(currentexercise => {
      return <Events events={currentexercise} key={currentexercise._id}/>;
    })
  }
  exerciseLists() {
    console.log(this.state.venue)
    return this.state.venue.map(currentexercise => {
      return <Venues venue={currentexercise} key={currentexercise._id}/>;
    })
  }
  
  render() {
    return (     
      <div>
      <Navbar></Navbar>   
        <div class='container'>
          <h2 style={{textAlign:"center"}}>Events</h2>
          
{ this.exerciseList() }
<h2  style={{textAlign:"center"}}>Venues</h2>
{this.exerciseLists()}
<button class="" style={{textDecoration:"none "}} href="#" ><Link to={'/cancel/'+ this.props.match.params.id}>Cancel your event</Link></button>

        </div>
     
        </div>
     
     
    )
  }
}
