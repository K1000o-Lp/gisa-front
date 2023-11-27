import { authTypes } from '../types';

const {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} = authTypes;

const initialState = {
  user: null,
  logged: false,
  loading: false,
  error: null,
}

export const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case LOGIN_SUCCESS:
      return {
        user: action.payload,
        logged: true,
        loading: false,
        error: null,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        loading: false,
        error: action.payload,
      };

    case LOGOUT:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};