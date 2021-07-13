import {memo} from "react"
import PropTypes from 'prop-types';

import ListItem from "./ListItem"
import "./List.css"

const List = (props) => {
  const { list } = props;
  return (
    <ul className="list">
        {list.map(item => (
          <ListItem {...item} key={item.trainNumber} />
        ))}
    </ul>
);
}

export default memo(List)

List.propTypes = {
  list: PropTypes.array.isRequired,
};