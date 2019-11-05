import React from 'react';
import PropTypes from 'prop-types';
import Guests from "./Guests";

const GuestList = props => 
    <ul>
        {props.guests.map((guest,index) =>
            <Guests key={index}
            name={guest.name}
            isConfirmed={guest.isConfirmed}
            handleConfirmation={() => props.toggleConfirmationAt(index)}
            />
        )}
    </ul>

GuestList.propTypes ={
    guests: PropTypes.array.isRequired,
    toggleConfirmationAt: PropTypes.func.isRequired
}

export default GuestList;