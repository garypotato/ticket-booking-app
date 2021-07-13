import { memo, useContext, useMemo } from "react"
import PropTypes from 'prop-types';
import URI from 'urijs';
import dayjs from 'dayjs';

import {TrainContext} from "../../../context"
import "./Channel.css"

const Channel = (props) => {

  const { name, desc, type } = props;

  const {
    trainNumber,
    departStation,
    arriveStation,
    departDate,
  } = useContext(TrainContext);

  const src = useMemo(() => {
    return new URI('/order')
      .setSearch('trainNumber', trainNumber)
      .setSearch('dStation', departStation)
      .setSearch('aStation', arriveStation)
      .setSearch('type', type)
      .setSearch('date', dayjs(departDate).format('YYYY-MM-DD'))
      .toString();
  }, [type, trainNumber, departStation, arriveStation, departDate]);

  return (
    <div className="channel">
      <div className="middle">
        <div className="name">{name}</div>
        <div className="desc">{desc}</div>
      </div>
      <a href={src} className="buy-wrapper">
        <div className="buy">Buy</div>
      </a>
    </div>
  )
}

export default memo(Channel)

Channel.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};