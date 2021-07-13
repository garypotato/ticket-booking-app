import {combineReducers} from "redux"
import home from "./homeReducer/homeReducer"
import query from "./queryReducer/queryReducer"
import ticket from "./ticketReducer/ticketReducer"
import order from "./orderReducer/orderReducer"

const rootReducer = combineReducers({
  home,
  query,
  ticket,
  order
})

export default rootReducer