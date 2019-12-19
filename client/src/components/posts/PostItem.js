import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";
import { addLike, removeLike, deletePost } from "../../actions/post";
import duck from "../../img/duck.jpg";
import wolf from "../../img/wolf.png";
import panda from "../../img/panda.png";
const imgArray = [panda, duck,wolf]
const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
  showActions
}) => (
  <div>
    {/* <div>{}
      <Link to={`/profile/${user}`}>
       
        <h4>{name}</h4>
      </Link>
    </div> */}
    <div>
      {/* <p className='my-1'>{text}</p> */}
      {/* <p className='post-date'> */}

      {/* </p> */}

      <div class="container text-center">
        <div
          class="message-container"
          style={{
            height: "150px",
            border: "1px solid #EFF9FC",
            borderRadius: "5px",
            backgroundColor: "   #ccf5ff      "
          }}
        >
          <div class="status-bar" style={{ padding: "2px", marginTop: "2px" }}>
            <h2 class="my-0">
              <div class="message-content">
                <div class="message-header mr-0">
                  <div class="header-image">
                    <img src={imgArray[Math.floor((Math.random() * 3) )]} width="40" alt="duck" title="duck" />
                  </div>
                  <div class="header-info">
                    <div class="user-details">
                      <div class="user-top">
                        <h4 style={{ color: "black" }}>
                          {name} : {text}
                        </h4>

                        <div style={{ color: "black" }}>
                          <p></p>
                        </div>
                      </div>

                      <div class="user-bottom"></div>
                    </div>
                    <div class="message-details">
                      <div style={{ float: "right" }}>
                        {showActions && (
                          <Fragment>
                            {!auth.loading && user === auth.user._id && (
                              <button
                                onClick={() => deletePost(_id)}
                                type="button"
                               
                                style={{ width:"20px",height:'30px',backgroundColor: "transparent" }}
                              >
                                <bold>X</bold>
                              </button>
                            )}
                          </Fragment>
                        )}
                      </div>
                      <div class="message-date" style={{ color: "black" }}>
                        <span>
                          {" "}
                          {/* <Moment format="YYYY/MM/DD">{date}</Moment> */}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row" style={{ marginTop: "10px" }}></div>

                <button
                  style={{
                    marginLeft: "630px",
                    color: "white",
                    backgroundColor: "lightblue",
                    height:"30px",
                    paddingBottom:"30px"
                  }}
                  onClick={() => addLike(_id)}
                  type="button"
                  className="btn btn-light"
                >
                  <i className="fas fa-thumbs-up" />{" "}
                  <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
                </button>
                <button
                  style={{ color: "white", paddingBottom:"30px",backgroundColor: "lightblue" , height:"30px"}}
                  onClick={() => removeLike(_id)}
                  type="button"
                  className="btn btn-light"
                >
                  <i className="fas fa-thumbs-down" />
                </button>

                <Link
                  to={`/posts/${_id}`}
                  style={{
                    color: "white",
                    border: "None",
                    backgroundColor: "lightblue",
                    height:"30px",
                    paddingBottom:"30px",

                  }}
                  className="btn btn-primary"
                >
                <i class="far fa-comments"></i>{" "}
                  {comments.length > 0 && (
                    <span className="comment-count">{comments.length}</span>
                  )}
                </Link>
              </div>
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
);

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  showActions: PropTypes.bool
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);
