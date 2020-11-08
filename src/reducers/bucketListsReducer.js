export const bucketListsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_BUCKET_LISTS":
      return action.payload;
    default:
      return state;
  }
};
