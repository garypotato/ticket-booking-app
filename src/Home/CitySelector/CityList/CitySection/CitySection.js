import PropTypes from 'prop-types';
import {memo} from "react"

import "./CitySection.css"

const CityItem = memo(function CityItem(props) {
  const { name, onSelect } = props;

  return (
      <li className="city-li" onClick={() => onSelect(name)}>
          {name}
      </li>
  );
});

CityItem.propTypes = {
  name: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

const CitySection = (props) => {

  const { title, cities = [], onSelect } = props;

  return (
    <ul className="city-ul">
      <li className="city-li" key="title" data-cate={title}>
        {title}
      </li>
      {cities.map(city => {
        return (
          <CityItem
            key={city.name}
            name={city.name}
            onSelect={onSelect}
          />
        );
      })}
    </ul>
  )
}

export default memo(CitySection)

CitySection.propTypes = {
  title: PropTypes.string.isRequired,
  cities: PropTypes.array,
  onSelect: PropTypes.func.isRequired,
};