import PropTypes from 'prop-types';
import {memo, useMemo} from "react"
import URI from 'urijs';

import "./ListItem.css"

const ListItem = memo(function ListItem(props) {
  const {
      dTime,
      aTime,
      dStation,
      aStation,
      trainNumber,
      date,
      time,
      priceMsg,
      dayAfter,
  } = props;

  const url = useMemo(() => {
    return new URI('/ticket')
        .setSearch('aStation', aStation)
        .setSearch('dStation', dStation)
        .setSearch('trainNumber', trainNumber)
        .setSearch('date', date)
        .toString();
}, [aStation, dStation, trainNumber, date]);

  return (
      <li className="list-item">
          <a href={url}>
              <span className="item-time">
                  <em>{dTime}</em>
                  <em>
                      {aTime} <span className="time-after">{dayAfter}</span>
                  </em>
              </span>
              <span className="item-stations">
                  <em className="em-light">
                      <i className=" fas fa-plane-departure train-icon"/>
                      <span>{dStation}</span>
                  </em>
                  <em className="em-light">
                      <i className="fas fa-plane-arrival train-icon" />
                      <span>{aStation}</span>
                  </em>
              </span>
              <span className="item-train">
                  <em>{trainNumber}</em>
                  <em>{time}</em>
              </span>
              <span className="item-ticket">
                  <em>{priceMsg}</em>
                  <em>Available</em>
              </span>
          </a>
      </li>
  );
});

export default ListItem

ListItem.propTypes = {
  dTime: PropTypes.string.isRequired,
  aTime: PropTypes.string.isRequired,
  dStation: PropTypes.string.isRequired,
  aStation: PropTypes.string.isRequired,
  trainNumber: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  priceMsg: PropTypes.string.isRequired,
  dayAfter: PropTypes.string.isRequired,
};