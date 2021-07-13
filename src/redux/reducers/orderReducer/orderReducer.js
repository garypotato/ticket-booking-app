import {
  ACTION_SET_DEPART_STATION,
  ACTION_SET_ARRIVE_STATION,
  ACTION_SET_TRAIN_NUMBER,
  ACTION_SET_SEAT_TYPE,
  ACTION_SET_DEPART_DATE,
  ACTION_SET_SEARCH_PARSED,
  ACTION_SET_DEPART_TIME_STR,
  ACTION_SET_ARRIVE_TIME_STR,
  ACTION_SET_ARRIVE_DATE,
  ACTION_SET_DURATION_STR,
  ACTION_SET_PRICE,
  ACTION_SET_PASSENGERS,
  ACTION_SET_MENU,
  ACTION_SET_IS_MENU_VISIBLE
} from "./orderActions"

const initialState = {
  trainNumber: null,
  departStation: null,
  arriveStation: null,
  seatType: null,
  departDate: Date.now(),
  arriveDate: Date.now(),
  departTimeStr: null,
  arriveTimeStr: null,
  durationStr: null,
  price: null,
  passengers: [],
  menu: null,
  isMenuVisible: false,
  searchParsed: false,
}

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_SET_DEPART_STATION: return {...state, departStation: action.payload}
    case ACTION_SET_ARRIVE_STATION: return {...state, arriveStation: action.payload}
    case ACTION_SET_TRAIN_NUMBER: return {...state, trainNumber: action.payload}
    case ACTION_SET_SEAT_TYPE: return {...state, seatType: action.payload}
    case ACTION_SET_DEPART_DATE: return {...state, departDate: action.payload}
    case ACTION_SET_SEARCH_PARSED: return {...state, searchParsed: action.payload}
    case ACTION_SET_DEPART_TIME_STR: return {...state, departTimeStr: action.payload}
    case ACTION_SET_ARRIVE_TIME_STR: return {...state, arriveTimeStr: action.payload}
    case ACTION_SET_ARRIVE_DATE: return {...state, arriveDate: action.payload}
    case ACTION_SET_DURATION_STR: return {...state, durationStr: action.payload}
    case ACTION_SET_PRICE: return {...state, price: action.payload}
    case ACTION_SET_PASSENGERS: return {...state, passengers: action.payload}
    case ACTION_SET_MENU: return {...state, menu: action.payload}
    case ACTION_SET_IS_MENU_VISIBLE: return {...state, isMenuVisible: action.payload}
    
    default: return state
  }
}

export default orderReducer