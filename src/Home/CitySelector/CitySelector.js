/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useCallback, useEffect, useMemo} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import './CitySelector.css';
import CityList from "./CityList/CityList"
import Suggest from "./Suggest/Suggest"

const CitySelector = (props) => {
  const {
    show,
    isLoading,
    cityData,
    onBack,
    fetchCityData,
    onSelect
  } = props;

  const [searchKey, setSearchKey] = useState('');

  const key = useMemo(() => searchKey.trim(), [searchKey]);

  useEffect(() => {
    if (!show || cityData || isLoading) {
        return;
    }
    fetchCityData();
  }, [show, cityData, isLoading]);

  const toAlpha = useCallback(alpha => {
    document.querySelector(`[data-cate='${alpha}']`).scrollIntoView();
  }, []);

  const outputCitySections = () => {
    if (isLoading) {
        return <div>loading</div>;
    }

    if (cityData) {
      return (
        <CityList
          sections={cityData.cityList}
          onSelect={onSelect}
          toAlpha={toAlpha}
        />
      );
    }

    return <div>error</div>;
  };

  return (
    <div  className={classnames('city-selector', { hidden: !show })}>
      <div>
        <div className="city-search">
          <i className="search-back fas fa-arrow-left" onClick={() => onBack()} />
          <div className="search-input-wrapper">
            <input
              type="text"
              value={searchKey}
              className="search-input"
              placeholder="Search City"
              onChange={e => setSearchKey(e.target.value)}
            />
          </div>
          <i 
            onClick={() => setSearchKey('')}
            className = {classnames("far fa-times-circle search-clean", {
              hidden: key.length ===0})
            } />
        </div>
        {Boolean(key) && (
          <Suggest searchKey={key} onSelect={key => onSelect(key)} />
        )}
      </div>
      <div>{outputCitySections()}</div>
    </div>
    
    
  )
}

export default CitySelector

CitySelector.propTypes = {
  show: PropTypes.bool.isRequired,
  cityData: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
  onBack: PropTypes.func.isRequired,
  fetchCityData: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
};