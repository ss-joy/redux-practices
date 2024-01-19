import { applyMiddleware, createStore } from "redux";
import { bookingReducer } from "./bookings/bookingReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { checkLimit } from "./middlewares/check-limit";
export const store = createStore(
  bookingReducer,
  composeWithDevTools(applyMiddleware(checkLimit))
);
