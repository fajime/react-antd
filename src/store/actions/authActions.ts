/* eslint-disable key-spacing */
// import { AnyAction } from 'redux';
// import { AppDispatch, RootState } from './../store';
// import { ThunkAction } from 'redux-thunk';

import * as actions from './../../models';
import { getData } from './../../utils/http';

export const login = (name: string, remember: boolean): actions.LOGIN_ACTION => ({
  type: actions.LOGIN,
  payload: {
    logged: true,
    name,
    remember
  }
});

export const logout = (): actions.LOGOUT_ACTION => ({
  type: actions.LOGOUT
});

export const addUsers = (users: actions.Users): actions.ADD_USERS_ACTION => ({
  type: actions.ADD_USERS,
  payload: users
});

export const loadUsers = (): any => (dispatch: any) => {
  const getUsers = getData('https://jsonplaceholder.typicode.com/users');
  getUsers.then((data: any) => {
    const users = data.map((user: any) => {
      const item = {
        ...user,
        key: user.id
      };
      return item;
    });

    const merma = users.splice(0, 5);
    dispatch(addUsers(merma));
  });
};
