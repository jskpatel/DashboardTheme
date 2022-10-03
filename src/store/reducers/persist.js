import { SET_THEME_MODE, SET_DATE_RANGE } from "../actions/types";

const initialState = {
  themeMode: false,
  postDateRangeData: "today",
};

const PersistReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_THEME_MODE:
      return {
        ...state,
        themeMode: payload,
      };
    case SET_DATE_RANGE:
      return {
        ...state,
        postDateRangeData: payload,
      };
    default:
      return state;
  }
};

export default PersistReducer;
