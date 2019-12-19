import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../../css/buttons.css';
import '../../css/mockup.css';
import '../../css/landing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from  '@fortawesome/free-brands-svg-icons';
import { faFacebook } from  '@fortawesome/free-brands-svg-icons';
import { faInstagram } from  '@fortawesome/free-brands-svg-icons';
import { faTwitter } from  '@fortawesome/free-brands-svg-icons';
import ishita from '../../img/Ishita.jpg';
import Kun from '../../img/Kun.jpg';
import Jeremy from '../../img/Jeremy.jpg';
import Nayeemullah from '../../img/Nayeemullah.jpg';
import { store } from 'react-notifications-component';

import 'react-notifications-component/dist/theme.css';
import 'animate.css'
// import Parallax from 'react-simple-parallax';

const Landing = ({ isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type_of_user: "",
    message: ""
  });
  if (isAuthenticated) {
    return <Redirect to='/landingpage' />;
  }
  const { name, email, type_of_user, message } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    // console.log('SUCCESS');
    // console.log({type_of_user, name })
    console.log(formData);
    Landing({ name, email, type_of_user, message });
  };
  return (
 
        
    <section style={{padding:"0px"}}>
     
     
      {/* <button
        onClick={() => {
          store.addNotification({
            title: 'Dropbox',
            message: 'Files were synced',
            type: 'Warning',                         // 'default', 'success', 'info', 'warning'
            container: 'bottom-right',                // where to position the notifications
            animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
            animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
            dismiss: {
              duration: 3000 
            }
          })
        }}
      >
        Add notification
      </button> */}
  
      {/* <div className='dark-overlay'>
        <div className='landing-inner'>
        <div className="row">
          
            <div  className='example_d'>
            <Link to='/register'>
              Sign Up
            </Link>
          
          </div>
       
<div className='example_d'> 
            <Link to='/login' >
              Login
            </Link>
            </div>
            </div>
</div>
        </div> */}
        
        <div id="parallax-world-of-ugg">
  
 
  
  <section>
      <div class="parallax-one">
        <h2 style={{color:"black"}}>We're In, Are you?</h2>
         <div className= "row">
        <div  className='example_d'style={{textAlign:"center", backgroundColor:"lightblue"}}>
            <Link to='/register' >
              Sign Up
            </Link>
          
          </div>
       
<div className='example_q'style={{textAlign:"center", backgroundColor:"lightblue"}}>  
            <Link to='/login' >
              Login
            </Link>
            </div>
            </div>
      </div>
  </section>
  
  <section>
    <div >
      {/* <p><span class="first-character sc">I</span>Engage: </p> */} </div>
      <h2 style={{color:"black", marginTop:"20px"}}>Our Mission</h2>
<div class="container ">

  <div class="row">
    <article class="col-xs-4">
      <div class="cards1"><span class="glyphicon glyphicon-heart-empty icon"></span>
        <hr class="divider1"/>
        <h2 class="title1">Engage</h2>
        <div class="info1">
          <hr class="divider1"/>
          <p class="lead">Social interactions make us happier and increasing our social circle means that we're talking more and meeting different, interesting people, which hopefully means we're learning more, too. We offer a comfortable environment to  Find like minded people and Build a community</p>
        </div>
      </div>
    </article>
    <article class="col-xs-4">
      <div class="cards1"><span class="glyphicon glyphicon-globe icon"></span>
        <hr class="divider1"/>
        <h2 class="title1" style={{fontSize:"6.5rem"}} >Explore</h2>
        <div class="info1">
          <hr class="divider1"/>
          <p class="lead">You can stay in your little corner of the world, or you can experience millions of other ways to live. Truly authentic and unique experiences can open your mind to life’s endless possibilities. We thrive to find the best of the best right at your fingertips. ALl thats left to do is dive in.</p>
        </div>
      </div>
    </article>
    <article class="col-xs-4">
 
      <div class="cards1"><span class="glyphicon glyphicon-ok-sign icon"></span>
        <hr class="divider1"/>
        <h2 class="title1">Enable</h2>
        <div class="info1">
          <hr class="divider1"/>
          <p class="lead">No matter what kind of space you have or activities you'd like to offer,We cater to all your needs.  Earn while leading people on activities you love or simply list your space. We offer a secure space for you to be in f full control of your availability, prices, house rules, and how you interact with guests.  </p>
        </div>
      </div>
    </article>
  </div>
</div>
</section>
 
  
  <section>
    <div class="parallax-two">
      <h2>Find Your Kind</h2>
    </div>



  </section>
  
  <section>
    <div >
    <h2 style={{color:"black"}}>Our Team</h2>
      <p><span class="first-character ny"></span></p>
      {/* <p class="line-break margin-top-10"></p> */}
      <p class="margin-top-10">  
      <div class="col-xl-3 col-sm-6 mb-5" style={{marginLeft:"150px",width:"250px",height:"150px" }}>
        <div class="bg-white rounded shadow-sm py-5 px-4" style={{borderRadius:"10px",border:"#17a2b8 solid 4px"}}><img src={Kun}  alt="" style={{marginLeft:"50px",backgroundColor:"#17a2b8 ",width:"100px",height:"100px" }} class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 class="mb-0"  style={{textAlign:"center" }}>Kun Wang</h5><span class="small text-uppercase text-muted"style={{marginLeft:"50px" }}>CEO - Founder</span>
          <ul class="social mb-0 list-inline mt-3">
            <li class="list-inline-item"><a href="#" class="social-link"><FontAwesomeIcon icon={faLinkedin} /></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><FontAwesomeIcon icon={faFacebook} /></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><FontAwesomeIcon icon={faInstagram} /></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><FontAwesomeIcon icon={faTwitter} /></a></li>
          </ul>
        </div>
      </div>

      <div class="col-xl-3 col-sm-6 mb-5" style={{width:"250px",height:"150px" }}>
        <div class="bg-white rounded shadow-sm py-5 px-4" style={{border:"#17a2b8 solid 4px"}}><img src={ishita}  alt="" style={{backgroundColor:"#17a2b8 ",marginLeft:"50px",width:"100px",height:"100px" }}class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 class="mb-0"style={{textAlign:"center" }}>Ishita Kumar</h5><span class="small text-uppercase text-muted" style={{marginLeft:"50px" }}>CEO - Founder</span>
          <ul class="social mb-0 list-inline mt-3">
            <li class="list-inline-item"><a href="#" class="social-link"><FontAwesomeIcon icon={faLinkedin} /></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><FontAwesomeIcon icon={faFacebook} /></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><FontAwesomeIcon icon={faInstagram} /></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><FontAwesomeIcon icon={faTwitter} /></a></li>
          </ul>
        </div>
      </div>


      <div class="col-xl-3 col-sm-6 mb-5" style={{width:"250px",height:"150px" }}>
        <div class="bg-white rounded shadow-sm py-5 px-4" style={{border:"#17a2b8 solid 4px"}}><img src={Jeremy}  alt=""  style={{backgroundColor:"#17a2b8 ",marginLeft:"50px",width:"100px",height:"100px" }} class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 class="mb-0" style={{textAlign:"center" }} >Jeremy Sullivan</h5><span class="small text-uppercase text-muted" style={{marginLeft:"50px" }}>CEO - Founder</span>
          <ul class="social mb-0 list-inline mt-3">
            <li class="list-inline-item"><a href="#" class="social-link"><FontAwesomeIcon icon={faLinkedin} /></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><FontAwesomeIcon icon={faFacebook} /></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><FontAwesomeIcon icon={faInstagram} /></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><FontAwesomeIcon icon={faTwitter} /></a></li>
          </ul>
        </div>
      </div>

      <div class="col-xl-3 col-sm-6 mb-5" style={{width:"250px",height:"150px" }}>
        <div class="bg-white rounded shadow-sm py-5 px-4"style={{border:"#17a2b8 solid 4px"}}><img src={Nayeemullah}  alt=""  style={{backgroundColor:"#17a2b8 ",marginLeft:"50px",width:"100px",height:"100px" }} class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 class="mb-0" style={{textAlign:"center" }}>Nayeem</h5><span class="small text-uppercase text-muted" style={{marginLeft:"50px" }}>CEO - Founder</span>
          <ul class="social mb-0 list-inline mt-3">
            <li class="list-inline-item" ><a href="#" class="social-link"><FontAwesomeIcon icon={faLinkedin} /></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><FontAwesomeIcon icon={faFacebook} /></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><FontAwesomeIcon icon={faInstagram} /></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><FontAwesomeIcon icon={faTwitter} /></a></li>
          </ul>
        </div>
      </div>
     </p>


     
    </div>
  </section>
  
  <section>
    <div class="parallax-three">
      <h2>Unique Experiences</h2>
    </div>
  </section>
  
  <section>
    <div class="block">
     <p>Are You In is a website that allows you to discover the best in events travel and food in Bloomington and nearby Indianapolis area. We strive to curate experiences that are worth your time and money , possibly something you’ve never tried before. We help you meet new people from your neighborhood, gather for brunches and book clubs.
Use our search tools to fin new friends. You can also publicly query for event of your liking and find people to hang out with, in this unsocial age, you can find your kind with the click of a button. The approach tends to the needs of venue owners looking to rent out their property, hosts looking to hold experiences and students looking to network or socialize.
</p>
      <p class="line-break margin-top-10"></p>
   <p style={{textAlign:"center", marginTop:"20px", fontSize:"20px"}}>For Any queries that you might have, feel free to get in touch with us!</p>
      <div className='formslayout2-inner'>
  <div>
  
  <div class="register" style={{ marginTop:"20px",marginLeft:"50px"}}> 
<div class="formulaire"  >
  
      <form onSubmit={e => onSubmit(e)} >

{/* <p className='l arge text-primary' style={{textAlign:"center", color:"black"}}>Have any questions? We'll get back to you!</p> */}

      <input
  
        type='name'
        style={{ height: "35px", widht: "90%" }}
        placeholder='Name'
        name='name'
        value={name}
        onChange={e => onChange(e)}
      />
  
      <input
        type='email'
        style={{ height: "35px", widht: "90%" , border:"none"}}
        placeholder='Email Address'
        name='email'
        value={email}
        onChange={e => onChange(e)}
      />

      <input
        type='type_of_user'
        style={{ height: "35px", widht: "90%" }}
        placeholder='Attendee or Organizer'
        name='type_ofuser'
        value={type_of_user}
        onChange={e => onChange(e)}
      />

      <input
        type='message'
        style={{ height: "35px", widht: "90%" }}
        placeholder='Leave your Message Here  '
        name='message'
        value={message}
        onChange={e => onChange(e)}
        style={{height:"60px"}}
      />
   
    <input type='submit' className='bouton' value='Submit' width='50%' style={{ border:"none", marginBottom:"20px", background:"lightblue"}}/>

      </form>
      </div>
		  </div>
</div>
</div>
    </div>
 </section>


  </div>
  <footer class="page-footer font-small unique-color-dark">



<div class="container text-center text-md-left mt-5">

  
  <div class="row mt-3">


    <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">


      <h6 class="text-uppercase font-weight-bold font-color white" style={{color:"white"}}>Are You In</h6>
      <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
      <p style={{color:"white"}}>Made for the P-505 Software Engineering Project Class Project.</p>

    </div>


    

    
    <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">


      <h6 style={{color:"white"}}class="text-uppercase font-weight-bold">Useful links</h6>
      <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
      <p style={{color:"white"}}>
        <a style={{color:"white"}} href="/terms">Policies</a>
      </p>
      <p>
        <a  style={{color:"white"}} href="/faqs">FAQ's</a>
      </p>
      <p>
        <a  style={{color:"white"}} href="/login">Login</a>
      </p>
      <p>
        <a  style={{color:"white"}} href="/register">Register</a>
      </p>

    </div>


    
    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

      
      <h6 style={{color:"white"}}class="text-uppercase font-weight-bold">Contact</h6>
      <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
      < p style={{color:"white"}}>
        <i style={{color:"white"}} class="fas fa-home mr-3"></i> Luddy Hall, 700 N Woodlawn Ave , Bloomington IN</p>
      <p style={{color:"white"}}>
        <i style={{color:"white"}}class="fas fa-envelope mr-3"></i> iuin@gmail.com</p>
      <p style={{color:"white"}}>
        <i style={{color:"white"}}class="fas fa-phone mr-3"></i> +1 812 369 3488</p>
    

    </div>
    

  </div>


</div>



</footer>

    </section > 
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
