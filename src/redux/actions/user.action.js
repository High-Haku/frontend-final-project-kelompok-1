const setUserInfo = (data) => {
  return {
    type: "SET_USER_INFO",
    payload: data,
  };
};

export default setUserInfo;
