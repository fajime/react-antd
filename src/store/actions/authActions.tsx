/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable key-spacing */
import { notification } from '../../ant-modules';
import * as actions from '../../models';
import { getData } from '../../utils/http';

export const login = (name: string, remember: boolean): actions.LOGIN_ACTION => ({
  type: actions.LOGIN,
  payload: {
    name,
    remember
  }
});

export const logout = (): actions.LOGOUT_ACTION => ({
  type: actions.LOGOUT
});

export const addUsers = (users: any): actions.ADD_USERS_ACTION => ({
  type: actions.ADD_USERS,
  payload: users
});

export const loadUsers = (): any => (dispatch: any) => {
  getData('https://jsonplaceholder.typicode.com/users')
    .then((data: any) => {
      const users = data.map((user: any) => {
        // eslint-disable-next-line object-curly-newline
        const { email, id, name, phone, username, website } = user;
        const item = {
          id,
          name,
          email,
          phone,
          username,
          website
        };
        return item;
      });
      dispatch(addUsers(users));
    })
    .catch((error: any) => {
      notification.open({
        message: `Ha ocurrido el siguiente error durante la petición: ${error}`,
        description: 'Inténtelo de nuevo...',
        onClick: () => {
          console.log('Notification Clicked!');
        }
      });
    });
};
export const addPosts = (posts: any): actions.ADD_POSTS_ACTION => ({
  type: actions.ADD_POSTS,
  payload: posts
});
export const loadPosts = (): any => (dispatch: any) => {
  getData('https://jsonplaceholder.typicode.com/posts')
    .then((data: any) => {
      const posts = data.map((post: any) => {
        const { userId, id, title, body } = post;
        const item = {
          userId,
          id,
          title,
          body
        };
        return item;
      });
      dispatch(addPosts(posts));
    })
    .catch((error: any) => {
      notification.open({
        message: `Ha ocurrido el siguiente error durante la petición: ${error}`,
        description: 'Inténtelo de nuevo...',
        onClick: () => {
          console.log('Notification Clicked!');
        }
      });
    });
};
