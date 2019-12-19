import React, { Component} from 'react';
import { Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import '../../css/payment.css';

import { link } from 'fs';
import Navbar from '../layout/Navbar';

export default class PaymentWait extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
       email:'',
       activityname:'',
       reditto:false,
       showmessage:true,
        };
        //this.handlechange = this.handlechange.bind(this);
        //this.onSubmit = this.onSubmit.bind(this);
        this.searchh =this.searchh.bind(this);
        this.onSubmit =this.onSubmit.bind(this);
        

    
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
 
 searchh(e){
    // console.log(e.target.value)
   this.setState({email: e.target.value})
  
 }
  onSubmit(e) {
    e.preventDefault();
    //console.log(exercise);
       console.log(this.props.match.params.id)
      //  alert(this.state.activityname)
    axios.post('https://iuinevents.herokuapp.com/api/auth/getintowaitlist', {email: this.state.email,
   activityname :this.state.activityname})
    .then(response => {
       console.log(response.data)
    });
    axios.post('https://iuinevents.herokuapp.com/api/auth/getwait', {email: this.state.email,
    activityname :this.state.activityname})
     .then(response => {
        console.log(response.data)
     });
     this.setState({
      showmessage:false,
      reditto: true
  })
  }
  
  render() {
    if( this.state.reditto === true){
        return  <Redirect to={'/waitconfirm/'+this.props.match.params.id} /> 
       }
    return (
     
        <div>
           <Navbar></Navbar>  
         {/* <form onSubmit ={this.onSubmit}>   
          
    <input type="text" id="search-bar" value={this.state.email}  placeholder="email" name='email' onChange ={this.searchh}></input>
    <input type='submit' className='bouton' value='submit'/>
   
   
 </form> */}
 <div class="container">
<div class="row">

<div class="col-xs-12 col-md-4">


<div class="panel panel-default credit-card-box">
<div class="panel-heading display-table" >
<div class="row display-tr" >
<h3 class="panel-title display-td" >Payment Details</h3>
<div class="display-td" >                            
<img class="img-responsive pull-right" src="http://i76.imgup.net/accepted_c22e0.png"/>

</div>                    
</div>
<div class="panel-body">
<form role="form" id="payment-form"  onSubmit ={this.onSubmit}>
<div class="row">
<div class="col-xs-12">
<div class="form-group">
<label for="cardNumber">CONFIRM EMAIL ADDRESS</label>
<input type="text" class="form-control"  value={this.state.email}  placeholder="E-MAIL" name='email' onChange ={this.searchh}></input>
<label for="cardNumber">CARD NUMBER</label>
<div class="input-group">
<input 
type="tel"
class="form-control"
name="cardNumber"
placeholder="Valid Card Number"
autocomplete="cc-number"
required autofocus 
/>
{/* <span class="input-group-addon"><i class="fa fa-credit-card"></i></span> */}
</div>
</div>                            
</div>
</div>
<div class="row">
<div class="col-xs-7 col-md-7">
<div class="form-group">
<label for="cardExpiry"><span class="hidden-xs">EXPIRATION</span><span class="visible-xs-inline">EXP</span> DATE</label>
<input 
type="tel" 
class="form-control" 
name="cardExpiry"
placeholder="MM / YY"
autocomplete="cc-exp"
required 
/>
</div>
</div>
<div class="col-xs-5 col-md-5 pull-right">
<div class="form-group">
<label for="cardCVC">CV CODE</label>
<input 
type="tel" 
class="form-control"
name="cardCVC"
placeholder="CVC"
autocomplete="cc-csc"
required
/>
</div>
</div>
</div>
<div class="row">
<div class="col-xs-12">
<div class="form-group">
<label for="couponCode">COUPON CODE</label>
<input type="text" class="form-control" name="couponCode" />
</div>
</div>                        
</div>
<div class="row">
<div class="col-xs-12">
< input type='submit' className='bouton' value='submit' type="submit"/>
</div>
</div>
{/* <div class="row">
<div class="col-xs-12">
 <p class="payment-errors"></p>
</div>
</div> */}
</form>
</div>
</div>            



</div>            



</div>
</div>

      </div>
      <p hidden ={this.state.showmessage}>you are in the waiting list </p>
      </div>
    
    
     
    )
  }
}
