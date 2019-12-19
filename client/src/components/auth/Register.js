import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link ,Redirect} from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import ReCAPTCHA from 'react-google-recaptcha';
import '../../css/forms.css';
import '../../css/register.css'
const Register = ({ setAlert,register,isAuthenticated}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    type_of_user: 'Attendee',
    question1:'',
    answer1:'',
    question2:'',
    answer2:''
  });

  const { name, email, password, password2, type_of_user,question1,answer1,question2,answer2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const recaptchaRef = React.createRef();
  const onloadCallback = function() {
    recaptchaRef.render('html_element', {
        'sitekey' : '6Lev0rsUAAAAADYGVKiWUXrnCVAMmvzIL-lJ_7PM'
  })};

  const onSubmit = async e => {
    e.preventDefault();
    const recaptchaValue = recaptchaRef.current.getValue();

    const errors = {};

    if (!recaptchaValue) {
      setAlert('Please validate the captcha.', 'danger');
      return errors;
    }

    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      // console.log('SUCCESS');
      // console.log({type_of_user, name })
      console.log(formData)
      register({ name, email, password, type_of_user,question1,answer1,question2,answer2  });
    }
  };

  if (isAuthenticated) {
    if (localStorage.type_of_user === 'Organizer') {
      return <Redirect to='/dashboardOrg' />;
    }
     else
      {
        console.log(localStorage.type_of_user)
        return <Redirect to='/landingpage' />;
      }
    }
  

  return (
    <Fragment>
 <section className ="formslayout" >

  <div className='formslayout-inner'>
       <div class="page">
  <div class="register"> 
<div class="formulaire">
<h2 class="text-center" style={{color:"black"}}  >Register Now!</h2>


      <form onSubmit={e => onSubmit(e)}>
     
          <input
            type='text'
            style={{height: "35px", border:"none" , marginBottom:"10px"}}
           
            placeholder='Name'
            name='name'
            value={name}
            onChange={e => onChange(e)}
          />
    
      
          <input
            type='email'
            style={{ height: "35px",border:"none", marginBottom:"10px" }}
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={e => onChange(e)}
          />

    
          <input
            type='password'
            style={{ height: "35px",border:"none",marginBottom:"10px" }}
            placeholder='Password'
            name='password'
            value={password}
            onChange={e => onChange(e)}
          />
     
       
          <input
            type='password'
            style={{ height: "35px",border:"none", marginBottom:"10px" }}
            placeholder='Confirm Password'
            name='password2'
            value={password2}
            onChange={e => onChange(e)}
          />

        <select value={type_of_user} className='input2'  style={{textAlign:"center",border:"none", height: "35px", marginBottom:"10px" }} name='type_of_user' onChange={e => onChange(e)}>
          <option value='Attendee'>Attendee</option>
          <option value='Organizer'>Organizer</option>
        </select>
       
        {/* <legend><span class="number">2</span>Security Questions</legend> */}
        <select value={question1} className='input2'style={{ border:"none",height: "35px", marginBottom:"10px" }} name='question1' onChange={e => onChange(e)}>
        <option value='0'>Select Security Question</option>
          <option value='Your First Pets Name'>Your First Pets Name</option>
          <option value='Your Fathers first Name'>Your Fathers first Name</option>
          <option value='Your Mothers Maiden Name'>Your Mothers Maiden Name</option>
          <option value='Your High Schools Name'>Your High Schools Name</option>
          <option value='The City you were Born in'>The City you were Born in</option>
          
        </select>
       
          <input
            type='answer1'
            style={{ height: "35px", widht: "90%" }}
            placeholder='Enter Answer Here'
            name='answer1'
            value={answer1}
            onChange={e => onChange(e)}
          />
{/*       
        <select value={question2} className='input2' name='question2' onChange={e => onChange(e)}>
        <option value='0'>Select Security Question</option>
        <option value='Your First Pets Name'>Your First Pets Name</option>
          <option value='Your Fathers first Name'>Your Fathers first Name</option>
          <option value='Your Mothers Maiden Name'>Your Mothers Maiden Name</option>
          <option value='Your High Schools Name'>Your High Schools Name</option>
          <option value='The City you were Born in'>The City you were Born in</option>
          
        </select> */}
      
          {/* <input
            type='answer2'
            placeholder='Enter Answer Here'
            name='answer2'
            value={answer2}
            onChange={e => onChange(e)}
          /> */}
      
        {/* <br /> */}
    
        <ReCAPTCHA 
        
        class="someclass"
        ref={recaptchaRef}
        sitekey="6Lev0rsUAAAAADYGVKiWUXrnCVAMmvzIL-lJ_7PM"
        onChange={onloadCallback}
      />


        <input type='submit' style={{
                     height: "35px",
                     marginTop:"20px",
                     width: "30%",
                     backgroundColor: "#17a2b8",
                     fontSize:"1.2rem",
                     color:"black"}} value='Register' />
        {/* <input type='submit' className='button1' value='Register' /> */}
        <p className='forgot'  style={{
                      color:"black"}}>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
    
  </form>
  </div>
  </div>
  </div>
  </div>
</section>

    </Fragment>
   
  );
};


Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { setAlert ,register}
)(Register);