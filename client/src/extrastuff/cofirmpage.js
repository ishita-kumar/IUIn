import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link ,Redirect} from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';

import '../../css/forms.css';
const Register = ({ setAlert,register,isAuthenticated}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phonenumber:'',
    modeofpayment: '',
    cardnumber: '',
    CVV:'',
    DateOfExpiry:''
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
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
 <section className ="formslayout">

  <div className='formslayout-inner'>
       <div class="page">
  <div class="register"> 
<div class="formulaire">
<h1 class="text-center">Register Now!</h1>
{/* <h1>Register Here</h1> */}
{/* <h1>Register Now</h1> */}
          {/* <legend><span class="number">1</span>Your Basic Info</legend> */}
  
        {/* <div className='login-container'> */}
      <form onSubmit={e => onSubmit(e)}>
     
          <input
            type='text'
            className='input2'
            placeholder='Name'
            name='name'
            value={name}
            onChange={e => onChange(e)}
          />
    
      
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={e => onChange(e)}
          />

    
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={e => onChange(e)}
          />
     
       
          <input
            type='password'
            placeholder='Confirm Password'
            name='password2'
            value={password2}
            onChange={e => onChange(e)}
          />

        <select value={type_of_user} className='input2' name='type_of_user' onChange={e => onChange(e)}>
          <option value='Attendee'>Attendee</option>
          <option value='Organizer'>Organizer</option>
        </select>
       
        {/* <legend><span class="number">2</span>Security Questions</legend> */}
        <select value={question1} className='input2' name='question1' onChange={e => onChange(e)}>
          <option value='Your First Pets Name'>Your First Pets Name</option>
          <option value='Your Fathers first Name'>Your Fathers first Name</option>
          <option value='Your Mothers Maiden Name'>Your Mothers Maiden Name</option>
          <option value='Your High Schools Name'>Your High Schools Name</option>
          <option value='The City you were Born in'>The City you were Born in</option>
          
        </select>
       
          <input
            type='answer1'
            placeholder='Enter Answer Here'
            name='answer1'
            value={answer1}
            onChange={e => onChange(e)}
          />
      
        <select value={question2} className='input2' name='question2' onChange={e => onChange(e)}>
        <option value='Your First Pets Name'>Your First Pets Name</option>
          <option value='Your Fathers first Name'>Your Fathers first Name</option>
          <option value='Your Mothers Maiden Name'>Your Mothers Maiden Name</option>
          <option value='Your High Schools Name'>Your High Schools Name</option>
          <option value='The City you were Born in'>The City you were Born in</option>
          
        </select>
      
          <input
            type='answer2'
            placeholder='Enter Answer Here'
            name='answer2'
            value={answer2}
            onChange={e => onChange(e)}
          />
      
        <br />
      
        <ReCAPTCHA 
        class="someclass"
        ref={recaptchaRef}
        sitekey="6Lev0rsUAAAAADYGVKiWUXrnCVAMmvzIL-lJ_7PM"
        onChange={onloadCallback}
      />

        <input type='submit' className='bouton' value='Register' />
        {/* <input type='submit' className='button1' value='Register' /> */}
        <p className='forgot'>
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