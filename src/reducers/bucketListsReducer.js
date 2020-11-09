export const bucketLists = (state = [], action) => {
  switch (action.type) {
    case "SET_BUCKET_LISTS":
      return action.bucket_lists;
    default:
      return state;
  }
};
