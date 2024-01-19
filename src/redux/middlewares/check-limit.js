export function checkLimit(store) {
  return function (next) {
    return function (action) {
      const state = store.getState();
      if (state.bookings.length === 3) {
        alert("no more my good lad");
      } else {
        return next(action);
      }
    };
  };
}
