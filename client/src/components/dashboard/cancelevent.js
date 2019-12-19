import React, { Component} from 'react';
import { Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import DashboardActions from "./DashboardActions";
// import '../../style.css';
// import '../../css/searchbar.css'
// import '../../css/grid.css';
// import '../../css/buttons.css';
import '../../css/payment.css';

import { link } from 'fs';
import Navbar from '../layout/Navbar';

export default class cancelevent extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
       email:'',
       capacity:1,
       activityname:'',
       reditto:false,
       showmessage:true,
       firstperson:[]
        };
        //this.handlechange = this.handlechange.bind(this);
        //this.onSubmit = this.onSubmit.bind(this);
        this.searchh =this.searchh.bind(this);
        this.onSubmit =this.onSubmit.bind(this);
        this.changeac = this.changeac.bind(this);
        

    
  }

  
 
 searchh(e){
    // console.log(e.target.value)
   this.setState({email: e.target.value})
  
 }
 changeac(e){
  // console.log(e.target.value)
 this.setState({activityname: e.target.value})

}
  onSubmit(e) {
    e.preventDefault();
    //console.log(exercise);
       console.log(this.state.email)
    axios.post('https://iuinevents.herokuapp.com/api/auth/cancel', {email: this.state.email,
   activityname :this.state.activityname})
    .then(response => {
       console.log(response.data)
       this.setState({
           reditto: true,
           showmessage:false
       })
    });
    axios.post('https://iuinevents.herokuapp.com/api/auth/capacity1',{capacity: this.state.capacity +1,activityname:this.state.activityname})
    .then(response => {
     console.log(response.data);
     
    })
    .catch((error) => {
      console.log(error);
    });
    console.log(this.state.firstperson[0])
    if(this.state.firstperson != ''){
   axios.post('https://iuinevents.herokuapp.com/api/auth/postemail', {firstperson: this.state.firstperson[0],
   activityname :this.state.activityname})
    .then(response => {
       console.log(response.data)
       this.setState({
           reditto: true,
           showmessage:false
       })
    });
    axios.post('https://iuinevents.herokuapp.com/api/auth/droppeople', {
    activityname :this.state.activityname})
     .then(response => {
        console.log(response.data)
     });
    }
  }
  
  render() {
     
    return (
    
      <div style={{backgroundColor:"lightblue"}}>
          <Navbar></Navbar>
          <div className="container" style={{marginLeft:"300px" }}>
        <h1 style={{textAlign:"center"}} >Please enter your email </h1>
     <form onSubmit ={this.onSubmit}> 
      <input type='text' value={this.state.email} placeholder='email' onChange ={this.searchh}></input>
      <hr></hr>
     
      <input type='text' value={this.state.activityname} placeholder='activityname' onChange ={this.changeac}></input>
      <hr></hr>
      <input type='submit' className='bouton' value='confirm' ></input> 
     
     </form>   
    
     <p hidden ={this.state.showmessage}>You will recieve a cancel confimation email, please check your mail box </p>
     </div>
     </div>
    )
  }
}