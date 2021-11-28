export const initialState = {
  username: "",
  email: "",
  password: "",
};

export const ACTIONS = {
  FIELD: "field",
  REGISTER: "REGISTER",
  LOGIN: "LOGIN",
  GET_USER: "GET_USER",
  LOGOUT: "LOGOUT",
};

export const getUser = (payload) => {
  return {
    type: ACTIONS.GET_USER,
    payload,
  };
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.FIELD:
      return {
        ...state,
        [action.fieldName]: action.payload,
      };
    case ACTIONS.REGISTER: {
      const { data } = action.payload;
      const { username, email, password } = data;
      return {
        ...state,
        username,
        email,
        password,
      };
    }
    case ACTIONS.LOGIN: {
      const { data } = action.payload;
      const { username, password } = data;
      return {
        ...state,
        username,
        password,
      };
    }
    case ACTIONS.GET_USER: {
      const { data } = action.payload;
      return {
        ...state,
        username: data.username,
      };
    }
    case ACTIONS.LOGOUT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default authReducer;
