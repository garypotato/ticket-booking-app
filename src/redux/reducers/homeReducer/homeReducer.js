import {
  HOME_ACTION_SET_FROM,
  HOME_ACTION_SET_TO,
  HOME_ACTION_SET_IS_CITY_SELECTOR_VISIBLE,
  HOME_ACTION_SET_CURRENT_SELECTING_LEFT_CITY,
  HOME_ACTION_SET_CITY_DATA,
  HOME_ACTION_SET_IS_LOADING_CITY_DATA,
  HOME_ACTION_SET_IS_DATE_SELECTOR_VISIBLE,
  HOME_ACTION_SET_DEPART_DATE,
  HOME_ACTION_SET_HIGH_SPEED
} from './homeActions';

const initialState = {
  from: 'Sydney',
  to: 'Melbourn',
  isCitySelectorVisible: false,
  currentSelectingLeftCity: false,
  cityData: null,
  isLoadingCityData: false,
  isDateSelectorVisible: false,
  departDate: Date.now(),
  highSpeed: false,
}

const homeReducer = (state = initialState, action) => {
  switch(action.type) {
    case HOME_ACTION_SET_FROM:
      return {...state, from: action.payload};
    case HOME_ACTION_SET_TO:
      return {...state, to: action.payload}
    case HOME_ACTION_SET_IS_CITY_SELECTOR_VISIBLE:
      return {...state, isCitySelectorVisible: action.payload};
    case HOME_ACTION_SET_CURRENT_SELECTING_LEFT_CITY:
      return {...state, currentSelectingLeftCity: action.payload};
    case HOME_ACTION_SET_CITY_DATA:
      return {...state, cityData: action.payload};
    case HOME_ACTION_SET_IS_LOADING_CITY_DATA:
      return {...state, isLoadingCityData: action.payload};
    case HOME_ACTION_SET_IS_DATE_SELECTOR_VISIBLE:
      return {...state, isDateSelectorVisible: action.payload};
    case HOME_ACTION_SET_DEPART_DATE:
      return {...state, departDate: action.payload}
    case HOME_ACTION_SET_HIGH_SPEED:
      return {...state, highSpeed: action.payload}
    default: return state
  }
}

export default homeReducer