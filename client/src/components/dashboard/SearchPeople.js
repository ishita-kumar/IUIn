import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../css/searchbar.css'
import '../../css/grid.css';
import Navbar from "../layout/Navbar";
import '../../css/profilegrid.css';
import ishita from '../../img/Ishita.jpg';
import Kun from '../../img/Kun.jpg';
import Jeremy from '../../img/Jeremy.jpg';
import Nayeemullah from '../../img/Nayeemullah.jpg';
const imgArray = [ishita,Nayeemullah,Jeremy,Kun]
const Events = props => (

  <div className="small-card inline-div mx-1">
    <div className="main">
      <div className="card" style={{ border: "none" }}>
        <div className="card_image" style={{ width: "220px" }}>
          {" "}
          <Link to={'/gotoprofile/'+props.events._id}>
            <img style={{ width: "230px", height: "250px" }} src={imgArray[Math.floor((Math.random() * 2) )]} />{" "}
            {/* <img style={{ width: "230px", height: "250px" }} src={findImg(props.events.event_type)} />{" "} */}
          </Link>
        </div>
        <div
          className="card_content "
          style={{ height: "50px", fontStyle: "Clarendon Serif" }}
        >
          <h2 className="card_title" style={{}}>
          {props.events.name}
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

  // <tr>
  //   <td>{props.events.name}</td>
  //   <td>{props.events.email}</td>

  // <div class ="small-card inline-div mx-5">
  // <div class="main">



 
)
export default class SearchPeople extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
        
        events: [],
        searchme:''
        };
        //this.handlechange = this.handlechange.bind(this);
        //this.onSubmit = this.onSubmit.bind(this);
        this.searchh =this.searchh.bind(this);
        this.onSubmit =this.onSubmit.bind(this);
       

    
  }

  componentDidMount() {
    axios.get('https://iuinevents.herokuapp.com/api/auth/people')
      .then(response => {
        this.setState({ events: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }
 
 searchh(e){
    // console.log(e.target.value)
   this.setState({searchme: e.target.value})
 }
 


 
  exerciseList() {
    return this.state.events.map(currentexercise => {
      return <Events events={currentexercise} key={currentexercise._id}/>;
    })
  }/*
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
    axios.put('https://iuinevents.herokuapp.com/api/auth/peoplesearch', {searchme: this.state.searchme})
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
             <div style={{padding:"20px"}}>
            <form class="search-container" onSubmit ={this.onSubmit}>
    <input type="text" id="search-bar" value={this.state.searchme}  placeholder="Search for a User" name='searchme' onChange ={this.searchh}></input>
    <input type="image" class="search-icon"  src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png" value='Send'></input>
  </form>
  
      <div class = "container">
      { this.exerciseList() }
      </div>
      </div>
      </div>
     
    )
  }
}
