import React from 'react';
import Proptypes from 'prop-types';

const Dialog = props => {
  const { userId, handleInput, connectToChatkit } = props;

  return (
    <div className="dialog-container">
      <div className="dialog">
        <form className="dialog-form" onSubmit={connectToChatkit}>
          <label className="username-label" htmlFor="username">

          </label>
          <input
            id="username"
            className="username-input"
            autoFocus
            type="text"
            name="userId"
            value={userId}
            onChange={handleInput}
            placeholder="Enter your username"
          />
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

Dialog.propTypes = {
  userId: Proptypes.string.isRequired,
  handleInput: Proptypes.func.isRequired,
  connectToChatkit: Proptypes.func.isRequired,
};

export default Dialog;
