import classnames from 'classnames';
import Header from "../../common/Header/Header"
import Month from "./Month/Month"
import PropTypes from 'prop-types';

import "./DateSelector.css"

const DateSelector = (props) => {
  const { show, onSelect, onBack } = props;

  const now = new Date();
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    now.setMilliseconds(0);
    now.setDate(1);

    const monthSequence = [now.getTime()];

    now.setMonth(now.getMonth() + 1);
    monthSequence.push(now.getTime());

    now.setMonth(now.getMonth() + 1);
    monthSequence.push(now.getTime());

  return (
    <div className={classnames('date-selector', { hidden: !show })}>
      <Header title="Date Picker" onBack={onBack} />
      <div className="date-selector-tables">
        {monthSequence.map(month => {
          return (
            <Month
              key={month}
              onSelect={onSelect}
              startingTimeInMonth={month}
            />
          );
        })}
      </div>
    </div>
);
}

export default DateSelector

DateSelector.propTypes = {
  show: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};