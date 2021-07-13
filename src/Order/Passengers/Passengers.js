import { memo,useMemo } from "react"
import PropTypes from 'prop-types';

import "./Passengers.css"
import Passenger from "./Passenger"

const Passengers = memo(function Passengers(props) {
  const {

      passengers,
      createAdult,
      createChild,
      removePassenger,
      updatePassenger,
      showGenderMenu,
      showFollowAdultMenu,
      showTicketTypeMenu,
  } = props;

  const nameMap = useMemo(() => {
      const ret = {};

      for (const passenger of passengers) {
          ret[passenger.id] = passenger.name;
      }

      return ret;
  }, [passengers]);

  return (
      <div className="passengers">
          <ul>
              {passengers.map(passenger => {
                  return (
                    <Passenger
                        {...passenger}
                        followAdultName={nameMap[passenger.followAdult]}
                        showTicketTypeMenu={showTicketTypeMenu}
                        showGenderMenu={showGenderMenu}
                        showFollowAdultMenu={showFollowAdultMenu}
                        onRemove={removePassenger}
                        onUpdate={updatePassenger}
                        key={passenger.id}
                    />
                  );
              })}
          </ul>
          <section className="add">
              <div className="adult" onClick={() => createAdult()}>
                  Add Adult
              </div>
              <div className="child" onClick={() => createChild()}>
                  Add Child
              </div>
          </section>
      </div>
  );
});

Passengers.propTypes = {
  passengers: PropTypes.array.isRequired,
  createAdult: PropTypes.func.isRequired,
  createChild: PropTypes.func.isRequired,
  showGenderMenu: PropTypes.func.isRequired,
  showFollowAdultMenu: PropTypes.func.isRequired,
  showTicketTypeMenu: PropTypes.func.isRequired,
};

export default Passengers;