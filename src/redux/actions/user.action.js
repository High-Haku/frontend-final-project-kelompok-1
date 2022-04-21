import axios from "axios";

export const setUserInfo = (data) => {
  return {
    type: "SET_USER_INFO",
    payload: data,
  };
};

export const addToMyFavorite = (data) => {
  return (dispatch) => {};
};

export const removeFromMyFavorite = (data) => {};
