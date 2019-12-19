import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { login } from "../../actions/auth";
import "../../css/forms.css";
// import '../../css/buttons.css'

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    if (localStorage.type_of_user === "Organizer") {
      return <Redirect to="/dashboardOr g" />;
    } else {
      console.log(localStorage.type_of_user);
      return <Redirect to="/dashboard" />;
    }
  }
  
    const responseGoogle = (res) => {
    console.log(res);
    login(window.localStorage.getItem("emailID"), "ishitakumar");
  }

  const responseFacebook = (response) => {
    console.log(response);
    if(response)
	login(window.localStorage.getItem("emailID"), "ishitakumar");

}

  return (
    <Fragment>
      <section className="formslayout2">
        {/* <div className='dark-overlay'> */}
        <div className="formslayout2-inner">
          <div class="page">
            <div class="login">
              <div class="">
                <h1
                  class="text-center"
                  style={{ marginTop: "20px", marginLeft: "80px" }}
                >
                  Login
                </h1>

                <form onSubmit={e => onSubmit(e)}>
                  <input
                    style={{ color:"black",border:"none",height: "35px", widht: "90%" }}
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={email}
                    onChange={e => onChange(e)}
                    required
                  />

                  <input
                    style={{ height: "35px",border:"none" ,marginTop:"20px" }}
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={e => onChange(e)}
                    minLength="6"
                  />

                  <input
                    type="submit"
                    style={{
                      height: "35px",
                      marginTop:"20px",
                      width: "30%",
                      backgroundColor: "#17a2b8",
                      fontSize:"1.2rem",
                      color:"black"
                      
                    }}
                   
                    value="Login"
                  />
                  <p className="forgot">
                    Don't have an account? <Link to="/register">Sign Up</Link>
                  </p>
                  <p className="forgot">
                    Forgot your password <Link to="/Sende">Reset Password</Link>
                  </p>
		
<br></br>
				  <div className="row" style={{marginLeft:"40px"}}>
            <div >
				  <GoogleLogin
          style={{theme:"dark"}}
          
				  clientId="279742822832-ruqqjhue6gobnbjl3nc6dclbq7gvht7r.apps.googleusercontent.com"
				  //googleClientId="279742822832-ruqqjhue6gobnbjl3nc6dclbq7gvht7r.apps.googleusercontent.com"
				  onSuccess={responseGoogle}
		
				  // className="btn btn-outline-danger mt-10"
				  >
				  <span >Google Login</span>
					 
				  </GoogleLogin>
          </div>
					<br/><br/>
				  <FacebookLogin
				appId="2439972026111073"
				autoLoad={false}
				fields="name,email,picture"
				className="btn btn-outline-danger mt-4" 
				data-size="medium"
				callback={(response)=>responseFacebook(response)}
				cssClass= "my-facebook-button-class"
				icon="fa-facebook "
				/>
        </div>
      
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
