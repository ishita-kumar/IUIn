import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../../actions/post";
import Navbar from "../layout/Navbar";
const PostForm = ({ addPost }) => {
  const [text, setText] = useState("");

  return (
    <div>
      <Navbar></Navbar>
      <div
        class="jumbotron text-center"
        style={{ backgroundColor: "lightblue", fontFamily:"Raleway" }}
      >
       
        {/* <hr style={ {:"1rem"}} class="my-4"/> */}
        <h3><bold>Please Read the below guidelines before posting </bold> </h3>
      <h4>1. Thread titles should be relevant to the content in the thread.</h4>  
      <h4>2. Excessive CAPS and symbols (e.g. !?#;~*) and "decorated" text that distort the Forum page, should be avoided</h4>  
      <h4>3. If there is an active thread, please post your comment there instead of creating another on the same topic.</h4>  
      <h4>4. Theads involving sexual subjects or topics  are not appropriate and will be subject to closure.</h4>  
      <h4>5. Incase you'd like to know about a specific topic related to website navigation, please read the FAQ's first and see if your query was answered already!</h4>  
       
      </div>
      <div
        className="post-form"
       
      >
        <form
          onSubmit={e => {
            e.preventDefault();
            addPost({ text });
            setText("");
          }}
        >
          <div>
            <div>
              <div className="container text-center">
                <textarea
                  name="text"
                  style={{
                    // marginLeft: "200px",
                    marginBottom: "14px",
                    // width: "600px",
                    borderColor: "#c9c9c9",
                    height: "60px",
                    padding: "10px",
                    outline: "none",
                    color: "black",
                    borderRadius: "5px"
                  }}
                  value={text}
                  onChange={e => setText(e.target.value)}
                  required
                  className="w-100"
                  placeholder="Ask Something"
                ></textarea>
                <input
                  type="submit"
                  style={{backgroundColor:"lightblue"}}
                
                  className="btn btn-info w-25"
                  value="Submit"
                />
              </div>
            </div>

            {/* <button class="btn btn-primary">Post</button> */}
          </div>
        </form>
      </div>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(null, { addPost })(PostForm);
