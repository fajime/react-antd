export const LOGIN = 'Auth Login';
export type LOGIN_TYPE = typeof LOGIN;

export const LOGOUT = 'Auth Logout';
export type LOGOUT_TYPE = typeof LOGOUT;

export const LOAD_USERS = 'Auth Load Users';
export type LOAD_USERS_TYPE = typeof LOAD_USERS;

export const ADD_USERS = 'Auth Add Users';
export type ADD_USERS_TYPE = typeof ADD_USERS;

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  key: number;
};

export type Users = User[];

export interface LOGIN_ACTION {
  type: LOGIN_TYPE;
  payload: {
    logged: boolean;
    name: string;
    remember: boolean;
  };
}

export interface LOGOUT_ACTION {
  type: LOGOUT_TYPE;
}

export interface LOAD_USERS_ACTION {
  type: LOAD_USERS_TYPE;
  payload: Users;
}

export interface ADD_USERS_ACTION {
  type: ADD_USERS_TYPE;
  payload: any;
}

export type ModifyAction = LOGIN_ACTION | LOGOUT_ACTION | LOAD_USERS_ACTION | ADD_USERS_ACTION;
