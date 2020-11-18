import { resetListForm } from "./listForm";

//sync
export const setLists = (lists) => {
  return {
    type: "SET_LISTS",
    lists,
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

export const updateListSuccess = (list) => {
  return {
    type: "UPDATE_LIST",
    list,
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
          // debugger;
          console.log("resp from fetch create list", resp.data);
          dispatch(addList(resp.data));
          dispatch(resetListForm());
          history.push(`/lists/${resp.data.id}`);
        }
      })

      .catch(console.log);
  };
};

export const updateList = (listData, history) => {
  console.log("fetch", listData);
  return (dispatch) => {
    const validListData = {
      start_date: listData.startDate,
      end_date: listData.endDate,
      name: listData.name,
      description: listData.description,
    };
    return fetch(`http://localhost:3000/api/v1/lists/${listData.list.id}`, {
      credentials: "include",
      method: "PATCH",
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
          // console.log("resp before update", resp);

          dispatch(updateListSuccess(resp.data));
          // dispatch(resetListForm());
          // debugger;
          history.push(`/lists/${resp.data.id}`);
        }
      })

      .catch(console.log);
  };
};
