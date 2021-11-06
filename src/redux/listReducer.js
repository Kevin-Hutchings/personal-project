const initialState = {
  title: [],
  toggle: true,
};

export const ACTIONS = {
  ADD_TITLE: "ADD_TITLE",
  DELETE_TITLE: "DELETE_TITLE",
  GET_LIST: "GET_LIST",
  TOGGLE: "TOGGLE",
};

export default function listReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.ADD_TITLE:
      return {
        ...state,
        title: action.payload,
      };
    case ACTIONS.DELETE_TITLE:
      return {
        ...state,
        title: action.payload,
      };
    case ACTIONS.GET_LIST:
      return {
        ...state,
        title: action.payload,
      };
    case ACTIONS.TOGGLE:
      return {
        ...state,
        toggle: !state.toggle,
      };
    default:
      return state;
  }
}
