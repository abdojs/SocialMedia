const Reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        ...state,
        isFetching: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload.ct_user,
        token: action.payload.ct_token,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default Reducer;