import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
// import '../../style.css';
// import '../../css/searchbar.css'
// import '../../css/grid.css';
// import '../../css/buttons.css';
import '../../css/pay123.css';

import { link } from "fs";
import Navbar from "../layout/Navbar";

export default class PaymentPages extends Component {
    
      render() {
      
        return (
            <div>
            <Navbar></Navbar>
            <form class="credit-card">
            <div class="form-header">
              <h4 class="title" style={{textAlign:"center"}}><i class="fas fa-credit-card"></i> Payment Details</h4>
            </div>
           
            <div class="form-body">
            
              <input type="text" style={{widgth:"250px"}} className="card-number" placeholder="Card Number"/>
           
             
              <div class="date-field">
                <div class="month">
                  <select name="Month"  style={{width:"125px"}}>
                    <option value="january">January</option>
                    <option value="february">February</option>
                    <option value="march">March</option>
                    <option value="april">April</option>
                    <option value="may">May</option>
                    <option value="june">June</option>
                    <option value="july">July</option>
                    <option value="august">August</option>
                    <option value="september">September</option>
                    <option value="october">October</option>
                    <option value="november">November</option>
                    <option value="december">December</option>
                  </select>
                </div>
                <div class="year">
                  <select name="Year"  style={{width:"125px"}}>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                  </select>
                </div>
              </div>
          
              <div class="card-verification">
                <div class="cvv-input">
                  <input type="text" placeholder="CVV"/>
                </div>
                <div class="cvv-details" style={{width:"80px"}}>
                  {/* <p>3 or 4 digits usually found <br/> on the signature strip</p> */}
                </div>
              </div>
  
          <br></br>
          <center>
              <button type="submit"  style={{width:"250px", marginTop:"40px"}} class="proceed-btn"><a href="#">Proceed</a></button>
              </center>
              {/* <button type="submit" class="paypal-btn"><a href="#">Pay With</a></button> */}
            </div>
          </form>
               </div>   
        )
      }
}