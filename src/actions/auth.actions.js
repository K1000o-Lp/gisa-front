import { authTypes } from './../types';

const {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT
} = authTypes;

export const login = (username, password) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });

    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        username,
        password
      }
    })
  }
}

export const logout = () => {
  return (dispatch) => {
    dispatch({ type: LOGOUT })
  }
}