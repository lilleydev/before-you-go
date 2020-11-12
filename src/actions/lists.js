//sync
export const setBucketLists = (bucket_lists) => {
  return {
    type: "SET_BUCKET_LISTS",
    bucket_lists,
  };
};

export const getMyBucketLists = () => {
  return (dispatch) => {
    return fetch("http://localhost:3000/api/v1/lists", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => {
        if (resp.error) {
          alert(resp.error);
        } else {
          dispatch(setLists(resp.data));
        }
      })
      .catch(console.log);
  };
};

export const clearLists = () => {
  return {
    type: "CLEAR_LISTS",
  };
};
