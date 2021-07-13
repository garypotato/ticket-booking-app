import { connect } from 'react-redux';
import { useCallback, useEffect, useMemo } from 'react';
import URI from 'urijs';
import dayjs from 'dayjs';
import { bindActionCreators } from 'redux';

import "./Query.css"
import Header from "../common/Header/Header"
import {
  setFrom,
  setTo,
  setDepartDate,
  setHighSpeed,
  setSearchParsed,
  setTrainList,
  setTicketTypes,
  setTrainTypes,
  setDepartStations,
  setArriveStations,
  prevDate,
  nextDate,
  toggleOrderType,
  toggleHighSpeed,
  toggleOnlyTickets,
  toggleIsFiltersVisible,
  setCheckedTicketTypes,
  setCheckedTrainTypes,
  setCheckedDepartStations,
  setCheckedArriveStations,
  setDepartTimeStart,
  setDepartTimeEnd,
  setArriveTimeStart,
  setArriveTimeEnd,
} from "../redux/reducers/queryReducer/queryActions"
import {h0} from "../utilities/h0GetDate"
import Nav from "../common/Nav/Nav"
import useNav from "../utilities/useNav";
import List from "./List/List"
import Bottom from "./Bottom/Bottom"

const Query = (props) => {

  const {
    trainList,
    from,
    to,
    departDate,
    highSpeed,
    searchParsed,
    dispatch,
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
  } = props;

  useEffect(() => {
    const queries = URI.parseQuery(window.location.search);

    const { from, to, date, highSpeed } = queries;

    dispatch(setFrom(from));
    dispatch(setTo(to));
    dispatch(setDepartDate(h0(dayjs(date).valueOf())));
    dispatch(setHighSpeed(highSpeed === 'true'));

    dispatch(setSearchParsed(true));
  }, []);

  useEffect(() => {
    fetch("/mock/query.json")
      .then(res => res.json()) 
      .then(result => {
        const {
          dataMap: {
            directTrainInfo: {
              filter: {
                ticketType,
                trainType,
                depStation,
                arrStation,
              },
              trains,
            },
          }
        } = result;
        dispatch(setTrainList(trains));
        dispatch(setTicketTypes(ticketType));
        dispatch(setTrainTypes(trainType));
        dispatch(setDepartStations(depStation));
        dispatch(setArriveStations(arrStation));
      })
  }, [
    from,
    to,
    departDate,
    highSpeed,
    searchParsed,
    orderType,
    onlyTickets,
    checkedTicketTypes,
    checkedTrainTypes,
    checkedDepartStations,
    checkedArriveStations,
    departTimeStart,
    departTimeEnd,
    arriveTimeStart,
    arriveTimeEnd,
  ])

  const onBack = useCallback(() => {
    window.history.back();
  }, []);

  const { isPrevDisabled, isNextDisabled, prev, next } = useNav(
    departDate,
    dispatch,
    prevDate,
    nextDate
  );

  const bottomCbs = useMemo(() => {
    return bindActionCreators(
        {
          toggleOrderType,
          toggleHighSpeed,
          toggleOnlyTickets,
          toggleIsFiltersVisible,
          setCheckedTicketTypes,
          setCheckedTrainTypes,
          setCheckedDepartStations,
          setCheckedArriveStations,
          setDepartTimeStart,
          setDepartTimeEnd,
          setArriveTimeStart,
          setArriveTimeEnd,
        },
        dispatch
    );
}, []);

  return (
    <div>
      <div className="header-wrapper">
        <Header title={`${from} ⇀ ${to}`} onBack={onBack} />
      </div>
      <div className="content-wrapper">
          <Nav
            date={departDate}
            isPrevDisabled={isPrevDisabled}
            isNextDisabled={isNextDisabled}
            prev={prev}
            next={next}
          />
          <List list={trainList} />
          <Bottom 
            highSpeed={highSpeed}
            orderType={orderType}
            onlyTickets={onlyTickets}
            isFiltersVisible={isFiltersVisible}
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
            {...bottomCbs}
          />
        </div>
    </div>
  )
}

export default connect(
  function mapStateToProps(state) {
      return state.query;
  },
  function mapDispatchToProps(dispatch) {
      return { dispatch };
  }
)(Query);