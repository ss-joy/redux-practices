import { applyMiddleware, createStore } from "redux";
import { bookingReducer } from "./bookings/bookingReducer";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
  bookingReducer,
  composeWithDevTools(applyMiddleware())
);
