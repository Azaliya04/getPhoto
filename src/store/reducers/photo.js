import { FETCH_IMG_SUCCESS } from "../actions/actionTypes";

const initialState = {
  response: null,
};

export default function photoReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_IMG_SUCCESS:
      return {
        ...state,
        response: action.response,
      };
    default:
      return state;
  }
}
