import {
  CREATE_TASK,
  GET_TASKS,
  DELETE_TASKS,
  UPDATE_TASKS,
  SHOW_LOADER,
  HIDE_LOADER,
  DISABLE_BUTTONS,
  ENABLE_BUTTONS,
  UPDATE_SEARCH,
  UPDATE_FILTER,
} from "./types";

const url = "https://react-todo-3ed67.firebaseio.com";

export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}
export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}
export function disableButtons() {
  return {
    type: DISABLE_BUTTONS,
  };
}
export function enableButtons() {
  return {
    type: ENABLE_BUTTONS,
  };
}

export function getTasks() {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      dispatch(disableButtons());
      const response = await fetch(`${url}/tascks.json`);
      const json = await response.json();
      const data = Object.keys(json).map((key) => {
        return { id: key, data: { ...json[key] } };
      });
      dispatch({ type: GET_TASKS, payload: data });
      dispatch(hideLoader());
      dispatch(enableButtons());
    } catch (e) {
      console.log(e);
      dispatch(hideLoader());
      dispatch(enableButtons());
    }
  };
}
export function deleteTask(id) {
  return async (dispatch) => {
    try {
      dispatch(disableButtons());
      await fetch(`${url}/tascks/${id}.json`, {
        method: "DELETE",
      });
      dispatch({ type: DELETE_TASKS, payload: id });
      dispatch(enableButtons());
    } catch (e) {
      console.log(e);
      dispatch(enableButtons());
    }
  };
}
export function updateTask(item) {
  return async (dispatch) => {
    try {
      dispatch(disableButtons());
      const response = await fetch(`${url}/tascks/${item.id}.json`, {
        method: "PUT",
        body: JSON.stringify({
          ...item.data,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      dispatch({ type: UPDATE_TASKS, payload: { id: item.id, data: data } });
      dispatch(enableButtons());
    } catch (e) {
      console.log(e);
      dispatch(enableButtons());
    }
  };
}
export function createTask(task) {
  return async (dispatch) => {
    try {
      dispatch(disableButtons());
      const data = {
        task: task.task,
        important: false,
        done: false,
      };
      const response = await fetch(`${url}/tascks.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const json = await response.json();
      dispatch({ type: CREATE_TASK, payload: { id: json.name, data: data } });
      dispatch(enableButtons());
    } catch (e) {
      console.log(e);
      dispatch(enableButtons());
    }
  };
}

export function updateSearch(searchSrt) {
  return { type: UPDATE_SEARCH, payload: searchSrt };
}
export function updateFilter(filterSrt) {
  return { type: UPDATE_FILTER, payload: filterSrt };
}
