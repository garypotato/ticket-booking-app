/* eslint-disable react-hooks/exhaustive-deps */
import { connect } from 'react-redux';
import {useCallback, useEffect, useMemo, lazy, Suspense} from "react"
import {bindActionCreators} from "redux"
import URI from 'urijs';
import dayjs from 'dayjs';

import "./Ticket.css"
import Header from "../common/Header/Header"
import {h0} from "../utilities/h0GetDate"
import useNav from "../utilities/useNav"
import Nav from "../common/Nav/Nav"
import Detail from "../common/Detail/Detail"
import {
  setDepartStation,
  setArriveStation,
  setTrainNumber,
  setDepartDate,
  setSearchParsed,
  prevDate,
  nextDate,
  toggleIsScheduleVisible,
  setDepartTimeStr,
  setArriveTimeStr,
  setArriveDate,
  setDurationStr,
  setTickets
} from "../redux/reducers/ticketReducer/ticketActions"
import {mockTicketData} from "./mockTicketData"
import Candidate from './Candidate/Candidate';
import {TrainContext} from "./context"
// import Schedule from "./Schedule/Schedule"

const Schedule = lazy(() => import("./Schedule/Schedule"));

const Ticket = (props) => {
  const {
    departDate,
    arriveDate,
    departTimeStr,
    arriveTimeStr,
    departStation,
    arriveStation,
    trainNumber,
    durationStr,
    tickets,
    isScheduleVisible,
    searchParsed,

    dispatch,
  } = props;

  const onBack = useCallback(() => {
    window.history.back();
  }, []);

  useEffect(() => {
    const queries = URI.parseQuery(window.location.search);
    const { aStation, dStation, date, trainNumber } = queries;

    dispatch(setDepartStation(dStation));
    dispatch(setArriveStation(aStation));
    dispatch(setTrainNumber(trainNumber));
    dispatch(setDepartDate(h0(dayjs(date).valueOf())));

    dispatch(setSearchParsed(true));
  }, []);

  useEffect(() => {
    document.title = trainNumber;
  }, [trainNumber]);

  useEffect(() => {
    if (!searchParsed) {
      return;
    }

    const { detail, candidates } = mockTicketData;
    const {
      departTimeStr,
      arriveTimeStr,
      durationStr,
    } = detail;

    dispatch(setDepartTimeStr(departTimeStr));
    dispatch(setArriveTimeStr(arriveTimeStr));
    dispatch(setArriveDate(departDate));
    dispatch(setDurationStr(durationStr));
    dispatch(setTickets(candidates));

  }, [searchParsed, departDate, trainNumber])

  const { isPrevDisabled, isNextDisabled, prev, next } = useNav(
    departDate,
    dispatch,
    prevDate,
    nextDate
  );

  const detailCbs = useMemo(() => {
    return bindActionCreators(
        {
            toggleIsScheduleVisible,
        },
        dispatch
    );
  }, []);

  return (
    <div className="app">
      <div className="header-wrapper">
        <Header title={trainNumber} onBack={onBack} />
      </div>
      <div className="nav-wrapper">
        <Nav
          date={departDate}
          isPrevDisabled={isPrevDisabled}
          isNextDisabled={isNextDisabled}
          prev={prev}
          next={next}
        />
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
          <span className="left"></span>
          <span
            className="schedule"
            onClick={() => detailCbs.toggleIsScheduleVisible()}
          >
            Click
          </span>
          <span className="right"></span>
        </Detail>
        <TrainContext.Provider
          value={{
            trainNumber,
            departStation,
            arriveStation,
            departDate,
          }}
        >
          <Candidate tickets={tickets} />
        </TrainContext.Provider>
        {isScheduleVisible && (
          <div
            className="mask"
            onClick={() => dispatch(toggleIsScheduleVisible())}
          >
            <Suspense fallback={<div>loading</div>}>
              <Schedule
                date={departDate}
                trainNumber={trainNumber}
                departStation={departStation}
                arriveStation={arriveStation}
              />
            </Suspense>
          </div>
        )}
      </div>
    </div>
  )
}

export default connect(
  function mapStateToProps(state) {
      return state.ticket;
  },
  function mapDispatchToProps(dispatch) {
      return { dispatch };
  }
)(Ticket);