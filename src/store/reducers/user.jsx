const user = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        token: action.payload.token
      };
    case "GET_USER":
      return {
        ...state,
        self: action.payload
      };
    case "LOGOUT":
      return {};
    default:
      return state;
  }
};

export default user;
