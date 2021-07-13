import PropTypes from 'prop-types';

import "./Month.css"
import Week from "./Week/Week"


function Month(props) {
  const { startingTimeInMonth, onSelect } = props;

  const startDay = new Date(startingTimeInMonth);
  const monthList = ["Jaunary", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const monthDisplay = monthList[startDay.getMonth()]

  const currentDay = new Date(startingTimeInMonth);

  let days = [];

  while (currentDay.getMonth() === startDay.getMonth()) {
    days.push(currentDay.getTime());
    currentDay.setDate(currentDay.getDate() + 1);
  }

  days = new Array(startDay.getDay() ? startDay.getDay() - 1 : 6)
      .fill(null)
      .concat(days);

  const lastDay = new Date(days[days.length - 1]);

  days = days.concat(
      new Array(lastDay.getDay() ? 7 - lastDay.getDay() : 0).fill(null)
  );

  const weeks = [];

  for (let row = 0; row < days.length / 7; ++row) {
      const week = days.slice(row * 7, (row + 1) * 7);
      weeks.push(week);
  }

  return (
      <table className="date-table">
          <thead>
              <tr>
                  <td colSpan="7">
                      <h5>
                        {monthDisplay} {startDay.getFullYear()} 
                      </h5>
                  </td>
              </tr>
          </thead>
          <tbody>
              <tr className="data-table-weeks">
                  <th>Mon</th>
                  <th>Tue</th>
                  <th>Wed</th>
                  <th>Thu</th>
                  <th>Fri</th>
                  <th className="weekend">Sat</th>
                  <th className="weekend">Sun</th>
              </tr>
              {weeks.map((week, idx) => {
                return <Week key={idx} days={week} onSelect={onSelect}/>;
              })}
          </tbody>
      </table>
  );
}

export default Month

Month.propTypes = {
  startingTimeInMonth: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
};