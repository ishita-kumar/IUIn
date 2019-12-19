import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../style.css';
import '../../css/searchbar.css'
import '../../css/grid.css';
import '../../css/buttons.css';
import Navbar from "../layout/Navbar";
export default class WaitingConfirm extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
       activityname:'',
        };
        

    
  }

  componentDidMount() {
    console.log(this.props.match.params.id)
axios.get('https://iuinevents.herokuapp.com/api/auth/confirmations/'+this.props.match.params.id)
 .then(response => {
   this.setState({ 
     activityname : response.data[0].name,
   })
 })
 .catch((error) => {
   console.log(error);
 })
}
 
 
  
  render() {
    return (
        <div>
            <Navbar></Navbar>
        <h1>You have in the waiting list of the event{this.state.activityname} successfully</h1>    
        
      </div>
    
    
     
    )
  }
}
