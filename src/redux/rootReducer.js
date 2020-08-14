import {
  CREATE_TASK,
  GET_TASKS,
  DELETE_TASKS,
  UPDATE_TASKS,
  HIDE_LOADER,
  SHOW_LOADER,
  DISABLE_BUTTONS,
  ENABLE_BUTTONS,
  UPDATE_SEARCH,
  UPDATE_FILTER,
} from "./types";

const initialState = {
  taskList: [],
  loading: false,
  disabled: false,
  done: false,
  search: "",
  filter: "all",
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };

    case DISABLE_BUTTONS:
      return { ...state, disabled: true };
    case ENABLE_BUTTONS:
      return { ...state, disabled: false };

    case GET_TASKS:
      return { ...state, taskList: action.payload };
    case CREATE_TASK:
      return { ...state, taskList: [...state.taskList, action.payload] };
    case DELETE_TASKS:
      const newTaskList = state.taskList.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, taskList: newTaskList };
    case UPDATE_TASKS:
      const updateTaskList = state.taskList.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
      return { ...state, taskList: updateTaskList };

    case UPDATE_SEARCH:
      return { ...state, search: action.payload };
    case UPDATE_FILTER:
      return { ...state, filter: action.payload };

    default:
      return state;
  }
};
