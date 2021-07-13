import React, { memo } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './Choose.css';

const Choose = memo(function Choose(props) {
  const { passengers, updatePassenger } = props;

  function createSeat(seatType) {
    return (
      <div>
        {passengers.map(passenger => {
          return (
            <p
              key={passenger.id}
              className={classnames('seat', {
                  active: passenger.seat === seatType,
              })}
              data-text={seatType}
              onClick={() =>
                updatePassenger(passenger.id, {
                    seat: seatType,
                })
              }
            >
              &#xe02d;
            </p>
          );
        })}
      </div>
    );
  }

  return (
    <div className="choose">
      <p className="tip">Choose Seats</p>
      <div className="container">
        <div className="seats">
          <div>window</div>
          {createSeat('A')}
          {createSeat('B')}
          {createSeat('C')}
          <div>path</div>
          {createSeat('D')}
          {createSeat('F')}
          <div>window</div>
        </div>
      </div>
    </div>
  );
});

Choose.propTypes = {
  passengers: PropTypes.array.isRequired,
  updatePassenger: PropTypes.func.isRequired,
};

export default Choose;
