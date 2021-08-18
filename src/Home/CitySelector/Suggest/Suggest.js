/* eslint-disable react-hooks/exhaustive-deps */
import {memo, useEffect, useState, useMemo} from "react"
import PropTypes from 'prop-types';

import SuggestItem from "./SuggestItem/SuggestItem"
import "./Suggest.css"

const Suggest = (props) => {

  const { searchKey, onSelect } = props
  const [result, setResult] = useState([]);

  useEffect(() => {
    fetch('/mock/search.json')
      .then(res => res.json())
      .then(data => {
        const { result } = data;

        // if (sKey === searchKey) {
        //   setResult(result);
        // }
        setResult(result);
      });
  }, [searchKey]);

  const fallBackResult = useMemo(() => {
    // if (!result.length) {
    //   return [
    //     {
    //       display: searchKey,
    //     },
    //   ];
    // }
    return result
  }, [result, searchKey]);

  return (
    <div className="city-suggest">
        <ul className="city-suggest-ul">
          {fallBackResult.map(item => {
            return (
              <SuggestItem
                key={item.display}
                name={item.display}
                onClick={onSelect}
              />
            );
          })}
        </ul>
    </div>
    );
}

export default memo(Suggest)

Suggest.propTypes = {
  searchKey: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};