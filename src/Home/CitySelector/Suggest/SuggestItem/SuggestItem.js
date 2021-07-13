import {memo} from "react"
import PropTypes from 'prop-types';

import "./SuggestItem.css"

const SuggestItem = memo(function SuggestItem(props) {
  const { name, onClick } = props;

  return (
      <li className="city-suggest-li" onClick={() => onClick(name)}>
          {name}
      </li>
  );
});

export default SuggestItem;

SuggestItem.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
