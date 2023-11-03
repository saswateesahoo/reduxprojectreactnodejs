// import axios from 'axios';

// export const loginUser = (username, password, role_id) => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.post('http://localhost:3333/api/auth/signin', {
//         username,
//         password,
//         role_id,
//       });
//       dispatch({
//         type: 'LOGIN_SUCCESS',
//         payload: response.data,
//       });
//     } catch (error) {
//       dispatch({
//         type: 'LOGIN_FAILURE',
//         payload: error.response.data.message,
//       });
//     }
//   };
// };

import axios from 'axios';

export const loginUser = (username, password, role_id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'LOGIN_REQUEST',
      });

      const response = await axios.post('http://localhost:3333/api/auth/signin', {
        username,
        password,
        role_id,
      });
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: 'LOGIN_FAILURE',
        payload: error.response.data.message,
      });
    }
  };
};
