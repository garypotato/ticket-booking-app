import {memo} from "react"
import PropTypes from 'prop-types';

import CitySection from "./CitySection/CitySection"
import AlphaIndex from "./AlphaIndex"
import "./CityList.css"

const CityList = (props) => {

  const {sections, onSelect, toAlpha} = props

  const alphabet = Array.from(new Array(26), (ele, index) => {
    return String.fromCharCode(65 + index);
  });

  return (
    <div className="city-list">
      <div className="city-cate">
        {sections.map(section => {
          return (
            <CitySection 
              key={section.title}
              title={section.title}
              cities={section.citys}
              onSelect={onSelect}
            />
          );
        })}
      </div>
      <div className="city-index">
        {alphabet.map(alpha => {
          return (
            <AlphaIndex
                key={alpha}
                alpha={alpha}
                onClick={toAlpha}
            />
          );
        })}
      </div>
    </div>
  )
}

export default memo(CityList)

CityList.propTypes = {
  sections: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
    toAlpha: PropTypes.func.isRequired,
};