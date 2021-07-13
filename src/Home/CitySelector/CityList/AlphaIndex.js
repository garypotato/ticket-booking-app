import {memo} from "react";
import PropTypes from 'prop-types';

import "./AlphaIndex.css"

const AlphaIndex = memo(function AlphaIndex(props) {
  const { alpha, onClick } = props;

  return (
      <i className="city-index-item" onClick={() => onClick(alpha)}>
          {alpha}
      </i>
  );
});

export default AlphaIndex

AlphaIndex.propTypes = {
  alpha: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};