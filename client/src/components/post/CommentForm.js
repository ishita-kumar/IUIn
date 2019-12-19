import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addComment } from "../../actions/post";


const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState("");

  return (
    <div>
    
      <form
        onSubmit={e => {
          e.preventDefault();
          addComment(postId, { text });
          setText("");
        }}
      >
         <div className="container text-center">
          <textarea
            name="text"
            cols="30"
            rows="5"
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
            className="w-100"
            placeholder="Reply to this Post"
            value={text}
            onChange={e => setText(e.target.value)}
            required
          />
        
        {/* <input type='submit' className='btn btn-dark my-1' value='Submit' /> */}
        <input type="submit" value="Submit"    style={{backgroundColor:"lightblue"}} className="btn btn-info w-25" />
                  </div>
      </form>
      
    </div>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired
};

export default connect(null, { addComment })(CommentForm);
