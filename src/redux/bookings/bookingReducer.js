import { ADD, DELETE } from "./action-identifiers";
const initialState = {
  bookings: [],
};
export function bookingReducer(state = initialState, action) {
  switch (action.type) {
    case ADD:
      const newState = state.bookings.map((booking) => {
        return { ...booking };
      });
      newState.push(action.payload);
      return { ...state, bookings: newState };

    case DELETE:
      const deletedBookings = state.bookings.filter((booking) => {
        if (booking.id !== action.payload) {
          return { ...booking };
        }
      });

      return { ...state, bookings: deletedBookings };
    default:
      return state;
  }
}
