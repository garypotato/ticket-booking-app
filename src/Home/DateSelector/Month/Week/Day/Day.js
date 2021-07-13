import PropTypes from 'prop-types';
import classnames from 'classnames';

import { h0 } from "../../../../../utilities/h0GetDate"
import "./Day.css"

function Day(props) {
  const { day, onSelect} = props;

  if (!day) {
      return <td className="null"></td>;
  }

  const classes = [];

  const now = h0();

  if (day < now) {
      classes.push('disabled');
  }

  if ([6, 0].includes(new Date(day).getDay())) {
      classes.push('weekend');
  }

  const dateString = now === day ? 'Today' : new Date(day).getDate();

  return (
      <td className={classnames(classes)} onClick={() => onSelect(day)}>
          {dateString}
      </td>
  );
}

export default Day 

Day.propTypes = {
  day: PropTypes.number,
  onSelect: PropTypes.func.isRequired,
};