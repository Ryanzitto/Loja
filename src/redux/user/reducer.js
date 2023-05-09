import UserActiontypes from "./action-type";

const initialState = {
  user: null,
  isLogged: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserActiontypes.REGISTRA_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default userReducer;
