import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link ,Redirect} from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import axios from 'axios';
import '../../css/forms.css';

const Sende = ({ setAlert,isAuthenticated}) => {
  const [formData, setFormData] = useState({
    email: '',
    question1:'',
    answer1:'',
    question2:'',
    answer2:''
  });

  const { email,question1,answer1,question2,answer2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    axios.post('https://iuinevents.herokuapp.com/api/auth/sendss', {email: email,question1:question1,question2:question2,answer1:answer1,answer2:answer2})
           .then(response =>{
               if(response.data ==='your question or answer is wrong'){
                 alert('your question or answer is wrong, try again')
               }
               else if(response.data ==='email has sent'){
                alert('email has sent')
              }
           }
           )
  };

//  if (isAuthenticated) {
  //  return <Redirect to='/dashboard' />;
  //}

  return (
    <Fragment>
      
      <section className ="formslayout2">

<div className='formslayout2-inner'>
     <div class="page">
<div class="register"> 
<div class="formulaire">
        <form  onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={e => onChange(e)}
          />
          <select value={question1} className='input2' name='question1' onChange={e => onChange(e)}>
          <option value='0'>Select Security Question</option>
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
        <option value='0'>Select Security Question</option>
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
        </div>
        
        <input type='submit' className='button1' value='Send Verification Email' />
        </form>
  </div>
  </div>
  </div>
  </div>  </section>
          
    </Fragment>
  );
};

Sende.propTypes = {
  setAlert: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { setAlert ,register}
)(Sende);