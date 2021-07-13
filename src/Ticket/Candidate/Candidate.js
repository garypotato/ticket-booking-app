import { memo,useCallback, useState } from "react"
import PropTypes from 'prop-types';

import "./Candidate.css"
import Seat from "./Seat/Seat"

const Candidate = (props) => {

  const { tickets } = props;

  const [expandedIndex, setExpandedIndex] = useState(-1);

  const onToggle = useCallback(
    idx => {
      setExpandedIndex(idx === expandedIndex ? -1 : idx);
    },
    [expandedIndex]
  );

  return (
    <div className="candidate">
      <ul>
      {tickets.map((ticket, idx) => {
        return (
          <Seat
            idx={idx}
            onToggle={onToggle}
            expanded={expandedIndex === idx}
            {...ticket}
            key={ticket.type}
          />
        );
      })}
      </ul>
    </div>
  )
}

export default memo(Candidate)

Candidate.propTypes = {
  tickets: PropTypes.array.isRequired,
}