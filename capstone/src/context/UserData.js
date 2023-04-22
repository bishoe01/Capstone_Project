import React, { createContext, useReducer, useContext } from 'react';
import axios from 'axios';

const initialState = {
  users: {
    loading: false,
    data: null,
    error: null,
  },
  user: {
    loading: false,
    data: null,
    error: null,
  },
};
const loadingState = {
  loading: true,
  data: null,
  error: null,
};
const success = (data) => ({
  loading: false,
  data,
  error: null,
});
const error = (error) => ({
  loading: false,
  data: null,
  error: error,
});
function userReducer(state, action) {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: loadingState,
      };
    case 'GET_USERS_SUCCESS':
      return {
        ...state,
        users: success(action.data),
      };
    case 'GET_USERS_ERROR':
      return {
        ...state,
        users: error(action.error),
      };
    default:
      throw new Error(`Unhanded action type: ${action.type}`);
  }
}
const UserStateContext = createContext(null);
const UserDispatchContext = createContext(null);

export function UserProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, initialState);
  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>{children}</UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}
export function useUserState() {
  const state = useContext(UserStateContext);
  if (!state) {
    throw new Error('Cannot find UsersProvider');
  }
  return state;
}

export function useUserDispatch() {
  const dispatch = useContext(UserDispatchContext);
  if (!dispatch) {
    throw new Error('Cannot find UsersProvider');
  }
  return dispatch;
}

export async function getUser(dispatch) {
  dispatch({ type: 'GET_USERS' });
  try {
    const URL = 'https://port-0-erica-studyroom-6g2llfs1h510.sel3.cloudtype.app';

    const response = async () =>
      await axios
        .post(`${URL}/api/auth/login`, {
          username: 'yh2',
          password: 'yh2',
        })
        .then((res) => {
          axios
            .get(`${URL}/api/user/info`, {
              headers: { Authorization: `Bearer ${res.data.jwtToken}` },
            })
            .then((res) => {
              dispatch({ type: 'GET_USERS_SUCCESS', data: res.data });
            });
        });
    response();
  } catch (e) {
    dispatch({ type: 'GET_USERS_ERROR', error: e });
  }
}
