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
import "../../css/grid.css";
import people from '../../assets/people.jpg'
import party from '../../assets/party.png'

import Snippet from '../../assets/snippet.png';
import Carousel from "../layout/carousel.js";
import Navbar from '../layout/Navbar';
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
           | {props.events.location}     |     {props.events.age}
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

export default class Waitinglistevent extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
        events: [],
        activitynames:[]
        };
  }

  componentDidMount() {
    console.log(this.props.match.params.id)
    
    axios.get('https://iuinevents.herokuapp.com/api/auth/regievent/'+ this.props.match.params.id)
      .then(response => {
        axios.put('https://iuinevents.herokuapp.com/api/auth/getwaitl',{activitynames:response.data[0].Waitinglistevent})
        .then(respons=>{
          this.setState({
            events: respons.data
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
  
  
  render() {
    return (  
      <div>   
        <Navbar></Navbar>   
        <br></br> 
        <div class='container no-margin'>
{ this.exerciseList() }

        </div>
        </div>
    
     
     
    )
  }
}
