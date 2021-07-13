import {h0} from "../../../utilities/h0GetDate"

export const ACTION_SET_DEPART_DATE = 'TICKET_SET_DEPART_DATE';
export const ACTION_SET_ARRIVE_DATE = 'TICKET_SET_ARRIVE_DATE';
export const ACTION_SET_DEPART_TIME_STR = 'TICKET_SET_DEPART_TIME_STR';
export const ACTION_SET_ARRIVE_TIME_STR = 'TICKET_SET_ARRIVE_TIME_STR';
export const ACTION_SET_DEPART_STATION = 'TICKET_SET_DEPART_STATION';
export const ACTION_SET_ARRIVE_STATION = 'TICKET_SET_ARRIVE_STATION';
export const ACTION_SET_TRAIN_NUMBER = 'TICKET_ET_TRAIN_NUMBER';
export const ACTION_SET_DURATION_STR = 'TICKET_ET_DURATION_STR';
export const ACTION_SET_TICKETS = 'TICKET_SET_TICKETS';
export const ACTION_SET_IS_SCHEDULE_VISIBLE = 'TICKET_SET_IS_SCHEDULE_VISIBLE';
export const ACTION_SET_SEARCH_PARSED = 'TICKET_SET_SEARCH_PARSED';

export function setDepartStation(departStation) {
  return {
      type: ACTION_SET_DEPART_STATION,
      payload: departStation,
  };
}

export function setArriveStation(arriveStation) {
  return {
      type: ACTION_SET_ARRIVE_STATION,
      payload: arriveStation,
  };
}

export function setTrainNumber(trainNumber) {
  return {
      type: ACTION_SET_TRAIN_NUMBER,
      payload: trainNumber,
  };
}

export function setDepartDate(departDate) {
  return {
      type: ACTION_SET_DEPART_DATE,
      payload: departDate,
  };
}

export function setSearchParsed(searchParsed) {
  return {
      type: ACTION_SET_SEARCH_PARSED,
      payload: searchParsed,
  };
}

export function prevDate() {
  return (dispatch, getState) => {
      const { ticket } = getState();

      dispatch(setDepartDate(h0(ticket.departDate) - 86400 * 1000));
  };
}

export function nextDate() {
  return (dispatch, getState) => {
      const { ticket } = getState();

      dispatch(setDepartDate(h0(ticket.departDate) + 86400 * 1000));
  };
}

export function setIsScheduleVisible(isScheduleVisible) {
  return {
      type: ACTION_SET_IS_SCHEDULE_VISIBLE,
      payload: isScheduleVisible,
  };
}

export function toggleIsScheduleVisible() {
  return (dispatch, getState) => {
      const { ticket } = getState();

      dispatch(setIsScheduleVisible(!ticket.isScheduleVisible));
  };
}

export function setDepartTimeStr(departTimeStr) {
  return {
      type: ACTION_SET_DEPART_TIME_STR,
      payload: departTimeStr,
  };
}

export function setArriveTimeStr(arriveTimeStr) {
  return {
      type: ACTION_SET_ARRIVE_TIME_STR,
      payload: arriveTimeStr,
  };
}

export function setArriveDate(arriveDate) {
  return {
      type: ACTION_SET_ARRIVE_DATE,
      payload: arriveDate,
  };
}

export function setDurationStr(durationStr) {
  return {
      type: ACTION_SET_DURATION_STR,
      payload: durationStr,
  };
}

export function setTickets(tickets) {
  return {
      type: ACTION_SET_TICKETS,
      payload: tickets,
  };
}