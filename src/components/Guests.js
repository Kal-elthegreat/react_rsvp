import React from "react";
import PropTypes from "prop-types";

const Guests = props => (
    <li>
    <span>{props.name}</span>
    <label>
        <input 
        type="checkbox" 
        checked={props.isConfirmed}
        onChange={props.handleConfirmation}
        /> Confirmed
    </label>
    <button>edit</button>
    <button>remove</button>
    </li>
);

Guests.propTypes = {
  name: PropTypes.string.isRequired,
  isConfirmed: PropTypes.bool.isRequired,
  handleConfirmation: PropTypes.func.isRequired
};

export default Guests;
