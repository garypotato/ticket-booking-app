import classnames from 'classnames';
import {useMemo} from "react"
import PropTypes from 'prop-types';

import "./Bottom.css"
import {ORDER_DEPART} from "../constant"
import BottomModal from "./BottomModal/BottomModal"

const Bottom = (props) => {

  const {
    toggleOrderType,
    toggleHighSpeed,
    toggleOnlyTickets,
    toggleIsFiltersVisible,
    highSpeed,
    orderType,
    onlyTickets,
    isFiltersVisible,

    ticketTypes,
    trainTypes,
    departStations,
    arriveStations,
    checkedTicketTypes,
    checkedTrainTypes,
    checkedDepartStations,
    checkedArriveStations,
    departTimeStart,
    departTimeEnd,
    arriveTimeStart,
    arriveTimeEnd,
    setCheckedTicketTypes,
    setCheckedTrainTypes,
    setCheckedDepartStations,
    setCheckedArriveStations,
    setDepartTimeStart,
    setDepartTimeEnd,
    setArriveTimeStart,
    setArriveTimeEnd,
  } = props

  const noChecked = useMemo(() => {
    return (
        Object.keys(checkedTicketTypes).length === 0 &&
        Object.keys(checkedTrainTypes).length === 0 &&
        Object.keys(checkedDepartStations).length === 0 &&
        Object.keys(checkedArriveStations).length === 0 &&
        departTimeStart === 0 &&
        departTimeEnd === 24 &&
        arriveTimeStart === 0 &&
        arriveTimeEnd === 24
    );
    }, [
        checkedTicketTypes,
        checkedTrainTypes,
        checkedDepartStations,
        checkedArriveStations,
        departTimeStart,
        departTimeEnd,
        arriveTimeStart,
        arriveTimeEnd,
    ]);

  return (
    <div className="bottom">
      <div className="bottom-filters">
        <span className="item" onClick={toggleOrderType}>
            <i className="icon fas fa-exchange-alt" />
            {orderType === ORDER_DEPART ? 'Order By Depart Time' : 'Order by Travel Time'}
        </span>
        <span
          className={classnames('item', { 'item-on': highSpeed })}
          onClick={toggleHighSpeed}
        >
          <i className="icon fas fa-subway"></i>
          Metro
        </span>
        <span
          className={classnames('item', { 'item-on': onlyTickets })}
          onClick={toggleOnlyTickets}
        >
          <i className="icon fas fa-ticket-alt"></i>
          Ticket Available
        </span>
        <span
          className={classnames('item', {
            'item-on': isFiltersVisible || !noChecked,
          })}
          onClick={toggleIsFiltersVisible}
        >
          <i className="icon fas fa-filter" />
          Filters
        </span>
      </div>
      {isFiltersVisible && (
        <BottomModal
          ticketTypes={ticketTypes}
          trainTypes={trainTypes}
          departStations={departStations}
          arriveStations={arriveStations}
          checkedTicketTypes={checkedTicketTypes}
          checkedTrainTypes={checkedTrainTypes}
          checkedDepartStations={checkedDepartStations}
          checkedArriveStations={checkedArriveStations}
          departTimeStart={departTimeStart}
          departTimeEnd={departTimeEnd}
          arriveTimeStart={arriveTimeStart}
          arriveTimeEnd={arriveTimeEnd}
          setCheckedTicketTypes={setCheckedTicketTypes}
          setCheckedTrainTypes={setCheckedTrainTypes}
          setCheckedDepartStations={setCheckedDepartStations}
          setCheckedArriveStations={setCheckedArriveStations}
          setDepartTimeStart={setDepartTimeStart}
          setDepartTimeEnd={setDepartTimeEnd}
          setArriveTimeStart={setArriveTimeStart}
          setArriveTimeEnd={setArriveTimeEnd}
          toggleIsFiltersVisible={toggleIsFiltersVisible}
        />
      )}
    </div>
  )
}

export default Bottom

Bottom.propTypes = {
  toggleOrderType: PropTypes.func.isRequired,
  toggleHighSpeed: PropTypes.func.isRequired,
  toggleOnlyTickets: PropTypes.func.isRequired,
  toggleIsFiltersVisible: PropTypes.func.isRequired,
  highSpeed: PropTypes.bool.isRequired,
  orderType: PropTypes.number.isRequired,
  onlyTickets: PropTypes.bool.isRequired,
  isFiltersVisible: PropTypes.bool.isRequired,

  ticketTypes: PropTypes.array.isRequired,
  trainTypes: PropTypes.array.isRequired,
  departStations: PropTypes.array.isRequired,
  arriveStations: PropTypes.array.isRequired,
  checkedTicketTypes: PropTypes.object.isRequired,
  checkedTrainTypes: PropTypes.object.isRequired,
  checkedDepartStations: PropTypes.object.isRequired,
  checkedArriveStations: PropTypes.object.isRequired,
  departTimeStart: PropTypes.number.isRequired,
  departTimeEnd: PropTypes.number.isRequired,
  arriveTimeStart: PropTypes.number.isRequired,
  arriveTimeEnd: PropTypes.number.isRequired,
  setCheckedTicketTypes: PropTypes.func.isRequired,
  setCheckedTrainTypes: PropTypes.func.isRequired,
  setCheckedDepartStations: PropTypes.func.isRequired,
  setCheckedArriveStations: PropTypes.func.isRequired,
  setDepartTimeStart: PropTypes.func.isRequired,
  setDepartTimeEnd: PropTypes.func.isRequired,
  setArriveTimeStart: PropTypes.func.isRequired,
  setArriveTimeEnd: PropTypes.func.isRequired,
};