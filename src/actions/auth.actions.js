import { authTypes } from './../types';

const {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} = authTypes;

export const login = (username, password) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });

    if (username?.trim().length > 2 && password?.trim().length > 2) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          username,
          password
        }
      });
    } else {
      dispatch({
        type: LOGIN_FAILURE,
        payload: {
          validation: true,
          message: 'Usuario y/o contraseña son incorrectos',
        }
      });
    }
  }
}

export const logout = () => {
  return (dispatch) => {
    dispatch({ type: LOGOUT })
  }
}