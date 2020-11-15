import { resetListForm } from "./listForm";
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

export const createList = (listData, history) => {
  console.log("fetch", listData);
  return (dispatch) => {
    const validListData = {
      start_date: listData.startDate,
      end_date: listData.endDate,
      name: listData.name,
      description: listData.description,
    };
    return fetch("http://localhost:3000/api/v1/lists", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(validListData),
    })
      .then((r) => r.json())
      .then((resp) => {
        if (resp.error) {
          alert(resp.eror);
        } else {
          dispatch(addList(resp.data));
          dispatch(resetListForm());
          history.push(`/lists/${resp.data.id}`);
        }
      })

      .catch(console.log);
  };
};
