import { memo } from "react"
import PropTypes from 'prop-types';

import "./Seat.css"
import Channel from "./Channel/Channel"

const Seat = (props) => {
  const {
    type,
    priceMsg,
    ticketsLeft,
    channels,
    expanded,
    onToggle,
    idx,
  } = props;

  return (
    <li>
      <div className="bar" onClick={() => onToggle(idx)}>
        <span className="seat">{type}</span>
        <span className="price">
          <i>$</i>
          {priceMsg}
        </span>
        <span className="btn">{expanded ? 'Close' : 'View'}</span>
        <span className="num">{ticketsLeft}</span>
      </div>
      <div
        className="channels"
        style={{ height: expanded ? channels.length * 55 + 'px' : 0 }}
      >
        {channels.map(channel => {
          return (
            <Channel key={channel.name} {...channel} type={type} />
          );
        })}
      </div>
    </li>
  )
}

export default memo(Seat)

Seat.propTypes = {
  type: PropTypes.string.isRequired,
  priceMsg: PropTypes.string.isRequired,
  ticketsLeft: PropTypes.string.isRequired,
  channels: PropTypes.array.isRequired,
  expanded: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  idx: PropTypes.number.isRequired,
};


