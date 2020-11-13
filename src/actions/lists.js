//sync
export const setLists = (lists) => {
  return {
    type: "SET_LISTS",
    lists,
  };
};

export const getMyLists = () => {
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

export const addList = (list) => {
  return {
    type: "ADD_LIST",
    list,
  };
};

export const createList = (listData) => {
  return (dispatch) => {
    return fetch("http://localhost:3000/api/v1/lists", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(listData),
    })
      .then((r) => r.json())
      .then(console.log)
      .catch(console.log);
  };
};
