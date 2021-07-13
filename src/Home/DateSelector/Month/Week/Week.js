import PropTypes from 'prop-types';

import "./Week.css"
import Day from "./Day/Day"

function Week(props) {
  const { days, onSelect} = props;

  return (
      <tr className="date-table-days">
          {days.map((day, idx) => {
              return <Day key={idx} day={day} onSelect={onSelect}/>;
          })}
      </tr>
  );
}

export default Week 

Week.propTypes = {
  days: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
};