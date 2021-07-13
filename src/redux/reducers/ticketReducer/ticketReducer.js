import {
  ACTION_SET_DEPART_STATION,
  ACTION_SET_ARRIVE_STATION,
  ACTION_SET_TRAIN_NUMBER,
  ACTION_SET_DEPART_DATE,
  ACTION_SET_SEARCH_PARSED,
  ACTION_SET_IS_SCHEDULE_VISIBLE,
  ACTION_SET_DEPART_TIME_STR,
  ACTION_SET_ARRIVE_TIME_STR,
  ACTION_SET_ARRIVE_DATE,
  ACTION_SET_DURATION_STR,
  ACTION_SET_TICKETS
} from "./ticketActions"

const initialState = {
  departDate: Date.now(),
  arriveDate: Date.now(),
  departTimeStr: null,
  arriveTimeStr: null,
  departStation: null,
  arriveStation: null,
  trainNumber: null,
  durationStr: null,
  tickets: [],
  isScheduleVisible: false,
  searchParsed: false,
}

const ticketReducer = (state = initialState, action) => {
  switch(action.type) {
    case ACTION_SET_DEPART_STATION: return {...state, departStation:action.payload}
    case ACTION_SET_ARRIVE_STATION: return {...state, arriveStation: action.payload}
    case ACTION_SET_TRAIN_NUMBER: return {...state, trainNumber: action.payload}
    case ACTION_SET_DEPART_DATE: return {...state, departDate: action.payload}
    case ACTION_SET_SEARCH_PARSED: return {...state, searchParsed: action.payload}
    case ACTION_SET_IS_SCHEDULE_VISIBLE: return {...state, isScheduleVisible: action.payload}
    case ACTION_SET_DEPART_TIME_STR: return {...state, departTimeStr:action.payload}
    case ACTION_SET_ARRIVE_TIME_STR: return {...state, arriveTimeStr: action.payload}
    case ACTION_SET_ARRIVE_DATE: return {...state, arriveDate: action.payload}
    case ACTION_SET_DURATION_STR: return {...state, durationStr: action.payload}
    case ACTION_SET_TICKETS: return {...state, tickets:action.payload}
    default: return state
  }
}

export default ticketReducer