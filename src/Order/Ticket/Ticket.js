import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './Ticket.css';

const Ticket = memo(function Ticket(props) {
    const { price, type } = props;
    return (
        <div className="ticket">
            <div className="label">Seats</div>
            <div className="ticket-type">{type}</div>
            <div className="ticket-price">${price}</div>
        </div>
    );
});

Ticket.propTypes = {
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    type: PropTypes.string.isRequired,
};

export default Ticket;
