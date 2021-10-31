const initialState = {
  review: "",
};

export const ACTIONS = {
  CREATE_REVIEW: "CREATE_REVIEW",
  GET_REVIEW: "GET_REVIEW",
  DELETE_REVIEW: "DELETE_REVIEW",
};

export default function reviewReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.CREATE_REVIEW:
      return {
        ...state,
        review: action.payload,
      };
    case ACTIONS.GET_REVIEW:
      return {
        ...state,
        review: action.payload,
      };
    case ACTIONS.DELETE_REVIEW:
      return {
        ...state,
        review: "",
      };
    default:
      return state;
  }
}
