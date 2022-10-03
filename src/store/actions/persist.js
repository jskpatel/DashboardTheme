import { SET_THEME_MODE, SET_DATE_RANGE } from "./types";

export const setThemeMode = (data) => ({ type: SET_THEME_MODE, payload: data });

export const postDateRange = (data) => ({
  type: SET_DATE_RANGE,
  payload: data,
});
