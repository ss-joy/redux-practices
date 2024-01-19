import { ADD, DELETE } from "./action-identifiers";

export function addBooking(value) {
  return {
    type: ADD,
    payload: value,
  };
}

export function deleteBooking(value) {
  return {
    type: DELETE,
    payload: value,
  };
}
