/* eslint-disable react-hooks/exhaustive-deps */
import { connect } from "react-redux"
import {useCallback, useEffect, useMemo} from "react"
import URI from 'urijs';
import dayjs from 'dayjs';
import { bindActionCreators } from 'redux';

import Header from "../common/Header/Header"
import './Order.css';
import Detail from "../common/Detail/Detail"
import {
  setDepartStation,
  setArriveStation,
  setTrainNumber,
  setSeatType,
  setDepartDate,
  setSearchParsed,
  fetchInitial,
  createAdult,
  createChild,
  removePassenger,
  updatePassenger,
  showTicketTypeMenu,
  showFollowAdultMenu,
  showGenderMenu,
  hideMenu
} from "../redux/reducers/orderReducer/orderActions"
import Ticket from "./Ticket/Ticket"
import Passengers from "./Passengers/Passengers"
import Menu from "./Menu/Menu"
import Choose from "./Choose/Choose"
import Account from "./Account/Account"

const Order = (props) => {

  const {
    trainNumber,
    departStation,
    arriveStation,
    seatType,
    departDate,
    arriveDate,
    departTimeStr,
    arriveTimeStr,
    durationStr,
    price,
    passengers,
    menu,
    isMenuVisible,
    searchParsed,
    dispatch,
  } = props;

  const onBack = useCallback(() => {
    window.history.back();
  }, []);

  useEffect(() => {
    const queries = URI.parseQuery(window.location.search);

    const { trainNumber, dStation, aStation, type, date } = queries;
    dispatch(setDepartStation(dStation));
    dispatch(setArriveStation(aStation));
    dispatch(setTrainNumber(trainNumber));
    dispatch(setSeatType(type));
    dispatch(setDepartDate(dayjs(date).valueOf()));
    dispatch(setSearchParsed(true));
  }, []);

  useEffect(() => {
    if (!searchParsed) {
      return;
  }
    const url = new URI('/order')
      .setSearch('dStation', departStation)
      .setSearch('aStation', arriveStation)
      .setSearch('type', seatType)
      .setSearch('date', dayjs(departDate).format('YYYY-MM-DD'))
      .toString();

    dispatch(fetchInitial(url));
  }, [searchParsed, departStation, arriveStation, seatType, departDate]);

  const passengersCbs = useMemo(() => {
    return bindActionCreators(
      {
        createAdult,
        createChild,
        removePassenger,
        updatePassenger,
        showGenderMenu,
        showFollowAdultMenu,
        showTicketTypeMenu,
      },
      dispatch
    );
  }, []);

  const menuCbs = useMemo(() => {
    return bindActionCreators(
      {
        hideMenu,
      },
      dispatch
    );
  }, []);

  const chooseCbs = useMemo(() => {
    return bindActionCreators(
      {
        updatePassenger,
      },
      dispatch
    );
  }, []);

  return (
    <div className="app">
      <div className="header-wrapper">
        <Header title="Your Details" onBack={onBack} />
      </div>
      <div className="detail-wrapper">
        <Detail
          departDate={departDate}
          arriveDate={arriveDate}
          departTimeStr={departTimeStr}
          arriveTimeStr={arriveTimeStr}
          trainNumber={trainNumber}
          departStation={departStation}
          arriveStation={arriveStation}
          durationStr={durationStr}
        >
          <i className="fas fa-train" />
        </Detail>
        <Ticket price={price} type={seatType} />
        <Passengers passengers={passengers} {...passengersCbs} />
        {passengers.length > 0 && (
          <Choose passengers={passengers} {...chooseCbs} />
        )}
        {/* <div className="take-up-space">
          Take up Account Space to show Choose Seat
        </div> */}
        <Account length={passengers.length} price={price} />
        <Menu show={isMenuVisible} {...menu} {...menuCbs} />
      </div>
    </div>
  )
}

export default connect(
  function mapStateToProps(state) {
      return state.order;
  },
  function mapDispatchToProps(dispatch) {
      return { dispatch };
  }
)(Order);