import React from "react";
import PropTypes from "prop-types";


const PendingGuest = props => {
    if(props.name){
        return(
            <li className="pending">
                <span>
                {props.name}
                </span> 
            </li>
        );
    }
    return null;
};

PendingGuest.propTypes = {
  name: PropTypes.string.isRequired,
  isConfirmed: PropTypes.bool.isRequired,
  isEditing: PropTypes.bool.isRequired,
  handleConfirmation: PropTypes.func.isRequired,
  handleToggleEditing: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  removeGuest: PropTypes.func.isRequired
};

export default PendingGuest;
