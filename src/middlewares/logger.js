export const logger = (store) => (next) => (action) => {
  console.group();
  console.log("action", action);
  const returned = next(action);
  console.log("new state", store.getState());
  console.groupEnd();
  return returned;
};

export default logger;
