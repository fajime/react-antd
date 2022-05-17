/* eslint-disable key-spacing */
import * as types from '../../models/actions';

interface StateProps {
  logged: boolean;
  name: string;
  users: types.User[];
  remember: boolean;
}

const stateInit: StateProps = {
  logged: false,
  name: '',
  users: [],
  remember: false
};

export const authReducer = (state: StateProps = stateInit, action: types.ModifyAction) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        logged: true,
        name: action.payload.name,
        remember: action.payload.remember
      };
    case types.LOGOUT:
      return {
        ...state,
        logged: false,
        name: ''
      };
    case types.ADD_USERS:
      return {
        ...state,
        logged: true,
        users: action.payload
      };
    default:
      return state;
  }
};
