import React from 'react'
import '../../css/faq.css'
import Navbar from '../layout/Navbar'
// import '../../css/Navbar'

export default function faq() {
    return (
        
        <div  >
            <Navbar></Navbar>
            <div className="container">
        
            <div class="jumbotron jumbotron-fluid" style={{backgroundColor: "lightBlue" }}>
  <div class="container">
  <div class="faq-header display-4 " style={{textAlign: "center" }} ><strong>Frequently Asked Questions</strong></div>
    {/* <p class="lead">You Can find all your answers here!.</p> */}
  </div>
</div>
          

<div class="faq-content">
  <div class="faq-question">
    <input id="q1" style={{visibility: "hidden"}} type="checkbox" class="panel"/>
    
    <div class="plus"><i class="fas fa-xs fa-lightbulb" style={{color: "lightBlue"}} ></i></div>
    <label for="q1" class="panel-title">Do I need to register to book tickets?</label>
    <div class="panel-content">Although registering is not a compulsion, we would suggest you to register on our website/application, since it would allow you to access your booking history and manage it!

</div>
  </div>
  
  <div class="faq-question">
    <input id="q2" style={{visibility: "hidden"}}  type="checkbox" class="panel"/>
    <div class="plus"><i class="fas fa-xs fa-lightbulb" style={{color: "lightBlue"}} ></i></div>
    <label for="q2" class="panel-title">Benefits of Registration</label>
    <div class="panel-content">Of course! There are benefits to register with AreYouIn. You could keep a track of all your bookings under the Purchase History Section</div>
  </div>
  
  <div class="faq-question">
    <input id="q3" style={{visibility: "hidden"}}  type="checkbox" class="panel"/>
    <div class="plus"><i class="fas fa-xs fa-lightbulb" style={{color: "lightBlue"}} ></i></div>
    <label for="q3" class="panel-title">
Usage of cookies</label>
    <div class="panel-content">As of now we do not use cookies. You are in safe hands!</div>
  </div>

  <div class="faq-question">
    <input id="q4" style={{visibility: "hidden"}}  type="checkbox" class="panel"/>
    <div class="plus"><i class="fas fa-xs fa-lightbulb" style={{color: "lightBlue"}} ></i></div>
    <label for="q4" class="panel-title">
    Refund for a failed transaction</label>
    <div class="panel-content">Don't you worry! We are right here to sort it for you. The amount charged for the unsuccessful transaction is refunded from our end within 2 hours and should reflect in your account if transacted through UPI within 3 to 4 working days.

</div>
  </div>
  <div class="faq-question">
 <input id="q5" style={{visibility: "hidden"}} type="checkbox" class="panel"/>
 <div class="plus"><i class="fas fa-xs fa-lightbulb" style={{color: "lightBlue"}} ></i></div>
 <label for="q5" class="panel-title">
 Cancellation of A Ticket</label>
 <div class="panel-content">e do have quite a few cinemas who now have a cancellation feature available. If you have booked tickets for a cinema that has the cancellation feature, you shall be able to see it in your booking under ‘Purchase History’ click on 'Cancellation' in your profile. 

</div>
</div>
<div class="faq-question">
 <input id="q6" style={{visibility: "hidden"}}  type="checkbox" class="panel"/>
 <div class="plus"><i class="fas fa-xs fa-lightbulb" style={{color: "lightBlue"}} ></i></div>
 <label for="q6" class="panel-title">
Sold out</label>
 <div class="panel-content">It seems to be a house full at the opted event. Grab your tickets by booking for another event or simply add yourself to the waitlist for the event. The show must go on! 

</div>
</div>

<div class="faq-question">
 <input id="q7" style={{visibility: "hidden"}} type="checkbox" class="panel"/>
 <div class="plus"><i class="fas fa-xs fa-lightbulb" style={{color: "lightBlue"}} ></i></div>
 <label for="q7" class="panel-title">
 Connectivity/Something is not right here while booking</label>
 <div class="panel-content">We see network glitch has crossed your path and interrupted the excitement. This may take a while to get fixed, we urge you to book your tickets another time!

</div>
</div>

<div class="faq-question">
 <input id="q8" style={{visibility: "hidden"}}  type="checkbox" class="panel"/>
 <div class="plus"><i class="fas fa-xs fa-lightbulb" style={{color: "lightBlue"}} ></i></div>
 <label for="q8" class="panel-title">
 Age Limit</label>
 <div class="panel-content">What is the age limit for children to buy a ticket? We urge you to check each page's Event Description in order to check that out!

</div>
</div>
</div>
        </div>
        </div>
// 
    )
}
