export const bucketLists = (state = [], action) => {
  switch (action.type) {
    case "SET_BUCKET_LISTS":
      return action.bucket_lists;
    case "CLEAR_LISTS":
      return [];
    default:
      return state;
  }
};
