import {h0} from "../../../utilities/h0GetDate"
import {ORDER_DEPART, ORDER_DURATION} from "../../../Query/constant"

export const QUERY_ACTION_SET_FROM = 'QUERY_SET_FROM';
export const QUERY_ACTION_SET_TO = 'QUERY_SET_TO';
export const QUERY_ACTION_SET_DEPART_DATE = 'QUERY_SET_DEPART_DATE';
export const QUERY_ACTION_SET_HIGH_SPEED = 'QUERY_SET_HIGH_SPEED';
export const QUERY_ACTION_SET_TRAIN_LIST = 'QUERY_SET_TRAIN_LIST';
export const QUERY_ACTION_SET_ORDER_TYPE = 'QUERY_SET_ORDER_TYPE';
export const QUERY_ACTION_SET_ONLY_TICKETS = 'QUERY_SET_ONLY_TICKETS';
export const QUERY_ACTION_SET_TICKET_TYPES = 'QUERY_SET_TICKET_TYPES';
export const QUERY_ACTION_SET_CHECKED_TICKET_TYPES = 'QUERY_SET_CHECKED_TICKET_TYPES';
export const QUERY_ACTION_SET_TRAIN_TYPES = 'QUERY_SET_TRAIN_TYPES';
export const QUERY_ACTION_SET_CHECKED_TRAIN_TYPES = 'QUERY_SET_CHECKED_TRAIN_TYPES';
export const QUERY_ACTION_SET_DEPART_STATIONS = 'QUERY_SET_DEPART_STATIONS';
export const QUERY_ACTION_SET_CHECKED_DEPART_STATIONS = 'SQUERY_ET_CHECKED_DEPART_STATIONS';
export const QUERY_ACTION_SET_ARRIVE_STATIONS = 'QUERY_SET_ARRIVE_STATIONS';
export const QUERY_ACTION_SET_CHECKED_ARRIVE_STATIONS = 'QUERY_SET_CHECKED_ARRIVE_STATIONS';
export const QUERY_ACTION_SET_DEPART_TIME_START = 'QUERY_SET_DEPART_TIME_START';
export const QUERY_ACTION_SET_DEPART_TIME_END = 'QUERY_SET_DEPART_TIME_END';
export const QUERY_ACTION_SET_ARRIVE_TIME_START = 'QUERY_SET_ARRIVE_TIME_START';
export const QUERY_ACTION_SET_ARRIVE_TIME_END = 'QUERY_SET_ARRIVE_TIME_END';
export const QUERY_ACTION_SET_IS_FILTERS_VISIBLE = 'QUERY_ET_IS_FILTERS_VISIBLE';
export const QUERY_ACTION_SET_SEARCH_PARSED = 'QUERY_SET_SEARCH_PARSED';

export function setFrom(from) {
  return {
      type: QUERY_ACTION_SET_FROM,
      payload: from,
  };
}

export function setTo(to) {
  return {
      type: QUERY_ACTION_SET_TO,
      payload: to,
  };
}

export function setDepartDate(departDate) {
  return {
      type: QUERY_ACTION_SET_DEPART_DATE,
      payload: departDate,
  };
}

export function setHighSpeed(highSpeed) {
  return {
      type: QUERY_ACTION_SET_HIGH_SPEED,
      payload: highSpeed,
  };
}

export function toggleHighSpeed() {
  return (dispatch, getState) => {
      const { query } = getState();

      dispatch(setHighSpeed(!query.highSpeed));
  };
}

export function setSearchParsed(searchParsed) {
  return {
      type: QUERY_ACTION_SET_SEARCH_PARSED,
      payload: searchParsed,
  };
}

export function setTrainList(trainList) {
  return {
      type: QUERY_ACTION_SET_TRAIN_LIST,
      payload: trainList,
  };
}

export function setTicketTypes(ticketTypes) {
  return {
      type: QUERY_ACTION_SET_TICKET_TYPES,
      payload: ticketTypes,
  };
}

export function setTrainTypes(trainTypes) {
  return {
      type: QUERY_ACTION_SET_TRAIN_TYPES,
      payload: trainTypes,
  };
}

export function setDepartStations(departStations) {
  return {
      type: QUERY_ACTION_SET_DEPART_STATIONS,
      payload: departStations,
  };
}

export function setArriveStations(arriveStations) {
  return {
      type: QUERY_ACTION_SET_ARRIVE_STATIONS,
      payload: arriveStations,
  };
}

export function prevDate() {
  return (dispatch, getState) => {
      const { query } = getState();
      dispatch(setDepartDate(h0(query.departDate) - 86400 * 1000));
  };
}

export function nextDate() {
  return (dispatch, getState) => {
      const { query } = getState();
      dispatch(setDepartDate(h0(query.departDate) + 86400 * 1000));
  };
}

export function toggleOrderType() {
  return (dispatch, getState) => {
      const { query } = getState();
      if (query.orderType === ORDER_DEPART) {
          dispatch({
              type: QUERY_ACTION_SET_ORDER_TYPE,
              payload: ORDER_DURATION,
          });
      } else {
          dispatch({
              type: QUERY_ACTION_SET_ORDER_TYPE,
              payload: ORDER_DEPART,
          });
      }
  };
}

export function toggleOnlyTickets() {
  return (dispatch, getState) => {
      const { query } = getState();

      dispatch({
          type: QUERY_ACTION_SET_ONLY_TICKETS,
          payload: !query.onlyTickets,
      });
  };
}

export function toggleIsFiltersVisible() {
  return (dispatch, getState) => {
      const { query } = getState();

      dispatch({
          type: QUERY_ACTION_SET_IS_FILTERS_VISIBLE,
          payload: !query.isFiltersVisible,
      });
  };
}

export function setCheckedTicketTypes(checkedTicketTypes) {
  return {
      type: QUERY_ACTION_SET_CHECKED_TICKET_TYPES,
      payload: checkedTicketTypes,
  };
}

export function setCheckedTrainTypes(checkedTrainTypes) {
  return {
      type: QUERY_ACTION_SET_CHECKED_TRAIN_TYPES,
      payload: checkedTrainTypes,
  };
}

export function setCheckedDepartStations(checkedDepartStations) {
  return {
      type: QUERY_ACTION_SET_CHECKED_DEPART_STATIONS,
      payload: checkedDepartStations,
  };
}

export function setCheckedArriveStations(checkedArriveStations) {
  return {
      type: QUERY_ACTION_SET_CHECKED_ARRIVE_STATIONS,
      payload: checkedArriveStations,
  };
}

export function setDepartTimeStart(departTimeStart) {
  return {
      type: QUERY_ACTION_SET_DEPART_TIME_START,
      payload: departTimeStart,
  };
}

export function setDepartTimeEnd(departTimeEnd) {
  return {
      type: QUERY_ACTION_SET_DEPART_TIME_END,
      payload: departTimeEnd,
  };
}

export function setArriveTimeStart(arriveTimeStart) {
  return {
      type: QUERY_ACTION_SET_ARRIVE_TIME_START,
      payload: arriveTimeStart,
  };
}

export function setArriveTimeEnd(arriveTimeEnd) {
  return {
      type: QUERY_ACTION_SET_ARRIVE_TIME_END,
      payload: arriveTimeEnd,
  };
}