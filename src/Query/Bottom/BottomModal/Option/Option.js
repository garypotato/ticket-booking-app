import PropTypes from 'prop-types';
import {memo} from "react"
import classnames from 'classnames';

import "./Option.css"

const Filter = memo(function Filter(props) {
  const { name, checked, value, dispatch } = props;

  return (
    <li
      className={classnames({ checked })}
      onClick={() => dispatch({ payload: value, type: 'toggle' })}
    >
      {name}
    </li>
  );
});

Filter.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const Option = memo(function Option(props) {
  const { title, options, checkedMap, dispatch } = props;

  return (
    <div className="option">
      <h3>{title}</h3>
      <ul>
        {options.map(option => {
          return (
            <Filter
              key={option.value}
              {...option}
              checked={option.value in checkedMap}
              dispatch={dispatch}
            />
          );
        })}
      </ul>
    </div>
  );
});

export default Option

Option.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  checkedMap: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};