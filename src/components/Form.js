import React from 'react';
import PropTypes from 'prop-types';

const Form = props => 
    <form onSubmit={props.addNewGuest}>
      <input
        type="text"
        onChange={props.handleNameInput}
        value={props.pendingGuest}
        placeholder="Invite Someone"
      />
      <button type="submit" name="submit" value="submit">
        Submit
      </button>
    </form>;

Form.propTypes = {
  addNewGuest: PropTypes.func.isRequired,
  handleNameInput: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired,
};

export default Form;