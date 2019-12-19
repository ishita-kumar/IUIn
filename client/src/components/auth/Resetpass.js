import React, { Fragment, useState, Component } from 'react';
import { connect } from 'react-redux';
import { Link ,Redirect} from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import axios from 'axios';
import PropTypes from 'prop-types';

const Resetpass = ({ setAlert,isAuthenticated}) => {

  const [formData, setFormData] = useState({
      email:'',
    password: '',
    redit:false,
  });
  
  const { email ,password,redit} = formData;
    
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
   
        axios.put('https://iuinevents.herokuapp.com/api/auth/updatess', 
        { email : email,
        password: password})
           .then(response =>{
               console.log(response.data);
               setFormData( {redit:true})
           }
           )

    
  };

  if (redit===true) {
    return <Redirect to='/login' />;
  }

  return (
    
    <Fragment>
      <h1 className='large text-primary'>Reset Password</h1>
      <p className='lead'>
        <i className='fas fa-user' /> 
      </p>
      <form className='form' onSubmit={e => onSubmit(e)}>
      <div className='form-group'>
          <input
            type='text'
            placeholder='email'
            name='email'
            value={email}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={e => onChange(e)}
          />
        </div>
        
        <input type='submit' className='btn btn-primary' value='reset' />
      </form>
    </Fragment>
  );
};

Resetpass.propTypes = {
  setAlert: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { setAlert }
)(Resetpass);
