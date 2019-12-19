import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../actions/alert";
// import { register } from "../../actions/auth";
import PropTypes from "prop-types";
import '../../css/forms.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type_of_user: "",
    message: ""
  });

  const { name, email, type_of_user, message } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    // console.log('SUCCESS');
    // console.log({type_of_user, name })
    console.log(formData);
    Contact({ name, email, type_of_user, message });
  };
  /*
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
    <h1 className='large text-primary'>Contact Us!</h1>
  } */

  return (
    <Fragment>

 <section className ="formslayout2">

      {/* <div className='dark-overlay'> */}
        <div className='formslayout2-inner'>
  <div class="page">
  
  <div class="register"> 
<div class="formulaire">

    <form onSubmit={e => onSubmit(e)}>

    <h1 className='large text-primary'>Contact us for more info.</h1>
 
          <input
            type='name'
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
            type='type_of_user'
            placeholder='Attendee or Organizer'
            name='type_ofuser'
            value={type_of_user}
            onChange={e => onChange(e)}
          />
    
          <input
            type='message'
            placeholder='Message'
            name='message'
            value={message}
            onChange={e => onChange(e)}
          />
       
        <input type='submit' className='bouton' value='Submit' width='50%'/>
          </form>
		  </div>
		  </div>
</div>
</div>
</section>
      
    </Fragment>
  );
};

Contact.propTypes = {
  setAlert: PropTypes.func.isRequired,
  // register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { Contact }
)(Contact);
