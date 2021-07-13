import {h0} from "../../../utilities/h0GetDate"
import {ORDER_DEPART} from "../../../Query/constant"
import {
  QUERY_ACTION_SET_FROM,
  QUERY_ACTION_SET_TO,
  QUERY_ACTION_SET_DEPART_DATE,
  QUERY_ACTION_SET_HIGH_SPEED,
  QUERY_ACTION_SET_SEARCH_PARSED,
  QUERY_ACTION_SET_TRAIN_LIST,
  QUERY_ACTION_SET_TICKET_TYPES,
  QUERY_ACTION_SET_TRAIN_TYPES,
  QUERY_ACTION_SET_DEPART_STATIONS,
  QUERY_ACTION_SET_ARRIVE_STATIONS,
  QUERY_ACTION_SET_ORDER_TYPE,
  QUERY_ACTION_SET_ONLY_TICKETS,
  QUERY_ACTION_SET_IS_FILTERS_VISIBLE,
  QUERY_ACTION_SET_CHECKED_TICKET_TYPES,
  QUERY_ACTION_SET_CHECKED_TRAIN_TYPES,
  QUERY_ACTION_SET_CHECKED_DEPART_STATIONS,
  QUERY_ACTION_SET_CHECKED_ARRIVE_STATIONS,
  QUERY_ACTION_SET_DEPART_TIME_START,
  QUERY_ACTION_SET_DEPART_TIME_END,
  QUERY_ACTION_SET_ARRIVE_TIME_START,
  QUERY_ACTION_SET_ARRIVE_TIME_END
} from "./queryActions"

const initialState = {
  from: null,
  to: null,
  departDate: h0(Date.now()),
  highSpeed: false,
  trainList: [],
  orderType: ORDER_DEPART,
  onlyTickets: false,
  ticketTypes: [],
  checkedTicketTypes: {},
  trainTypes: [],
  checkedTrainTypes: {},
  departStations: [],
  checkedDepartStations: {},
  arriveStations: [],
  checkedArriveStations: {},
  departTimeStart: 0,
  departTimeEnd: 24,
  arriveTimeStart: 0,
  arriveTimeEnd: 24,
  isFiltersVisible: false,
  searchParsed: false,
}

const queryReducer = (state = initialState, action) => {
  switch(action.type) {
    case QUERY_ACTION_SET_FROM: return {...state, from: action.payload}
    case QUERY_ACTION_SET_TO: return {...state, to: action.payload}
    case QUERY_ACTION_SET_DEPART_DATE: return {...state, departDate: action.payload}
    case QUERY_ACTION_SET_HIGH_SPEED: return {...state, highSpeed: action.payload}
    case QUERY_ACTION_SET_SEARCH_PARSED: return {...state, searchParsed: action.payload}
    case QUERY_ACTION_SET_TRAIN_LIST: return {...state, trainList:action.payload}
    case QUERY_ACTION_SET_TICKET_TYPES: return {...state, ticketTypes: action.payload}
    case QUERY_ACTION_SET_TRAIN_TYPES: return {...state, trainTypes: action.payload}
    case QUERY_ACTION_SET_DEPART_STATIONS: return {...state, departStations: action.payload}
    case QUERY_ACTION_SET_ARRIVE_STATIONS: return {...state, arriveStations: action.payload}
    case QUERY_ACTION_SET_ORDER_TYPE: return {...state, orderType:action.payload}
    case QUERY_ACTION_SET_ONLY_TICKETS: return {...state, onlyTickets: action.payload}
    case QUERY_ACTION_SET_IS_FILTERS_VISIBLE: return {...state, isFiltersVisible: action.payload}
    case QUERY_ACTION_SET_CHECKED_TICKET_TYPES: return {...state, checkedTicketTypes: action.payload}
    case QUERY_ACTION_SET_CHECKED_TRAIN_TYPES: return {...state, checkedTrainTypes: action.payload}
    case QUERY_ACTION_SET_CHECKED_DEPART_STATIONS: return {...state, checkedDepartStations: action.payload}
    case QUERY_ACTION_SET_CHECKED_ARRIVE_STATIONS: return {...state, checkedArriveStations: action.payload}
    case QUERY_ACTION_SET_DEPART_TIME_START: return {...state, departTimeStart: action.payload}
    case QUERY_ACTION_SET_DEPART_TIME_END: return {...state, departTimeEnd: action.payload}
    case QUERY_ACTION_SET_ARRIVE_TIME_START: return {...state, arriveTimeStart: action.payload}
    case QUERY_ACTION_SET_ARRIVE_TIME_END: return {...state, arriveTimeEnd: action.payload}
    default: return state
  }
}

export default queryReducer